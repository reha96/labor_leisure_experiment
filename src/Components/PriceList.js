import React from "react";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const PriceList = (props) => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  const [value5, setValue5] = React.useState("");
  const [value6, setValue6] = React.useState("");
  const [value7, setValue7] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleChange2 = (event) => {
    setValue2(event.target.value);
    // if(value2 === ""){
    //   setHelperText("Please make a decision for each row.")
    //   setError(true)
    // }
  };

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleChange5 = (event) => {
    setValue5(event.target.value);
  };

  const handleChange6 = (event) => {
    setValue6(event.target.value);
  };

  const handleChange7 = (event) => {
    setValue7(event.target.value);
  };

  const [helperText, setHelperText] = React.useState(
    "Make a decision for each row."
  );
  return (
    <div>
      <p className="HomePage_p">
        Please make a selection on each row. Every selection has equal chance
        become realized.
      </p>
      <Box
        sx={{
          // px: 20,
          mb: 2.5,
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <FormControl error={error}>
            <FormLabel id="demo-controlled-radio-buttons-group">
              {" "}
              Autoplay ... No Autoplay{" "}
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value1}
              onChange={handleChange1}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label="+ 2£"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 2.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black" />
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value2}
              onChange={handleChange2}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label="+ 1£"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 2.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black" />
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value3}
              onChange={handleChange3}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label="+ 0.5£"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 0.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black" />
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value4}
              onChange={handleChange4}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label="+ 0£"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 0.5 }}
                control={<Radio />}
                label="+ 0£"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black" />
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value5}
              onChange={handleChange5}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 0.5 }}
                control={<Radio />}
                label="+ 0.5£"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black" />
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value6}
              onChange={handleChange6}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 0.5 }}
                control={<Radio />}
                label="+ 1£"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <Divider orientation="horizontal" flexItem color="black"/>
            <RadioGroup
              row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value7}
              onChange={handleChange7}
            >
              <FormControlLabel
                value="autoplay1"
                sx={{ pr: 5, pb: 0.5 }}
                control={<Radio />}
                label=""
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="noAutoplay1"
                sx={{ pb: 0.5 }}
                control={<Radio />}
                label="+ 2£"
                labelPlacement="bottom"
              />
            </RadioGroup>
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        </Stack>
      </Box>
    </div>
  );
};

export default PriceList;
