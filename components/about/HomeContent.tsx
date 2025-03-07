import Link from "next/link";
import React from "react";

function HomeContent() {
  return (
    <div className="flex flex-row mt-5 text-lg">
      {/* Text Section: 2/3rd */}
      <div className="flex-grow w-2/3">
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
          technologies.
        </p>
      </div>

      {/* Image Section: 1/3rd */}
      <div className="w-1/3 flex items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/52539396?v=4"
          alt="Nitish Kumar"
          className="rounded-full w-32 h-32 object-cover"
        />
      </div>
    </div>
  );
}

export default HomeContent;
