import React from 'react';
import { Route } from "react-router-dom";
import { LoginPage, UserRegistrationPage, ForgotPasswordPage, HomePage } from './components';

function App() {
  return (
    <div className="">
      <Route exact path={["/", "/login"]}><LoginPage /></Route>
      <Route exact path="/signup"><UserRegistrationPage /></Route>
      <Route exact path="/forgot-password"><ForgotPasswordPage /></Route>
      <Route exact path="/home"><HomePage /></Route>
    </div>
  );
}

export default App;
