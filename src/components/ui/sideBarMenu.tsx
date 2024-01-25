import React, { useState } from "react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MenuList from "./menuList";
import { Avatar, AvatarImage } from "./avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import {} from "@heroicons/react/24/outline";
import {
  IconDoorExit,
  IconMapPin,
  IconMenu2,
  IconPoint,
  IconReceipt,
  IconSoup,
  IconUser,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { League_Spartan } from "next/font/google";

const ls = League_Spartan({ subsets: ["latin"], variable: "--font-sans" });

export default function SideBarMenu({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Sheet>
      <SheetTrigger className='block sm:hidden mt-1 mx-2' asChild>
        <Button className='p-0' variant='action'>
          <IconMenu2 />
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
        <div
          className={cn(
            "font-bold text-2xl leading-relaxed px-6 pt-2",
            ls.variable
          )}
        >
          chefhub.
        </div>
        <MenuList
          list={[
            {
              text: "Pratos",
              link: "pratos",
              icon: <IconSoup stroke='1.5' size='22px' />,
            },
            {
              text: "Meus pedidos",
              link: "/pedidos",
              icon: <IconReceipt stroke='1.5' size='22px' />,
            },
          ]}
        />

        <div className='absolute bottom-0 left-0 w-full'>
          <div className='w-full divide-y'>
            <div className='w-full'></div>
            <div className='w-full'></div>
          </div>
          <div className='flex items-center gap-2 w-full mt-8 mb-2 px-4'>
            <Avatar className='ml-2'>
              <AvatarImage
                src='https://github.com/shadcn.png'
                alt='profile avatar'
              />
              <AvatarFallback>CP</AvatarFallback>
            </Avatar>
            <div>
              <span className='block font-medium text-base leading-none'>
                Cauê Palacio
              </span>
              <span className='text-sm text-gray-600 dark:text-gray-400 leading-none'>
                cauegracioli@outlook.com
              </span>
            </div>
          </div>
          <MenuList
            list={[
              {
                text: "Meu perfil",
                link: "/logoff",
                icon: <IconUser stroke='1.5' size='22px' />,
              },
              {
                text: "Sair",
                link: "/logoff",
                icon: <IconDoorExit stroke='1.5' size='22px' />,
              },
            ]}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}
