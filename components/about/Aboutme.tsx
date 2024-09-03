import React from "react";
import MyImage from "./MyImage";
import HomeContent from "./HomeContent";
import FeaturedPosts from "./FeaturedPosts";
function AboutMe() {
  return (
    <>
      <h1 className="text-3xl font-bold">👋🏻 Hello</h1>
      <div className="items-start">
        <HomeContent />
        <FeaturedPosts />
      </div>
    </>
  );
}

export default AboutMe;
