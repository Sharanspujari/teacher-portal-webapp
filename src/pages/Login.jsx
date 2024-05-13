import React,{useState} from "react";
import { Button, TextField, Typography } from "@mui/material"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <Typography variant="h5">Login</Typography>
      {/* {error && <Typography color="error">{error}</Typography>} */}
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" >
        Login
      </Button>
    </div>
  );
};

export default Login;
