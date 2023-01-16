import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PlayDisabledSharpIcon from "@mui/icons-material/PlayDisabledSharp";
import PlayArrowSharpIcon from "@mui/icons-material/PlayArrowSharp";

const PriceList = (props) => {
  const [currentButtonVariant1, setCurrentButtonVariant1] =
    useState("outlined");
  const [currentButtonVariant1b, setCurrentButtonVariant1b] =
    useState("outlined");
  const [currentButtonVariant2, setCurrentButtonVariant2] =
    useState("outlined");
  const [currentButtonVariant2b, setCurrentButtonVariant2b] =
    useState("outlined");
  const [currentButtonVariant3, setCurrentButtonVariant3] =
    useState("outlined");
  const [currentButtonVariant3b, setCurrentButtonVariant3b] =
    useState("outlined");
  const [currentButtonVariant4, setCurrentButtonVariant4] =
    useState("outlined");
  const [currentButtonVariant4b, setCurrentButtonVariant4b] =
    useState("outlined");
  const [currentButtonVariant5, setCurrentButtonVariant5] =
    useState("outlined");
  const [currentButtonVariant5b, setCurrentButtonVariant5b] =
    useState("outlined");
  const [currentButtonVariant6, setCurrentButtonVariant6] =
    useState("outlined");
  const [currentButtonVariant6b, setCurrentButtonVariant6b] =
    useState("outlined");
  const [currentButtonVariant7, setCurrentButtonVariant7] =
    useState("outlined");
  const [currentButtonVariant7b, setCurrentButtonVariant7b] =
    useState("outlined");
  const [currentButtonVariant8, setCurrentButtonVariant8] =
    useState("outlined");
  const [currentButtonVariant8b, setCurrentButtonVariant8b] =
    useState("outlined");
  const [currentButtonVariant9, setCurrentButtonVariant9] =
    useState("outlined");
  const [currentButtonVariant9b, setCurrentButtonVariant9b] =
    useState("outlined");

  const handleButtonVariantChange1 = () => {
    setCurrentButtonVariant1("contained");
    setCurrentButtonVariant1b("outlined");
    localStorage.setItem("MPL1", "Autoplay +0.5£");
  };
  const handleButtonVariantChange1b = () => {
    setCurrentButtonVariant1b("contained");
    setCurrentButtonVariant1("outlined");
    localStorage.setItem("MPL1", "No Autoplay +0£");
  };
  const handleButtonVariantChange2 = () => {
    setCurrentButtonVariant2("contained");
    setCurrentButtonVariant2b("outlined");
    localStorage.setItem("MPL2", "Autoplay +0.375£");
  };
  const handleButtonVariantChange2b = () => {
    setCurrentButtonVariant2b("contained");
    setCurrentButtonVariant2("outlined");
    localStorage.setItem("MPL2", "No Autoplay +0£");
  };
  const handleButtonVariantChange3 = () => {
    setCurrentButtonVariant3("contained");
    setCurrentButtonVariant3b("outlined");
    localStorage.setItem("MPL3", "Autoplay +0.25£");
  };
  const handleButtonVariantChange3b = () => {
    setCurrentButtonVariant3b("contained");
    setCurrentButtonVariant3("outlined");
    localStorage.setItem("MPL3", "No Autoplay +0£");
  };
  const handleButtonVariantChange4 = () => {
    setCurrentButtonVariant4("contained");
    setCurrentButtonVariant4b("outlined");
    localStorage.setItem("MPL4", "Autoplay +0.125£");
  };
  const handleButtonVariantChange4b = () => {
    setCurrentButtonVariant4b("contained");
    setCurrentButtonVariant4("outlined");
    localStorage.setItem("MPL4", "No Autoplay +0£");
  };
  const handleButtonVariantChange5 = () => {
    setCurrentButtonVariant5("contained");
    setCurrentButtonVariant5b("outlined");
    localStorage.setItem("MPL5", "Autoplay +0£");
  };
  const handleButtonVariantChange5b = () => {
    setCurrentButtonVariant5b("contained");
    setCurrentButtonVariant5("outlined");
    localStorage.setItem("MPL5", "No Autoplay +0£");
  };
  const handleButtonVariantChange6 = () => {
    setCurrentButtonVariant6("contained");
    setCurrentButtonVariant6b("outlined");
    localStorage.setItem("MPL6", "Autoplay +0£");
  };
  const handleButtonVariantChange6b = () => {
    setCurrentButtonVariant6b("contained");
    setCurrentButtonVariant6("outlined");
    localStorage.setItem("MPL6", "No Autoplay +0.125£");
  };
  const handleButtonVariantChange7 = () => {
    setCurrentButtonVariant7("contained");
    setCurrentButtonVariant7b("outlined");
    localStorage.setItem("MPL7", "Autoplay +0£");
  };
  const handleButtonVariantChange7b = () => {
    setCurrentButtonVariant7b("contained");
    setCurrentButtonVariant7("outlined");
    localStorage.setItem("MPL7", "No Autoplay +0.25£");
  };
  const handleButtonVariantChange8 = () => {
    setCurrentButtonVariant8("contained");
    setCurrentButtonVariant8b("outlined");
    localStorage.setItem("MPL8", "Autoplay +0£");
  };
  const handleButtonVariantChange8b = () => {
    setCurrentButtonVariant8b("contained");
    setCurrentButtonVariant8("outlined");
    localStorage.setItem("MPL8", "No Autoplay +0.375£");
  };
  const handleButtonVariantChange9 = () => {
    setCurrentButtonVariant9("contained");
    setCurrentButtonVariant9b("outlined");
    localStorage.setItem("MPL9", "Autoplay +0£");
  };
  const handleButtonVariantChange9b = () => {
    setCurrentButtonVariant9b("contained");
    setCurrentButtonVariant9("outlined");
    localStorage.setItem("MPL9", "No Autoplay +0.5£");
  };

  if (
    (currentButtonVariant1 === "contained" ||
      currentButtonVariant1b === "contained") &&
    (currentButtonVariant2 === "contained" ||
      currentButtonVariant2b === "contained") &&
    (currentButtonVariant3 === "contained" ||
      currentButtonVariant3b === "contained") &&
    (currentButtonVariant4 === "contained" ||
      currentButtonVariant4b === "contained") &&
    (currentButtonVariant5 === "contained" ||
      currentButtonVariant5b === "contained") &&
    (currentButtonVariant6 === "contained" ||
      currentButtonVariant6b === "contained") &&
    (currentButtonVariant7 === "contained" ||
      currentButtonVariant7b === "contained") &&
    (currentButtonVariant8 === "contained" ||
      currentButtonVariant8b === "contained") &&
    (currentButtonVariant9 === "contained" ||
      currentButtonVariant9b === "contained")
  ) {
    localStorage.setItem("MPLdisable", false);
  }
  return (
    <div>
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
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant1}
              onClick={handleButtonVariantChange1}
            >
              Autoplay +£1
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant1b}
              onClick={handleButtonVariantChange1b}
            >
              No Autoplay +£0
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant2}
              onClick={handleButtonVariantChange2}
            >
              Autoplay +£0.75
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant2b}
              onClick={handleButtonVariantChange2b}
            >
              No Autoplay +£0
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant3}
              onClick={handleButtonVariantChange3}
            >
              Autoplay +£0.5
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant3b}
              onClick={handleButtonVariantChange3b}
            >
              No Autoplay +£0
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant4}
              onClick={handleButtonVariantChange4}
            >
              Autoplay +£0.25
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant4b}
              onClick={handleButtonVariantChange4b}
            >
              No Autoplay +£0
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant5}
              onClick={handleButtonVariantChange5}
            >
              Autoplay +£0
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant5b}
              onClick={handleButtonVariantChange5b}
            >
              No Autoplay +£0
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant6}
              onClick={handleButtonVariantChange6}
            >
              Autoplay +£0
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant6b}
              onClick={handleButtonVariantChange6b}
            >
              No Autoplay +£0.25
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant7}
              onClick={handleButtonVariantChange7}
            >
              Autoplay +£0£
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant7b}
              onClick={handleButtonVariantChange7b}
            >
              No Autoplay +£0.5
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant8}
              onClick={handleButtonVariantChange8}
            >
              Autoplay +£0
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant8b}
              onClick={handleButtonVariantChange8b}
            >
              No Autoplay +£0.75
            </Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              startIcon={<PlayArrowSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant9}
              onClick={handleButtonVariantChange9}
            >
              Autoplay +£0
            </Button>
            <Button
              startIcon={<PlayDisabledSharpIcon fontSize="large" />}
              style={{ display: "block", minWidth: 175 }}
              variant={currentButtonVariant9b}
              onClick={handleButtonVariantChange9b}
            >
              No Autoplay +£1
            </Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </div>
  );
};

export default PriceList;
