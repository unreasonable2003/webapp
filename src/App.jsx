import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { withAuthenticator } from '@aws-amplify/ui-react'
function App({signOut, user}) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default withAuthenticator(App)
