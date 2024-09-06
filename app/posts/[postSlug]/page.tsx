import Image from "next/image";

import { query } from "@/lib/hasnode";
import type { Post } from "@/utils/posts";
import Container from "@/components/Container";
import { FaBookOpen } from "react-icons/fa";
import Link from "next/link";
import DashedComponent from "@/components/DashedComponent";
interface PostParams {
  params: { postSlug: string };
}

export default async function Post({ params }: PostParams) {
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
              html
            }
            coverImage {
              url
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
      host: "nov1ce.hashnode.dev/",
      slug: params.postSlug,
    },
  });

  const post = publication?.post as Post;
  post.content.html = `<div class="prose prose-lg max-w-none">
  <p class="text-lg">
    In the world of web development, understanding where API calls originate from can be crucial for a variety of reasons, from analytics to security. Have you ever wondered how to document the origin of an API call within your Next.js project? If you're working with multiple pages or links that trigger the same API endpoint, Next.js provides a straightforward way to capture this information using the built-in <code class="bg-gray-100  text-blue-700 rounded px-1">headers</code> utility.
  </p>

  <h3 id="heading-understanding-the-headers-utility-in-nextjs" class="mt-4 mb-2 text-2xl font-bold">
    Understanding the <code class="bg-gray-100 text-blue-700 rounded px-1">Headers</code> Utility in Next.js
  </h3>
  <p class="text-lg">
    Next.js offers a <code class="bg-gray-100 text-blue-700 rounded px-1">headers</code> function that allows developers to read incoming HTTP request headers within a Server Component. This function is particularly useful because it provides access to the <code class="bg-gray-100  text-blue-700 rounded px-1">Referer</code> header, which indicates the origin of the request.
  </p>

  <pre class="bg-gray-700 text-lg rounded-lg overflow-x-auto text-white mt-2 mb-2">
    <code class="lang-javascript">
      <span class="hljs-keyword">export</span> <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">POST</span>(<span class="hljs-params">req: NextRequest</span>) </span>{
        <span class="hljs-keyword">const</span> headersList = headers();
        <span class="hljs-keyword">const</span> referer = headersList.get(<span class="hljs-string">'referer'</span>);
      }

      <span class="hljs-comment">//If the request came from another page within the same site:</span>
      <span class="hljs-comment">//http://example.com/some-page</span>

      <span class="hljs-comment">//If the request came from an external site:</span>
      <span class="hljs-comment">//https://external-site.com/page</span>
    </code>
  </pre>

  <p class="text-lg">
    In this code snippet, the <code class="bg-gray-100  text-blue-700 rounded px-1">headers</code> function fetches all the incoming request headers, and by accessing the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header, you can determine the URL of the page that initiated the API request.
  </p>

  <h3 id="heading-practical-applications-of-the-referer-header" class="mt-4 mb-2 text-2xl font-bold">
    Practical Applications of the <code class="bg-gray-100  text-blue-700 rounded px-1">Referer</code> Header
  </h3>

  <ul class="list-disc ml-6 space-y-2">
    <li><strong>Tracking Referrals</strong>: You can use the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header to track where requests are coming from, which can help with analytics or understanding user behavior.</li>
    <li><strong>Security</strong>: Checking the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header can be useful for validating that requests are coming from expected sources, which can help in implementing security measures.</li>
    <li><strong>Custom Logic Based on Referrer</strong>: Depending on the value of the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header, you can apply different logic or handle requests differently based on the origin of the request.</li>
    <li><strong>Debugging</strong>: Knowing the referrer can help you debug issues by providing context about where requests are originating from.</li>
  </ul>

  <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
    <div class="flex">
      <div class="flex-shrink-0">
        💡
      </div>
      <div class="ml-3 text-blue-700">
        Keep in mind that the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header can be modified or suppressed for privacy reasons or security policies, so it might not always be available.
      </div>
    </div>
  </div>

  <h3 id="heading-conclusion" class="mt-4 mb-2 text-2xl font-bold">
    Conclusion
  </h3>
  <p class="text-lg">
    Incorporating the <code class="bg-gray-100  text-blue-700 rounded px-1">referer</code> header into your Next.js project can greatly enhance your ability to track, secure, and debug your application’s API calls. Whether you're aiming to better understand user behavior, tighten security, or streamline debugging processes, this built-in feature is a valuable asset. Just keep in mind the potential limitations and use it as part of a broader strategy.
  </p>
</div>
`;

  return (
    <>
      <Container className="gap-12 mb-6">
        <article className="w-full xl:order-1 mx-auto">
          <div className="flex flex-row gap-4 justify-between mb-6 ">
            <h1 className="text-3xl font-bold">{post.title}</h1>
            {/* <aside>
              <Image
                width="250"
                height="250"
                className="w-full rounded h-auto object-cover"
                src={post.coverImage.url}
                alt=""
              />
            </aside> */}
          </div>

          {/* <div className="max-w-3xl flex items-center gap-4 mb-2">
            <Image
              width="48"
              height="48"
              className="w-12 h-auto rounded-full"
              src={post.author.profilePicture}
              alt=""
            />
            <div>
              <p className="text-lg font-bold mb-[.1rem]">{post.author.name}</p>
            </div>
          </div> */}
          <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between">
            <p>
              Published on
              {` `}
              {new Date(post.publishedAt).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            <div className="px-2 flex flex-row gap-2 justify-center">
              <FaBookOpen className="h-5 w-5 pt-1"></FaBookOpen>{" "}
              <p>{post.readTimeInMinutes} min read</p>
            </div>
          </div>
          <DashedComponent></DashedComponent>

          <div
            className="prose prose-img:rounded"
            dangerouslySetInnerHTML={{
              __html: post.content.html,
            }}
          />
        </article>
        <DashedComponent></DashedComponent>
        <p className="text-lg">
          <em>
            Read the original blog{" "}
            <Link className=" hover:text-blue-400 underline" href={post.url}>
              here
            </Link>
            .
          </em>
        </p>
      </Container>
    </>
  );
}
