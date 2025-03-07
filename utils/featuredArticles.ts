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
  {
    href: "https://nov1ce.hashnode.dev/understanding-bullmq-a-simple-yet-powerful-message-queue",
    label: "Understanding BullMQ: A Simple Yet Powerful Message Queue",
    feature: true,
  },
  {
    href: "https://nov1ce.hashnode.dev/how-to-add-a-local-repository-to-a-github-repository",
    label: "How to Add a Local Repository to a GitHub Repository",
    feature: true,
  },
  {
    href: "https://nov1ce.hashnode.dev/python-versions-pyenv",
    label: "Simplify Python Version Control on Your System with Pyenv",
    feature: true,
  },
  {
    href: "https://nov1ce.hashnode.dev/incremental-static-regeneration-isr",
    label: "Incremental Static Regeneration (ISR)",
    feature: true,
  },
  {
    href: "https://nov1ce.hashnode.dev/vs-code-extensions",
    label:
      "Enhancing Your VS Code Experience: Essential Extensions for Productivity",
    feature: true,
  },
];
