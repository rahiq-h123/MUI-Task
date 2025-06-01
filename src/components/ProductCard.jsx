import {
  Box,
  CardMedia,
  CardContent,
  Rating,
  Typography,
  Button,
  Card,
  Chip,
  Divider,
} from "@mui/material";

import React from "react";

const ProductCard = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt: "40px",
      }}
    >
      <Typography sx={{ fontSize: 24, fontWeight: "regular" }}>
        Product Card
      </Typography>
      <Card
        sx={{
          width: "auto",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://th.bing.com/th/id/OIP._xhKySsJ3lEOpRnugTP21wHaLH?rs=1&pid=ImgDetMain"
          alt="Product"
        />
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Wireless Headphones
          </Typography>

          <Rating
            name="product-rating"
            value={4}
            readOnly
            size="small"
            sx={{ mb: 1 }}
          />

          <Chip
            label="In Stock"
            color="success"
            sx={{
              width: "100%",
              borderRadius: "20px",
              fontWeight: "bold",
              mb: 1,
            }}
          />

          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            $99.99
          </Typography>

          <Divider />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              mt: "24px",
            }}
          >
            ADD TO CART
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductCard;
