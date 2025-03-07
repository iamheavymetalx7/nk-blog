import { featuredArticles } from "@/utils/featuredArticles";

const TagsPage = () => {
  const uniqueTags = Array.from(
    new Set(featuredArticles.flatMap((article) => article.tags || []))
  );

  return (
    <div className="mt-6 items-center p-4 rounded-lg shadow">
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
  );
};

export default TagsPage;
