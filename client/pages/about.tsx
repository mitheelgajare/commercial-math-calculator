import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <div className="about-page">
      <Head>
        <title>CMC - About</title>
      </Head>
      <h1 className="title">About Us</h1>
      <div className="wrapper">
        <h2>Commercial Math Calculator ( CMC )</h2>
        <p>
          You will be able to perform every calculation, be it simple or complex
          on this web app. <br />
          Every calculation means all commercial calculations such as profit,
          loss, p%, l%, discount, mp etc.
        </p>{" "}
        <br />
        <p>
          This is an open source app written in NextJS and Sass. <br />
          License: MIT <br />
          Click{" "}
          <a href="https://github.com/mitheelgajare/commercial-math-calculator">
            here
          </a>{" "}
          for Github repository:
        </p>
      </div>
    </div>
  );
};

export default About;
