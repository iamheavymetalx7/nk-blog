type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/posts ", label: "Posts" },
  { href: "/now ", label: "Now" },
  { href: "/TIL ", label: "TIL" },
  { href: "/contact", label: "Contact" },
];
