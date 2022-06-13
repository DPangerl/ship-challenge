import { Box, CircularProgress } from "@mui/material";
import React from "react";

export function Loader() {
  return (
    <Box height="100vh" width="100%" display="flex" alignItems="center" justifyContent="center">
      <CircularProgress size={64} />
    </Box>
  );
}
