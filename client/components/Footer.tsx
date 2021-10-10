import React, { useState, useEffect } from "react";
import { NextPage } from "next";

interface Props {}

export const Footer: NextPage<Props> = () => {
  return <div className="footer">Copyright {new Date().getFullYear()}</div>;
};
