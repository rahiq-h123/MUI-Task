import {
  Box,
  FormControlLabel,
  Checkbox,
  Typography,
  Button,
  TextField,
  Card,
} from "@mui/material";

import React from 'react'

const Login = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography sx={{ fontSize: 24, fontWeight: "regular" }}>
        Login Form
      </Typography>
      <Card
        sx={{
          width: 400,
          height: 500,
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: "regular" }}>
          Login
        </Typography>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          sx={{
            width: "100%",
            mb: "24px",
          }}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          sx={{
            width: "100%",
            mb: "24px",
          }}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Remember me"
        />
        <Button fullWidth variant="contained" sx={{ width: "100%", my: "24px" }}>
          Login
        </Button>
        <Button variant="text" sx={{ width: "100%", my: "24px" }}>
          Forgot password?
        </Button>
      </Card>
    </Box>
  );
}

export default Login
