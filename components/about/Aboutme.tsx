import React from "react";
import MyImage from "./MyImage";
import HomeContent from "./HomeContent";
import FeaturedPosts from "./FeaturedPosts";
import Background from "./Background";
function AboutMe() {
  return (
    <>
      <h1 className="text-3xl font-bold">👋🏻 Hello</h1>
      <div className="items-start">
        <HomeContent />
        <Background></Background>
        <FeaturedPosts />
      </div>
    </>
  );
}

export default AboutMe;
