const inputName = document.getElementsByTagName('input')[0];
const inputPassword = document.getElementsByTagName('input')[1];
const buttonLogin = document.getElementsByTagName('button')[0];
const buttonAgreement = document.getElementById('submit-btn');
const agree = document.getElementById('agreement');
const textArea = document.getElementById('textarea');
const counter = document.getElementById('counter');
const main = document.getElementById('evaluation-form').parentElement;
counter.innerHTML = textArea.maxLength;
const nome = document.getElementById('input-name');
const nome2 = document.getElementById('name');
const lastName = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const email2 = document.getElementById('email');
const casa = document.getElementById('house');
const casa2 = document.getElementById('casa');
const family = document.getElementById('familiaDiv');
const familia = document.getElementById('familia');
const subject = document.getElementById('materias');
const conteudos = document.getElementById('conteudos');
const avaliacao = document.getElementById('nota');
const avaliacao2 = document.getElementById('avaliacao');
const observacao = document.getElementById('observacoes');

let materias = [];
const time = [];
const nota = [];

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

textArea.addEventListener('keyup', () => {
  const contador = textArea.value.length;
  counter.innerHTML = textArea.maxLength - contador;
});

conteudos.addEventListener('click', (object) => {
  const captura = object.target.value;
  materias.push(captura);
});

family.addEventListener('click', (object) => {
  const captura = object.target.value;
  time.push(captura);
});

avaliacao.addEventListener('click', (object) => {
  const captura = object.target.value;
  nota.push(captura);
});

buttonAgreement.addEventListener('click', () => {
  main.style.display = 'none';
  nome2.innerHTML = `Nome: ${nome.value} ${lastName.value}`;
  email2.innerHTML = `Email: ${email.value}`;
  casa2.innerHTML = `Casa: ${casa.value}`;
  materias = materias.sort();
  subject.innerHTML = `Matérias: ${materias[0]}, ${materias[1]}, ${materias[2]}`;
  familia.innerHTML = `Família: ${time}`;
  avaliacao2.innerHTML = `Avaliação: ${nota}`;
  observacao.innerHTML = `Observações: ${textArea.value}`;
});
