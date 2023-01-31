import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';
let formData = {};

formEl.addEventListener('input', throttle(saveValueForm, 500));
formEl.addEventListener('submit', handleSubmit);

updateValueForm();

function handleSubmit(event) {
  event.preventDefault();

  if (event.target.email.value === "" || event.target.message.value === "") {
    return alert('Please enter all data to form');
}
  const { email, message } = event.currentTarget;
  const valueInput = { email: email.value, message: message.value};
  console.log(valueInput);
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function saveValueForm(event) {
  try {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
} catch (error) {
   console.error('Error.message ', error.message)
}
}

function updateValueForm() {
 try {
 
  if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (const key in formData) {
      formEl.elements[key].value = formData[key];
    }
  }
} catch (error) {
  console.error('Error.message ', error.message);
}
}
