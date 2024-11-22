import React from "react";
import LoginForm from "../../components/auth/login-form/LoginForm";

const Auth: React.FC = () => {
  return(
    <>
      {/* Must become a main title component to avoid repeating syles */}
      <h1 className="text-4xl font-extrabold">Se connecter</h1> 
      <LoginForm />
    </>
  )
}
export default Auth;