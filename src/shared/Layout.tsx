import React from "react";
import { Outlet } from "react-router-dom";
import TopAppBar from "../TopAppBar";

const Layout = () => (
    <>
        <TopAppBar />
        <Outlet />
    </>
);
export default Layout;
