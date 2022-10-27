import React from "react";
import "./SwipeButtons.css";
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import GradeIcon from "@mui/icons-material/Grade";
import FlashOnIcon from "@mui/icons-material/FlashOn";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton onClick={(swiped) => {}} className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={(swiped) => {}} className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={(swiped) => {}} className="swipeButtons__star">
        <StarRateIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={(swiped) => {}} className="swipeButtons__right">
        <GradeIcon fontSize="large" />
      </IconButton>
      <IconButton onClick={(swiped) => {}} className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
