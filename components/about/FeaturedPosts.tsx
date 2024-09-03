import { featuredArticles } from "@/utils/featuredArticles";
import React from "react";
import Link from "next/link"; // Import the Link component

function FeaturedPosts() {
  return (
    <div className=" mt-5">
      <h2 className="text-2xl font-semibold">💡 Featured Posts</h2>
      <p className=" mt-2 text-lg">
        A collection of articles that I have started writing recently.
      </p>
      <div className="text-lg">
        {featuredArticles.map((article) => {
          if (article.feature) {
            return (
              <ul>
                <li className="mb-1 list-disc mx-10" key={article.label}>
                  <Link
                    href={article.href}
                    key={article.href}
                    className="px-2 mt-2 text-blue-400 hover:underline"
                  >
                    {article.label}
                  </Link>
                </li>
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default FeaturedPosts;
