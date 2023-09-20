import React from "react";
import TodoWrapper from "./components/TodoWrapper";
import LoginRegister from "./components/LoginRegister";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="google">
        <GoogleOAuthProvider clientId="494777533404-46gj038lsu8lrbfm141g38v3opb4he6d.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              const decoded = jwt_decode(credentialResponse.credential);
              console.log(decoded);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>
      </div>
      <Router>
        <Routes>
          <Route path="/loginpage" element={<LoginRegister />} />

          <Route path="/homepage" element={<TodoWrapper />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
