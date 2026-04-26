import { useState } from "react";
import axios from "axios";

function Login({ setIsLoggedIn }) {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/login", user); // ✅ FIXED

      if (res.data.success) {
        localStorage.setItem("auth", "true");
        setIsLoggedIn(true);
      }
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input placeholder="Username"
        onChange={(e)=>setUser({...user, username:e.target.value})} />

      <input type="password" placeholder="Password"
        onChange={(e)=>setUser({...user, password:e.target.value})} />

      <button>Login</button>
    </form>
  );
}

export default Login;