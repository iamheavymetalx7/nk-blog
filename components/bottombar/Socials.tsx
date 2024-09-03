import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa6";

function Socials() {
  return (
    <div className="flex flex-row justify-center gap-5 mt-4">
      <Link href="https://www.linkedin.com/in/nitish-kumar-563931132/">
        <FaLinkedin className="h-6 w-6" />
      </Link>
      <Link href="https://x.com/">
        <RiTwitterXLine className="h-6 w-6" />
      </Link>
      <Link href="https://github.com/iamheavymetalx7">
        <FaGithub className="h-6 w-6" />
      </Link>
    </div>
  );
}

export default Socials;
