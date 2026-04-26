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
      const res = await axios.post("http://127.0.0.1:5000/api/login", user);

      if (res.data.success) {
        localStorage.setItem("auth", "true");
        setIsLoggedIn(true);
      }

    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a"
    }}>
      <form onSubmit={handleLogin} style={{
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        width: "300px"
      }}>
        <h2>Admin Login 🔐</h2>

        <input
          placeholder="Username"
          onChange={(e)=>setUser({...user, username:e.target.value})}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setUser({...user, password:e.target.value})}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />

        <button style={{
          width: "100%",
          padding: "10px",
          background: "#3b82f6",
          color: "white",
          border: "none"
        }}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;