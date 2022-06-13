import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

import BackIcon from "@mui/icons-material/ArrowLeft";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface SubNavigationProps {
  title: string;
}

export function MainNavigation() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Our Ships
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export function SubNavigation({ title }: SubNavigationProps) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(-1);
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" onClick={handleClick}>
          <BackIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
