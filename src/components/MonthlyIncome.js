import React, { useState } from "react";
import {
  InputLabel,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Typography,
} from "@mui/material";

const MonthlyIncomeTextField = ({ data, setData,handleClick }) => {
  
  const handleChange = (event) => {
    setData({
      ...data,
      monthlyIncome: event.target.value,
    });
  };

  
  

  return (
    <div>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          Monthly Income
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          onChange={handleChange}
          value={data.monthlyIncome}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Monthly Income"
        />
        

        <Button
          sx={{ mt: 3 }}
          size="medium"
          variant="contained"
          onClick={handleClick}
        >
          Calculate
        </Button>
      </FormControl>
    </div>
  );
};

export default MonthlyIncomeTextField;
