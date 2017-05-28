# Form-State.js

Form-State.js will put CSS classes depicting the current state of input elements within a given form.

## Usage

````javascript
new FormState(document.getElementById('signup-form'));
````

## Classes

### Pristine
Elements will initially be marked as pristine until their initial value changes.

### Focused
The input currently in focus will be marked as focused. When unfocused it'll lose this class.

### Dirty
Once an element's value changes, it'll be marked as dirty and will lose it's pristine class forever.

### Valid
If an elements ValidityState is valid, it'll be marked as valid.

### Invalid
If an elements ValidityState is invalid, it'll be marked as invalid.
