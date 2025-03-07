import Link from "next/link";
import React from "react";

function Background() {
  return (
    <div className="flex flex-col mt-5 text-lg">
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

export default Background;
