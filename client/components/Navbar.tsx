import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

export const Navbar: NextPage<Props> = () => {
  return (
    <div className="navbar">
      <Link href="/">CMC</Link>
      <Link href="/about">About</Link>
    </div>
  );
};
