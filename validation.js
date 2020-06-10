'use strict';

const inputs = document.querySelectorAll('input');

const patterns = {
  telephone: /^\d{11}$/,
  username: /^[a-z\d]{5,12}$/i,
  password: /^[\w@-]{8-20}$/,
  slug: /^[a-z\d-]{8-20}$/,
  email: /^([a-z\d\.-]+)@(a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};


function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'valid';
  } else {
    field.className = 'invalid';
  }

}


inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(e.target.attributes.name.value);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});





let str = 'The rain in Spain falls mainly in the plain';

// Validate
let validator = /S/g;
let validator1 = /[0-9]/g;
console.log(validator.test(str));

// Find
let regex = /in\b/g;
console.log(str.match(regex));
