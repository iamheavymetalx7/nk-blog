import { Suspense } from "react";
import { query } from "@/lib/hasnode";
import Link from "next/link";
import { Post } from "@/utils/posts";
import LoadingCards from "./loading";
import DashedComponent from "../../components/DashedComponent";

async function fetchPosts() {
  try {
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

    // Filter posts to exclude those with the "TIL" tag
    return publication.posts.edges
      .map(({ node }: { node: Post }) => node)
      .filter(
        (post: any) =>
          !Array.isArray(post.tags) ||
          !post.tags.some((tag: any) => tag.name === "TIL")
      );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function PageComponent() {
  const posts = await fetchPosts();

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
              <li>No posts found.</li>
            ) : (
              posts.map((post: any) => (
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

// posts are fetched from data.json object

// import { Suspense } from "react";
// import { readJSONFile } from "@/lib/handleData";
// import Link from "next/link";
// import LoadingCards from "./loading";
// import DashedComponent from "../../components/DashedComponent";

// async function fetchPosts() {
//   try {
//     const data = await readJSONFile();

//     // Extract posts from the data
//     const posts = Object.values(data);

//     // Filter posts to exclude those with the "TIL" tag
//     return posts.filter(
//       (post: any) =>
//         !Array.isArray(post.tags) ||
//         !post.tags.some((tag: any) => tag.name === "TIL")
//     );
//   } catch (error) {
//     console.error("Error fetching posts:", error);
//     return [];
//   }
// }

// export default async function PageComponent() {
//   const posts = await fetchPosts();

//   return (
//     <>
//       <h1 className="text-3xl font-bold">📋 Posts</h1>
//       <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
//         <p>
//           Subscribe to{" "}
//           <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
//             Hashnode Feed
//           </Link>
//         </p>
//       </div>
//       <DashedComponent />
//       <Suspense fallback={<LoadingCards />}>
//         <div className="text-lg">
//           <ul>
//             {posts.length === 0 ? (
//               <li>No posts found.</li>
//             ) : (
//               posts.map((post: any) => (
//                 <li key={post.id}>
//                   <div className="flex flex-row gap-6">
//                     <p>
//                       {new Date(post.publishedAt).toLocaleDateString("en-us", {
//                         year: "numeric",
//                         month: "short",
//                         day: "2-digit",
//                       })}
//                     </p>
//                     <Link
//                       href={`/posts/${post.slug}`}
//                       className="text-blue-400 hover:underline"
//                     >
//                       {post.title}
//                     </Link>
//                   </div>
//                 </li>
//               ))
//             )}
//           </ul>
//         </div>
//       </Suspense>
//     </>
//   );
// }
