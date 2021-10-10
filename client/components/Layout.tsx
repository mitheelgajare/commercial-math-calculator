import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface Props {}

export const Layout: NextPage<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
    </React.Fragment>
  );
};
