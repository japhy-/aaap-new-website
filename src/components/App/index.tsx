// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
// import "@mantine/form/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/tiptap/styles.css";
// import "@mantine/modals/styles.css";


import {
  AppShell
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { AppBody } from "./AppBody";
import { AppHeader } from "./AppHeader";
import { AppNavbar } from "./AppNavbar";

export function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppHeader opened={opened} toggle={toggle} />
      <AppNavbar />
      <AppBody />
    </AppShell>
  );
}

export default App;
