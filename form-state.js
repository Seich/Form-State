/*!
 * Form-State.js
 *
 * Copyright © 2017 David Diaz
 * MIT license
 * https://github.com/seich/form-state
 */

class FormState {
	constructor(form, settings = {}) {
		this.form = form;

		this.config = Object.assign({
			prefix: 'fs'
		}, settings)

		this.inputs = form.querySelectorAll('input, select, textarea');
		this.inputs.forEach((e, i) => this.initElement(e, i));
	}

	initElement(el, index) {
		let classes = {};

		[
			'pristine',
			'focused',
			'dirty',
			'valid',
			'invalid'
		].forEach(s => classes[s] = `${this.config.prefix}-${s}`);

		el.classList.add(classes.pristine);

		el.addEventListener('focus', () => el.classList.add(classes.focused));
		el.addEventListener('blur', () => el.classList.remove(classes.focused));

		el.addEventListener('input', () => {
			el.classList.remove(classes.pristine);
			el.classList.add(classes.dirty);

			if (el.validity.valid) {
				el.classList.add(classes.valid);
				el.classList.remove(classes.invalid);
			} else {
				el.classList.add(classes.invalid);
				el.classList.remove(classes.valid);
			}
		});
	};
}
