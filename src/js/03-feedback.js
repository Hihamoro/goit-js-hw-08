import throttle from 'lodash.throttle';

// const 'feedback - form - state' = 'feedback - form - state';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('texterea[name="message"]');

const formData = {};

function saveOnRepository(element) {
  formData[element.target.name] = element.target.value;
  localStorage.setItem('feedback - form - state', JSON.stringify(formData));
}

function formSubmit(element) {
  element.preventDefault();
  console.log(formData);
  localStorage.removeItem('feedback - form - state');
  feedbackForm.reset();
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.log('state eror');
  }
};

const storageData = load('feedback - form - state');

if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
}

feedbackForm.addEventListner('input', throttle(saveOnRepository, 500));
feedbackForm.addEventListner('submit', formSubmit);
