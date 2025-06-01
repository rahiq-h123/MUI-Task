import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";

const Chat = () => {
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
        Chat App
      </Typography>
      <Card
        sx={{
          width: 400,
          height: 500,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardContent sx={{ height: "85%" }}>
          <Typography sx={{ fontSize: 18, fontWeight: "medium" }}>
            Chat with Ahmed
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Stack spacing={0.5} mb={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: 24, height: 24 }}>A</Avatar>
              <Typography sx={{ fontSize: 14 }}>Ahmed</Typography>
            </Stack>
            <Typography sx={{ fontSize: 14, color: "text.secondary", ml: 4 }}>
              Hello!
            </Typography>
          </Stack>

          <Stack spacing={0.5} mb={2}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar sx={{ width: 24, height: 24 }}>Y</Avatar>
              <Typography sx={{ fontSize: 14 }}>You</Typography>
            </Stack>
            <Typography sx={{ fontSize: 14, color: "text.secondary", ml: 4 }}>
              Hi, how are you?
            </Typography>
          </Stack>
        </CardContent>

        <Divider />
        <Box sx={{ p: 1, display: "flex", alignItems: "center" }}>
          <TextField
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InsertEmoticonIcon />
                </InputAdornment>
              ),
            }}
          />
          <IconButton sx={{ ml: 1 }}>
            <SendIcon color="primary" />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}

export default Chat;
