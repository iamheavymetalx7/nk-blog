import React from "react";
import DashedComponent from "../../components/DashedComponent";
import Link from "next/link";
import TILContent from "./TILContent";

function TILPage() {
  return (
    <div>
      <h1 className="font-bold text-3xl">✏️ Today I Learned</h1>
      <div className="italic text-zinc-500 mb-4 mt-6 flex flex-row justify-between text-lg">
        <p>
          Subscribe to{" "}
          <Link href="https://hashnode.com/@nov1ce" className="text-blue-400">
            Hashnode Feed
          </Link>
        </p>
      </div>
      <DashedComponent /> <TILContent></TILContent>
    </div>
  );
}

export default TILPage;
