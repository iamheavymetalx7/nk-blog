export interface Post {
  author: {
    name: string;
    profilePicture: string;
    socialMediaLinks: {
      twitter: string;
    };
  };
  content: {
    markdown: string;
    html: string;
  };
  coverImage: {
    url: string;
  };
  tags: {
    name: string;
  };
  id: string;
  publishedAt: string;
  slug: string;
  title: string;
  readTimeInMinutes: string;
  url: string;
}
