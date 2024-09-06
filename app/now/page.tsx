import React from "react";
import NowContent from "./NowContent";
import DashedComponent from "../../components/DashedComponent";
import Link from "next/link";

function NowPage() {
  return (
    <>
      <h1 className="text-3xl font-bold ">💻 Now</h1>
      <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
        <p>
          Subscribe to{" "}
          <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
            Hashnode Feed
          </Link>
        </p>
      </div>
      <DashedComponent /> <NowContent />
    </>
  );
}

export default NowPage;
