import React,{ useContext } from 'react'
import Login from './Components/Login'
import React,{ usestate } from 'react'
import Profile from './Components/Profile'
import { LoginContext } from './Context/LoginContext'
function App() {
    const [showprofile , setShowProfile] = useState(false);
    const [username , setUsename] = useState('')
    
  return (
    <div className='App'>
        <LoginContext.Provider value={{username , setUsername ,setShowProfile}}>
            {showprofile ? <Profile /> : <Login />}
        </LoginContext.Provider>
    </div>
  )
}

export default App