import { featuredArticles } from "@/utils/featuredArticles";

const TagsPage = () => {
  const uniqueTags = Array.from(
    new Set(featuredArticles.flatMap((article) => article.tags || []))
  );

  return (
    <div>
      <h1 className="text-3xl font-bold">🏷️ Tags</h1>

      <div className="mt-6 items-center rounded-lg shadow">
        <ul className="flex flex-wrap gap-2">
          {uniqueTags.map((tag, index) => (
            <li
              key={index}
              className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg"
            >
              <a href={`/tags/${tag}`} className="hover:underline">
                #{tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagsPage;
