export const registerform = document.querySelector('#register-form')
export const loginform = document.querySelector('#login-form')

const changeToRegisterBtn = document.querySelector('#change-to-register')
const changeLoginBtn = document.querySelector('#change-to-login')

const authSubTitle = document.querySelector('#auth-type')

const registerName = document.querySelector('#register-name')
const registerPhone = document.querySelector('#register-phone')
const registerPassword = document.querySelector('#register-password')

const loginPhone = document.querySelector('#login-phone')
const loginPassword = document.querySelector('#login-password')

changeLoginBtn.addEventListener('click', () => {
    changeToLoginButton()
})

function changeToLoginButton() {
    registerform.classList.remove('active')
    loginform.classList.add('active')
    authSubTitle.innerHTML= 'Sign in' 
}

changeToRegisterBtn.addEventListener('click', () => {
    loginform.classList.remove('active')
    registerform.classList.add('active')
    authSubTitle.innerHTML= 'Register'
})

function register(e){
    e.preventDefault()


    const data = {
        phone: registerPhone.value,
        name: registerName.value,
        password : registerPassword.value
    }

    fetch('https://todo.paydali.uz/api/register' , {
        method: 'POST',
        headers: {
            "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
    })

    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            Swal.fire('Good job!', 'You registered succesfully!', 'succes')
            changeToLoginButton() 
        } else {
            Swal.fire('Fail!', data.message, 'error')
        }
    })
    .catch(err => console.log(err))
}

function login(e){
    e.preventDefault()

    const data = {
        phone : loginPhone.value,
        password : loginPassword.value
    }
    fetch('https://todo.paydali.uz/api/login' , {
        method: 'POST',
        headers: {
            "Content-type": "Application/json",
        },
        body: JSON.stringify(data),
    })

    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            Swal.fire('Good job!', 'Signed in succesfully!', 'succes')
          localStorage.setItem('todo-token' , data.payload.token)
          localStorage.setItem('todo-username' , data.payload.name)
        } else {
            Swal.fire('Fail!', data.message, 'error')
        }
    })
    .catch(err => console.log(err))
}
loginform.addEventListener('submit', login)

registerform.addEventListener('submit', register)