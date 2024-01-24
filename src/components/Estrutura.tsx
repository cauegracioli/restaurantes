"use client";

import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Text,
  Title,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery, useViewportSize } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { League_Spartan } from "next/font/google";

const spartan = League_Spartan({ subsets: ["latin"] });

export default function Estrutura({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const matches = useMediaQuery(`(min-width: 48em)`);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Group justify='space-between' style={{ flex: 1 }} align='center'>
            <Title
              order={1}
              fz={rem(32)}
              pt={rem(10)}
              className={spartan.className}
            >
              {matches ? "chefhub." : "ch."}
            </Title>
            <Group ml='xl' gap={0}>
              <ActionIcon
                onClick={() =>
                  setColorScheme(
                    computedColorScheme === "light" ? "dark" : "light"
                  )
                }
                variant='default'
                size='lg'
                aria-label='Toggle color scheme'
              >
                <IconSun
                  style={{
                    width: "60%",
                    height: "60%",
                    display: colorScheme === "dark" ? "none" : "block",
                  }}
                  stroke={1.5}
                />
                <IconMoon
                  style={{
                    width: "60%",
                    height: "60%",
                    display: colorScheme === "dark" ? "block" : "none",
                  }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py='md' px={4}>
        <button className='block p-2 rounded-md font-medium'>Home</button>
        <button className='block p-2 rounded-md font-medium'>Blog</button>
        <button className='block p-2 rounded-md font-medium'>Contacts</button>
        <button className='block p-2 rounded-md font-medium'>Support</button>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
