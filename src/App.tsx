// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg"; (public/vite.svg)
// import "./App.css";

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
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";

import {
  Anchor,
  AppShell,
  Box,
  Burger,
  Button,
  Center,
  Group,
  MantineProvider,
  Skeleton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMembers } from "./hooks/useMembers";
import { AstroimagingGallery } from "./pages/AstroimagingGallery";
import { AstroimagingUpload } from "./pages/AstroimagingUpload";
import { EventsCalendar } from "./pages/EventsCalendar";
import { LandingPage } from "./pages/LandingPage";
import { Members } from "./pages/Members";
import { MemberDetails } from "./pages/Members/MemberDetails";
import { MembersRoster } from "./pages/Members/MembersRoster";
import { MembersWrapper } from "./pages/Members/MembersWrapper";
import {
  ObservatoryStatus,
  ObservatoryStatusMini,
} from "./pages/ObservatoryStatus";
import { SignupForm } from "./pages/SignupForm";
import { Speaker } from "./pages/Speaker";

function AppWrapper() {
  return (
    <MantineProvider>
      <Router>
        <App />
      </Router>
    </MantineProvider>
  );
}

function App() {
  const [opened, { toggle }] = useDisclosure();
  const { pathname } = useLocation();
  const isMembers = useMembers();

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
      <AppShell.Header>
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
      </AppShell.Header>
      <AppShell.Navbar p="md">
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

        {Array(3)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="speaker/:date?" element={<Speaker />} />
          <Route path="astroimaging" element={<AstroimagingGallery />} />
          <Route path="events" element={<EventsCalendar />} />
          <Route path="observatory" element={<ObservatoryStatus />} />
          <Route path="join" element={<SignupForm />} />

          <Route path="members" element={<MembersWrapper />}>
            <Route index element={<Members />} />
            <Route path="me" element={<MemberDetails />} />
            <Route path="roster" element={<MembersRoster />} />
            <Route path="events" element={<EventsCalendar />} />
            <Route path="speaker/:date?" element={<Speaker />} />
            <Route path="astroimaging" element={<AstroimagingGallery />} />
            <Route
              path="astroimaging/upload"
              element={<AstroimagingUpload />}
            />
            <Route path="observatory" element={<ObservatoryStatus />} />
            <Route path="*" element={<Navigate replace to="/members" />} />
          </Route>

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}

export default AppWrapper;
