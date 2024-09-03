"use client";
import { links } from "@/utils/links";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export const maxDuration = 60; // This function can run for a maximum of 5 seconds

function NavTopics() {
  return (
    <div className="flex flex-row gap-3 mt-3 text-blue-400">
      {links.map((link) => {
        return (
          <Link href={link.href} className="capitalize w-full">
            {link.label}
          </Link>
        );
      })}
    </div>
  );
}
export default NavTopics;

/*


The NavSearch component is a search input field that
 updates the URL based on user input. 
 It leverages client-side hooks and debouncing 
 to ensure that search query updates are managed 
 efficiently and reflect in the URL, providing a better user 
 experience and enabling URL sharing/bookmarking of search results.


replace from useRouter updates the URL without causing a full page reload.


searchParams: This provides access to the current URL parameters, allowing the component to read the initial search query and to update the URL based on new searches.

setSearch: Updates the local state of the search query, ensuring the input field displays the correct value.

handleSearch: Debounced function that updates the URL with the current search query, improving performance and preventing excessive updates.






*/
