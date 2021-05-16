const { hash } = window.location;
const message = atob(hash.replace('#', ''));
if (message) {
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#message-show').classList.remove('hide');
  document.querySelector('h2').innerHTML = message;
}
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#message-form').classList.add('hide');
  document.querySelector('#link-form').classList.remove('hide');
  const inputMsg = document.querySelector('#message-input').value;

  const encrypted = btoa(inputMsg);

  const linkInput = document.querySelector('#link-input');
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
