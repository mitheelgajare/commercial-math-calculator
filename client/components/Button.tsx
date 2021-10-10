import React, { useState, useEffect } from "react";
import { NextPage } from "next";

interface Props {
  onClick?: (a?: any) => void;
}

export const Button: NextPage<Props> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};
