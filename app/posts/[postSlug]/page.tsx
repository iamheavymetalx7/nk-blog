import { query } from "@/lib/hasnode";
import type { Post } from "@/utils/posts";
import Container from "@/components/Container";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import DashedComponent from "@/components/DashedComponent";
import beautifyHtml from "@/lib/convertHTML";

interface PostParams {
  params: { postSlug: string };
}
export default async function Post({ params }: PostParams) {
  try {
    const {
      data: { publication },
    } = await query({
      query: `
        query($host: String!, $slug: String!) {
          publication(host: $host) {
            post(slug: $slug) {
              author {
                name
                profilePicture
                socialMediaLinks {
                  twitter
                }
              }
              content {
                markdown
                html
              }
              coverImage {
                url
              }
              tags {
                name
              }
              id
              publishedAt
              title
              readTimeInMinutes
              url
            }
          }
        }
      `,
      variables: {
        host: "nov1ce.hashnode.dev",
        slug: params.postSlug,
      },
    });

    const post = publication?.post as Post;

    // Convert Markdown content to HTML if needed
    const htmlContent = await beautifyHtml(post.content.html);

    return (
      <Container className="mb-6">
        <article>
          <div className="flex flex-row gap-4 justify-between mb-6">
            <h1 className="text-4xl font-bold">{post.title}</h1>
          </div>

          <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between">
            <p>
              Published on{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <div className="px-2 flex flex-row gap-2 justify-center">
              <FaBookOpen className="h-5 w-5 pt-2" />{" "}
              <p>{post.readTimeInMinutes} min read</p>
            </div>
          </div>

          <DashedComponent />

          <div
            className="prose-lg prose-headings:text-blue-500 prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold prose-p:mt-2 prose-p:mb-2 prose-strong:text-blue-500 prose-code:bg-black-800 prose-code:rounded prose-code:font-medium prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:shadow-lg prose-ul:pl-6 prose-li:mb-2 prose-li:list-disc prose-callout:bg-blue-300 prose-callout:border-l-4 prose-callout:border-blue-500 prose-callout:p-2 prose-callout:rounded-lg"
            dangerouslySetInnerHTML={{
              __html: htmlContent || post.content.html,
            }}
          />

          <div className="mt-6 items-center">
            <ul className="flex flex-wrap gap-2 mt-2 items-center">
              {Array.isArray(post.tags) ? (
                post.tags.map((tag, index) => (
                  <li
                    key={index} // Using index as key if tag doesn't have an id
                    className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg"
                  >
                    {tag.name}
                  </li>
                ))
              ) : (
                <li
                  key={post.tags.name}
                  className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg"
                >
                  {post.tags.name}
                </li>
              )}
            </ul>
          </div>
        </article>

        <DashedComponent />

        <p className="text-lg">
          <em>
            Read the original blog{" "}
            <Link
              className="text-blue-900 hover:text-blue-400 underline"
              href={post.url}
            >
              here
            </Link>
            .
          </em>
        </p>
      </Container>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <p>Error loading post</p>;
  }
}
