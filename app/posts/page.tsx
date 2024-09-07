import { Suspense } from "react";
import { query } from "@/lib/hasnode";
import Link from "next/link";
import { Post } from "@/utils/posts";
import LoadingCards from "./loading";
import DashedComponent from "../../components/DashedComponent";

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
                id
                publishedAt
                url
                slug
                title
                tags {
                  name
                }
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
  console.log(publication);
  // Filter posts to include only those with "TIL" tag
  const posts: Array<Post> = publication.posts.edges
    .map(({ node }: { node: Post }) => node)
    .filter((post) => post.tags.some((tag) => tag.name === "TIL"));
  console.log(posts);
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
            {posts.length === 0 ? (
              <li>No posts with the "TIL" tag found.</li>
            ) : (
              posts.map((post) => (
                <li key={post.id}>
                  <div className="flex flex-row gap-6">
                    <p>
                      {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </p>
                    <Link
                      href={`/posts/${post.slug}`}
                      className="text-blue-400 hover:underline"
                    >
                      {post.title}
                    </Link>
                    <div className="flex flex-row gap-4">
                      {/* Additional links or actions can be added here */}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </Suspense>
    </>
  );
}
