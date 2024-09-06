import React from "react";
import DashedComponent from "../../components/DashedComponent";
import { socialLinks } from "@/utils/socials";
import Link from "next/link";

function ContactPage() {
  return (
    <div className="text-gray-600">
      <h1 className="font-bold text-3xl">📮 Contact Me</h1>
      <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
        <p>
          Subscribe to{" "}
          <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
            Hashnode Feed
          </Link>
        </p>
      </div>
      <DashedComponent />{" "}
      <p className="py-4 text-lg">
        Email: <em>nitishkumar at alumni.iitm.ac.in</em>
      </p>
      <p className="text-lg">My other identities:</p>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index} className="mb-1 list-disc mx-10 text-lg">
            {link.site}:{" "}
            <Link href={link.href} className="text-blue-400 hover:underline">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactPage;
