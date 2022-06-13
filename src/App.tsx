import React from "react";
import { Route, Routes } from "react-router-dom";
import ShipListView from "@views/ShipList";
import { MainLayout } from "@components/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ShipListView />} />
      </Route>
    </Routes>
  );
}
