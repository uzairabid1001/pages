import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const theme = createTheme();

export default function SignUp() {

  const [Name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const navigation = useNavigate();

  const val = () => {
    let obj = {
      Name,
      email,
      password,

    }
    console.log(obj)
    navigation(`/profile/${email}`,{state:obj})
  }

  return (<>
  <h1>Sign Up</h1>
   <div> <TextField onChange={(e) => setName(e.target.value)} label="Enter Your Name" /></div>
   <br />
   <div><TextField onChange={(e) => setEmail(e.target.value)} label="Enter Your Email" /></div><br />
   <div><TextField type={"password"} onChange={(e) => setPassword(e.target.value)} label="Enter Password" /></div><br />
    <Button onClick={val} variant='contained'>Signup</Button>
</>  );
}