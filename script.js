const inputName = document.getElementsByTagName('input')[0];
const inputPassword = document.getElementsByTagName('input')[1];
const buttonLogin = document.getElementsByTagName('button')[0];
const buttonAgreement = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');

buttonLogin.addEventListener('click', () => {
  if (inputName.value !== 'tryber@teste.com' && inputPassword !== '123456') {
    alert('Email ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

agree.addEventListener('click', () => {
  buttonAgreement.disabled = false;
});
