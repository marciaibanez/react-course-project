import React from "react";

import Hero from "../components/Hero";
import HeroBackgroundOne from "./assets/hero.png";
import HeroBackgroundTwo from "./assets/hero-2.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero title="Lorem Ipsum" image={HeroBackgroundOne}>
    <p>Lorem ipsum dolor simet.</p>
  </Hero>
);

export const withList = () => (
  <Hero title="Lorem Ipsum" image={HeroBackgroundTwo}>
    <ul>
      <li>Lorem 1</li>
      <li>Lorem 2</li>
      <li>Lorem 3</li>
    </ul>
  </Hero>
);
