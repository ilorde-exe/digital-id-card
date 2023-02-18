import React, { Component } from "react";
import Header from "./Header";
import About from "./About";
import Footer from "./Footer";

export default function Card() {
  return (
    <>
      <div className="card-body">
        <Header />
        <div className="card-text">
          <About />
        </div>
        <Footer />
      </div>
    </>
  );
}
