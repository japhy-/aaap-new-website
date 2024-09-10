import { Anchor, AppShellHeader, Box, Burger, Button, Center, Group, Text } from "@mantine/core";
import { useMembers } from "hooks/useMembers";
import { Link, useLocation } from "react-router-dom";

type AppHeaderProps = {
  opened: boolean;
  toggle: () => void;
};

export function AppHeader({ opened, toggle }: AppHeaderProps) {
  const isMembers = useMembers();
  const { pathname } = useLocation();

  return (<AppShellHeader>
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Center w={202}>
        <Anchor component={Link} to="/">
          AAAP LOGO
        </Anchor>
      </Center>
      <Anchor component={Link} to="/">
        <Text fz={"h2"}>AMATEUR ASTRONOMERS ASSOCIATION OF PRINCETON</Text>
      </Anchor>
      <Box flex={1} />
      {!isMembers && (
        <Button component="a" href={"/members" + pathname} variant="light">
          Members
        </Button>
      )}
      {!isMembers && (
        <Button href="/join" component="a">
          Join
        </Button>
      )}
      {isMembers && pathname === "/members/astroimaging" && (
        <Button
          variant="light"
          component="a"
          href="/members/astroimaging/upload"
        >
          Upload
        </Button>
      )}
      {isMembers && pathname === "/members/astroimaging/upload" && (
        <Button variant="light" component="a" href="/members/astroimaging">
          Browse
        </Button>
      )}
      {isMembers && (
        <Button href={pathname.replace("/members", "")} component="a">
          Log Out
        </Button>
      )}
      {isMembers && (
        <Button variant="light" component="a" href="/members/me">
          My Account
        </Button>
      )}
    </Group>
  </AppShellHeader>
  )
}

