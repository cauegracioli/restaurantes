"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { League_Spartan } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import SideBarMenu from "./sideBarMenu";
import Link from "next/link";
import Image from "next/image";

const ls = League_Spartan({ subsets: ["latin"], variable: "--font-sans" });

export const Header = () => {
  const { setTheme, theme } = useTheme();

  const themeSelector: any = {
    light: "dark",
    dark: "light",
  };

  return (
    <div className='border-b-[1px] border-b-slate-200 flex items-center justify-between py-[0.8em] px-1 dark:border-b-zinc-800 sm:px-4'>
      <SideBarMenu>
        <div>test</div>
      </SideBarMenu>
      <Link
        href='/'
        className={cn("font-bold text-2xl leading-relaxed", ls.variable)}
      >
        chefhub.
      </Link>
      <div className='pt-[0.2em] hidden sm:block'>
        <Link href='/restaurantes' passHref legacyBehavior>
          <Button variant='ghost' className='active:scale-90 transition-all'>
            Pratos
          </Button>
        </Link>
      </div>
      <div className='flex align-middle gap-2'>
        <Avatar className='h-9 w-9 hidden sm:block'>
          <AvatarImage src='https://github.com/shadcn.png' alt='avatar' />
          <AvatarFallback style={{ fontSize: "0.9rem" }}>CP</AvatarFallback>
        </Avatar>
        <Button
          className='active:scale-90'
          variant='ghost'
          size='icon'
          onClick={() => setTheme(!theme ? "system" : themeSelector[theme])}
        >
          <IconSun
            size='18px'
            className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0  transition-all dark:rotate-0 dark:scale-100'
          />
          <IconMoon
            size='18px'
            className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 '
          />
          <span className='sr-only'>Toggle scheme</span>
        </Button>
      </div>
    </div>
  );
};
