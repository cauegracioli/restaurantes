"use client";

import Link from "next/link";
import React from "react";

export default function MenuList({
  list,
}: Readonly<{
  list: Array<{ text: string; link: string; icon?: React.ReactNode }>;
}>) {
  return (
    <ul role='list' className='p-4 '>
      {list.map(({ icon, link, text }) => (
        <li key={text}>
          <Link
            href={link}
            className='p-2 py-4 pr-6 my-4 first:pt-0 first:mt-0 last:mb-0 flex items-center gap-4 w-11/12 transition-all'
          >
            {icon}
            <span className='font-medium select-none'>{text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
