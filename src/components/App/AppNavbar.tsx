import { Anchor, AppShellNavbar, Text } from "@mantine/core";
import { ObservatoryStatusMini } from "pages/ObservatoryStatus";
import { Link } from "react-router-dom";
import { useMembers } from "../../hooks/useMembers";

export function AppNavbar() {
  const isMembers = useMembers();

  return (<AppShellNavbar p="md">
    <ObservatoryStatusMini />
    <Text>
      <Anchor
        component={Link}
        to={isMembers ? "/members/speaker" : "/speaker"}
      >
        Speaker
      </Anchor>
    </Text>
    <Text>
      <Anchor
        component={Link}
        to={isMembers ? "/members/events" : "/events"}
      >
        Events
      </Anchor>
    </Text>
    <Text>
      <Anchor
        component={Link}
        to={isMembers ? "/members/astroimaging" : "/astroimaging"}
      >
        Astroimaging
      </Anchor>
    </Text>

    {/* {Array(3)
      .fill(0)
      .map((_, index) => (
        <Skeleton key={index} h={28} mt="sm" animate={false} />
      ))} */}
  </AppShellNavbar>
  )
}