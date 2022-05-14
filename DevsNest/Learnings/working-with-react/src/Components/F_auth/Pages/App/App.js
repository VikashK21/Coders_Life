import React from 'react'
import { AuthProvider } from '../../context/AuthContext';

// import Routes from './Routing';
import Signup from '../Signup';

const App = () => {
  return (
    <AuthProvider>

      <div>
        {/* <Routes /> */}
        <Signup />
      </div>

    </AuthProvider>
  )
}

export default App;