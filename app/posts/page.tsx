// import React from "react";
// import DashedComponent from "../DashedComponent";

// function PostsPage() {
//   return (
//     <div>
//       <h1 className="font-bold text-3xl">📋 Posts</h1>
//       <DashedComponent />
//     </div>
//   );
// }

// export default PostsPage;

// pages/index.js

import { Suspense } from "react";
import { query } from "@/lib/hasnode";
import Link from "next/link";
import { Post } from "@/utils/posts";
import LoadingCards from "./loading";
import DashedComponent from "../DashedComponent";

export default async function PageComponent() {
  const {
    data: { publication },
  } = await query({
    query: `
      query($host: String!) {
        publication(host: $host) {
          posts(first: 20) {
            edges {
              node {
                coverImage {
                  url
                }
                id
                publishedAt
                url
                slug
                title
              }
            }
          }
        }
      }
    `,
    variables: {
      host: "nov1ce.hashnode.dev",
    },
  });

  const posts: Array<Post> = publication.posts.edges.map(
    ({ node }: { node: Post }) => node
  );

  return (
    <>
      <h1 className="text-3xl font-bold">📋 Posts</h1>
      <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
        <p>
          Subscribe to{" "}
          <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
            Hashnode Feed
          </Link>
        </p>
      </div>
      <DashedComponent />
      <Suspense fallback={<LoadingCards />}>
        <div className="text-lg">
          <ul>
            {posts.map((post) => {
              return (
                <li key={post.id}>
                  <div className="flex flex-row gap-6">
                    <p>
                      {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                    <Link
                      // href={post.url}
                      href={`/posts/${post.slug}`}
                      className="text-blue-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <div className="flex flex-row gap-4">
                      {/* <Link
                    href={`/posts/${post.slug}`}
                    className="text-blue-400 hover:underline"
                  >
                    Dynamic Route
                  </Link>
                  <Link
                    href={post.url}
                    className="text-blue-400 hover:underline"
                  >
                    Hashnode
                  </Link> */}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Suspense>
    </>
  );
}
