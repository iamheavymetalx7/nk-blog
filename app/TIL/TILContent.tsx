import React from "react";

function TILContent() {
  return (
    <div className="text-lg">
      <p>
        I have plans to expand the content here, though it may take some time
        for everything to take shape. I’ll begin by documenting my experience of
        learning JavaScript, transitioning to React, and eventually moving on to
        Next.js. During this journey, I built a Next.js Airbnb clone with the
        help of a Udemy course. I encountered several challenges, particularly
        with connection timeouts due to misaligned server locations—my Vercel
        deployment was on a North American server, while my Supabase PostgreSQL
        server was in East Asia. This real-world issue, which cost me nearly two
        days of troubleshooting, will be something I write about as well.
      </p>

      <p className="mt-2">
        Additionally, I've gained knowledge about webhooks, API calls, and
        message queues. While this may not seem extensive to someone with a CS
        background, my journey is a bit different. With a major in Mathematics
        (BS-MS Dual Degree), I made the decision to switch to the tech domain,
        focusing on data science and machine learning. I improved my coding
        skills by practicing on platforms like Leetcode and Codeforces, and I
        intend to share my thoughts on how I realized that my passion lies not
        in abstract mathematics but in practical problem-solving.
      </p>

      <p className="mt-2">
        I’ll likely rename this page to something more encompassing, where I can
        document both my past "Today I Learned" experiences and future
        learnings. Though I’m just starting out in the software domain, I’m
        eager to learn and grow.
      </p>

      <p className="mt-2">
        At present, the Posts and TIL content may overlap, but I plan to
        organize them better as I continue developing this platform. Starting
        somewhere is better than not starting at all, which is why I decided to
        launch this site—whether it serves as a blog, a portfolio, or something
        else, I’m still figuring that out.
      </p>

      <p className="mt-2">
        Over time, I intend to refine and define this portfolio, continuing to
        build on it as and when I have the opportunity.
      </p>
    </div>
  );
}

export default TILContent;
