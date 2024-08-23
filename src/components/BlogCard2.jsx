import { Link } from "react-router-dom"; // Adjust according to your routing library
import { Aperture } from "lucide-react"; // Example icon library

const PostList = ({
  post = {
    mainImage: {
      src: "https://via.placeholder.com/400",
      alt: "Placeholder",
      blurDataURL: null,
    },
    author: {
      image: "https://via.placeholder.com/20",
      name: "John Doe",
      slug: { current: "john-doe" },
    },
    categories: ["Category1", "Category2"],
    slug: { current: "sample-post" },
    title: "Sample Post Title",
    excerpt: "This is a brief excerpt of the post.",
    publishedAt: new Date().toISOString(),
  },
  aspect = "square",
  minimal = false,
  pathPrefix = "",
  preloadImage = false,
  fontSize = "large",
  fontWeight = "normal",
}) => {
  return (
    <div
      className={`group cursor-pointer ${
        minimal ? "grid gap-10 md:grid-cols-2" : ""
      }`}>
      <div className="overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
        <Link
          className={`relative block ${
            aspect === "landscape"
              ? "aspect-video"
              : aspect === "custom"
              ? "aspect-[5/4]"
              : "aspect-square"
          }`}
          to={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
            post.slug.current
          }`}>
          <img
            src={post.mainImage.src}
            alt={post.mainImage.alt}
            className="object-cover transition-all w-full h-full"
            style={{
              filter: post.mainImage.blurDataURL ? "blur(10px)" : "none",
            }}
          />
          {!post.mainImage.src && (
            <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
               
              <Aperture className="w-full h-full" />
            </span>
          )}
        </Link>
      </div>

      <div className="flex items-center">
        <div>
          <div
            className={`text-sm text-gray-500 dark:text-gray-400 ${
              minimal ? "mb-1" : "mb-2"
            }`}>
            {post.categories.join(", ")}
          </div>
          <h2
            className={`mt-2 ${
              fontSize === "large"
                ? "text-2xl"
                : minimal
                ? "text-3xl"
                : "text-lg"
            } ${
              fontWeight === "normal" ? "font-medium" : "font-semibold"
            } dark:text-white`}>
            <Link
              to={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                post.slug.current
              }`}>
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {post.title}
              </span>
            </Link>
          </h2>
          <div className="hidden">
            {post.excerpt && (
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <Link
                  to={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                    post.slug.current
                  }`}>
                  {post.excerpt}
                </Link>
              </p>
            )}
          </div>
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <Link to={`/author/${post.author.slug.current}`}>
              <div className="flex items-center gap-3">
                <div className="relative h-5 w-5 flex-shrink-0">
                  {post.author.image && (
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="rounded-full object-cover"
                      style={{ width: "20px", height: "20px" }}
                    />
                  )}
                </div>
                <span className="truncate text-sm">{post.author.name}</span>
              </div>
            </Link>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span>
            <time className="truncate text-sm" dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostList;
