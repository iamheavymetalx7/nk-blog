type NavLink = {
  href: string;
  label: string;
  feature: boolean;
};

// we will use API-call here to put it here

export const featuredArticles: NavLink[] = [
  {
    href: "https://nov1ce.hashnode.dev/using-the-referer-header-in-nextjs-track-and-understand-api-calls",
    label: "Using the referer header in next.JS",
    feature: true,
  },
  // { href: "https://gmail.com ", label: "Github", feature: true },
  // {
  //   href: "https://www.netflix.com/in/ ",
  //   label: "Learning Next.JS - My Documentation Journey",
  //   feature: true,
  // },
];
