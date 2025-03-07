import Link from "next/link";
import React from "react";

function HomeContent() {
  return (
    <div className="flex-grow mt-5 text-lg">
      <p>
        I’m Nitish Kumar, though you might know me as <code>@nov1ce</code> in
        some corners of the internet. I’m currently working as a Machine
        Learning Engineer at{" "}
        <Link
          href="https://paypal.com/"
          className="hover:text-blue-400 underline"
        >
          PayPal
        </Link>
        . Previously, I was part of the Generative-AI team at{" "}
        <Link
          href="https://chargebee.com/"
          className="hover:text-blue-400 underline"
        >
          Chargebee
        </Link>
        , where I worked on cutting-edge projects leveraging generative AI
        technologies. .
      </p>

      <p className="mt-2 text-lg">
        Outside of work, you’ll likely find me on the football field, diving
        into a manga, watching anime, on a road trip, or catching up on sleep.
      </p>

      <p className="mt-2 text-lg">
        Here’s a bit about my background: I completed a BS-MS Dual Degree in
        Mathematics from{" "}
        <Link
          href="https://www.iiserb.ac.in/"
          className="hover:text-blue-400 underline"
        >
          IISER Bhopal
        </Link>
        . I briefly worked at Deloitte as a Consultant for a month before
        choosing to advance my studies with an M.Tech in Mathematics and
        Computing at{" "}
        <Link
          href="https://www.iitm.ac.in/"
          className="hover:text-blue-400 underline"
        >
          IIT Madras
        </Link>
        .
      </p>
    </div>
  );
}

export default HomeContent;
