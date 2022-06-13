import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { MainNavigation, SubNavigation } from "./Navigation";

export function MainLayout() {
  return (
    <>
      <MainNavigation />
      <Box maxWidth={1200} margin="auto">
        <Outlet />
      </Box>
    </>
  );
}
export function SubLayout({ title }: { title: string }) {
  return (
    <>
      <SubNavigation title={title} />
      <Outlet />
    </>
  );
}

export function InnerBox(props) {
  return <Box px={2} {...props} />;
}
