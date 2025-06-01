import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Card,
  Divider,
} from "@mui/material";
import React, { useState } from "react"; 

const languages = [
  { value: "ar", label: "Arabic" },
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
];

const SelectForm = () => {
  const [selectedLan, setSelectedLan] = useState(""); 

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
        Select Form
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
          Choose Language
        </Typography>

        <Divider sx={{ my: 2 }} />

        <TextField
          id="filled-select-currency-native"
          select
          label="Language"
          value={selectedLan} 
          onChange={(e) => setSelectedLan(e.target.value)}
          sx={{ marginBottom: 2, width: "100%" }}
          variant="outlined"
        >
          {languages.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Button variant="contained" fullWidth sx={{ my: "24px" }}>
          Submit
        </Button>

        <Typography variant="body1" sx={{ marginTop: 2 }}>
          selected: {selectedLan}
        </Typography>
      </Card>
    </Box>
  );
};

export default SelectForm;
