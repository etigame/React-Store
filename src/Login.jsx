import requestData from './utils/requestFunctions'

export default function Login() {

    function handleSubmit(e) {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        requestData('login', 'POST', {email, password}).then(token => localStorage.setItem('token', token))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" name="email" id="email" placeholder='Your email'/>
            <input type="password" name="password" id="password" placeholder='Your password'/>
            <button type="submit">Login</button>
        </form>
    )
}