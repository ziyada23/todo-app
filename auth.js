export const registerform = document.querySelector('#register-form')
export const loginform = document.querySelector('#login-form')

const changeToRegisterBtn = document.querySelector('#change-to-register')
const changeLoginBtn = document.querySelector('#change-to-login')

const authSubTitle = document.querySelector('#auth-type')

changeLoginBtn.addEventListener('click', () => {
    registerform.classList.remove('active')
    loginform.classList.add('active')
    authSubTitle.innerHTML= 'Sign in'
})

changeToRegisterBtn.addEventListener('click', () => {
    loginform.classList.remove('active')
    registerform.classList.add('active')
    authSubTitle.innerHTML= 'Register'
})