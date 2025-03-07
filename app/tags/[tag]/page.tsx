import { useRouter } from "next/navigation";
import Link from "next/link";

import { featuredArticles } from "@/utils/featuredArticles";
interface PostParams {
  params: { tag: string };
}
export default async function Post({ params }: PostParams) {
  const tag = params.tag; // Dynamic tag from URL

  // Filter articles by the clicked tag
  const filteredPosts = featuredArticles.filter((article) =>
    article.tags?.includes(tag as string)
  );

  return (
    <>
      <h1 className="text-3xl font-bold">📋 Posts tagged with #{tag}</h1>
      <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
        <p>
          Subscribe to{" "}
          <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
            Hashnode Feed
          </Link>
        </p>
      </div>
      <hr className="border-gray-300 my-4" />
      <div className="text-lg">
        <ul>
          {filteredPosts.length === 0 ? (
            <li>No posts found for this tag.</li>
          ) : (
            filteredPosts.map((post, index) => (
              <li key={index} className="mb-4">
                <div className="flex flex-row gap-6">
                  <Link
                    href={post.href}
                    className="text-blue-400 hover:underline"
                  >
                    {post.label}
                  </Link>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}
