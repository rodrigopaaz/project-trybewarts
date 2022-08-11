let inputName = document.getElementsByTagName('input')[0]
let inputPassword = document.getElementsByTagName('input')[1]
let buttonLogin = document.getElementsByTagName('button')[0]

buttonLogin.addEventListener('click', function(){
    if (inputName.value!=='tryber@teste.com' && inputPassword!=='123456'){
        alert('Email ou senha inválidos.')
    }
    else {alert('Olá, Tryber!')}
})

