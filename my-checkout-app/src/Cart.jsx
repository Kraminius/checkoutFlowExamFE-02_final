// src/Cart.jsx
import React from 'react';
import { Box, Typography, Grid } from '@mui/material'; 

const Cart = () => {
  return (
    <Box sx={{ padding: 2 }}>  
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>
      {/* Use Grid for layout of cart items, etc. */}
    </Box> 
  );
}; 

export default Cart;
