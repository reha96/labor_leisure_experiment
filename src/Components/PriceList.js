import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayDisabledSharpIcon from "@mui/icons-material/PlayDisabledSharp";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

const PriceList = (props) => {
  const [currentButtonVariant, setCurrentButtonVariant] = useState(
    Array(9).fill("outlined")
  );
  const [currentButtonVariantb, setCurrentButtonVariantb] = useState(
    Array(9).fill("outlined")
  );

  const handleButtonVariantChange = (index, value) => {
    let newCurrentButtonVariant = [...currentButtonVariant];
    newCurrentButtonVariant[index] = "contained";
    setCurrentButtonVariant(newCurrentButtonVariant);

    let newCurrentButtonVariantb = [...currentButtonVariantb];
    newCurrentButtonVariantb[index] = "outlined";
    setCurrentButtonVariantb(newCurrentButtonVariantb);

    localStorage.setItem(`MPL${index + 1}`, `Autoplay +${value}£`);
  };
  const handleButtonVariantChangeb = (index, value) => {
    let newCurrentButtonVariant = [...currentButtonVariant];
    newCurrentButtonVariant[index] = "outlined";
    setCurrentButtonVariant(newCurrentButtonVariant);

    let newCurrentButtonVariantb = [...currentButtonVariantb];
    newCurrentButtonVariantb[index] = "contained";
    setCurrentButtonVariantb(newCurrentButtonVariantb);

    localStorage.setItem(`MPL${index + 1}`, `No Autoplay +${value}£`);
  };

  if (
    currentButtonVariant.filter((variant) => variant === "contained").length +
      currentButtonVariantb.filter((variant) => variant === "contained")
        .length ===
    9
  ) {
    localStorage.setItem("MPLdisable", false);
  } else {
    localStorage.setItem("MPLdisable", true);
  }

  const values = [0.50, 0.25, 0.10, 0.05, 0, 0.05, 0.10, 0.25, 0.50];

  return (
    <div>
      <Box
        sx={{
          mb: 2.5,
        }}
      >
        <Stack
          spacing={2}
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {values.map((value, index) => (
            <ButtonGroup
              key={index}
              variant="outlined"
              aria-label="outlined button group"
            >
              <Button
                startIcon={<PlayArrowSharpIcon fontSize="large" />}
                style={{ display: "block", width: "200px" }}
                variant={currentButtonVariant[index]}
                onClick={() =>
                  handleButtonVariantChange(index, index < 5 ? value : 0)
                }
              >
                Autoplay +£{index < 5 ? value : 0}
              </Button>
              <Button
                startIcon={<PlayDisabledSharpIcon fontSize="large" />}
                style={{ display: "block", width: "200px" }}
                variant={currentButtonVariantb[index]}
                onClick={() =>
                  handleButtonVariantChangeb(index, index >= 5 ? value : 0)
                }
              >
                No Autoplay +£{index >= 5 ? value : 0}
              </Button>
            </ButtonGroup>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default PriceList;
