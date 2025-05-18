import "@mantine/core/styles.css";
import {
  AppShell,
  Burger,
  Group,
  MantineProvider,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { theme } from "./theme";
import { IconDashboard, IconHistory, IconGavel } from "@tabler/icons-react";
import { useState } from "react";
import RulesMain from "./Components/Rules/RulesMain";

const navLinks = [
  {
    label: "Home",
    leftSection: <IconDashboard size={16} stroke={1.5} />,
  },
  {
    label: "History",
    leftSection: <IconHistory size={16} stroke={1.5} />,
  },
  {
    label: "Rules",
    leftSection: <IconGavel size={16} stroke={1.5} />,
  },
];

export default function App() {
  const [opened, { toggle }] = useDisclosure();
  const [activePage, setActivePage] = useState("Home");

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            Logo?
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          {navLinks.map(({ label, leftSection }) => {
            return (
              <NavLink
                label={label}
                leftSection={leftSection}
                key={label}
                active={activePage === label}
                onClick={() => {
                  setActivePage(label);
                }}
              />
            );
          })}
        </AppShell.Navbar>
        <AppShell.Main>
          <RulesMain />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
