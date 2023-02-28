import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <form action="" className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <label>Email</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button disabled={isLoading}>Log In</button>
      {error && <div className="error">{error}</div>}
      <div className="open-message">
        Feel free to create your own login or use the pre-populated guest account listed below. If you choose to create your own account, feel free to use a fake email address.
        <ul><u>Guest Account</u>
          <li>Email: guest@guest.com</li>
          <li>Password: ABCabc123!</li>
        </ul>
      </div>
    </form>
  )
}

export default Login