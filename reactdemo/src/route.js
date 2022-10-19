import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import List from "./pages/pokemon/list";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<List />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
