import Link from "next/link";
import React from "react";

function NowContent() {
  return (
    <>
      <p className="text-lg">
        I am currently contributing to the GenAI team at{" "}
        <Link
          href="https://chargebee.com/"
          className="hover:text-blue-400 underline"
        >
          Chargebee
        </Link>
        , where I work with a technology stack that includes JavaScript, React,
        Next.js, and Python.
      </p>

      <h2 className="mt-4 font-semibold text-xl text-blue-400">Future Plans</h2>
      <p className="mt-2 text-lg">
        At present, I’m leveraging the Hashnode API to list my blog posts—though
        I have just one so far, it’s a start! My objective is to implement a
        webhook that triggers whenever a new post is created or updated. This
        webhook will gather relevant data and store it in a database. The
        content will be categorized into areas such as programming insights,
        general life advice, or personal anecdotes. The data will then be
        dynamically pulled from the database to populate both the blog posts and
        the Featured Posts section on the homepage.
      </p>

      <h2 className="mt-4 font-semibold text-xl text-blue-400">
        What is "TIL" About?
      </h2>
      <p className="mt-2 text-lg">
        "Today I Learned" (TIL) serves as a personal journal where I document
        the knowledge I acquire. Inspired by Ashik, who advocates the “learn in
        public” philosophy, this practice is primarily for self-improvement.
        It’s a way to reflect on the journey so far, recognizing that there’s
        always more to learn and grow.
      </p>

      <p className="mt-2 text-lg">
        This outlines my vision for evolving this platform, whether you consider
        it a blog, portfolio, or something else.
      </p>
    </>
  );
}

export default NowContent;
