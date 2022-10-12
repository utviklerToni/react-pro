import React, { useState, useEffect } from 'react';

import Login from '../../components/Login/Login';
import Home from '../../components/Home/Home';

function LoginApp() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

   useEffect(() => {
      const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

      if (storedUserLoggedInInformation === '1') {
         setIsLoggedIn(true);
      }
   }, []);

   const loginHandler = (email, password) => {
      // We should of course check email and password
      // But it's just a dummy/ demo anyways
      localStorage.setItem('isLoggedIn', '1');
      setIsLoggedIn(true);
   };

   const logoutHandler = () => {
      localStorage.removeItem('isLoggedIn');
      setIsLoggedIn(false);
   };

   return (
      <div>
         <div isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
         <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
         </main>
      </div>
   );
}

export default LoginApp;
