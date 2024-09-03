import Image from "next/image";
import React from "react";

function MyImage() {
  return (
    <div className="flex-shrink-0 ml-5">
      <Image
        src="/4a3b849cab6054c24623a5317e333b2a.jpg"
        alt="Profile Image"
        className="rounded-full object-cover"
        width={100}
        height={100}
      />
    </div>
  );
}

export default MyImage;
