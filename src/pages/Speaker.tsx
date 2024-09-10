import { Carousel, Embla } from "@mantine/carousel";
import {
  Anchor,
  Box,
  Card,
  Center,
  Flex,
  Group,
  Image,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Table,
  Text,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandYoutubeFilled,
  IconBrandZoom,
} from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import speakerPlaceholder from "/speaker-60x60.png";
import { useNavigate, useParams } from "react-router-dom";
import { MainCard } from "components/MainCard";

// an array of speaker objects, with each object having a date value of the second tuesday of each month, starting with September 2023
const speakers = [
  {
    date: new Date("2023-09-12, 19:30 EDT"),
    name: "Dr. Jane Doe",
    affiliation: "Princeton University",
    title: "The Search for Exoplanets",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2023-10-10, 19:30 EDT"),
    name: "Dr. John Smith",
    affiliation: "Princeton Plasma Physics Laboratory",
    title: "Fusion Energy",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2023-11-14, 19:30 EST"),
    name: "Dr. Alice Brown",
    affiliation: "Princeton University",
    title: "Black Holes",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2023-12-12, 19:30 EST"),
    name: "Dr. Bob Green",
    affiliation: "Princeton University",
    title: "The Big Bang",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-01-09, 19:30 EST"),
    name: "Dr. Carol White",
    affiliation: "Harvard University",
    title: "Dark Matter",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-02-13, 19:30 EST"),
    name: "Dr. David Black",
    affiliation: "Rutgers University",
    title: "The Expanding Universe",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-03-12, 19:30 EST"),
    name: "Dr. Emily Red",
    affiliation: "Johns Hopkins University",
    title: "The Hubble Space Telescope",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-04-09, 19:30 EDT"),
    name: "Dr. Frank Yellow",
    affiliation: "San Francisco State University",
    title: "The James Webb Space Telescope",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-05-14, 19:30 EDT"),
    name: "Dr. George Orange",
    affiliation: "University of California, Berkeley",
    title: "The Mars Rover",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-06-11, 19:30 EDT"),
    name: "Dr. Helen Purple",
    affiliation: "University of Chicago",
    title: "The Search for Life in the Universe",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-09-10, 19:30 EDT"),
    name: "Dr. Ian Red",
    affiliation: "University of Illinois",
    title: "The Search for Extraterrestrial Intelligence",
    topic: 'SETI, the Search for Extraterrestrial Intelligence',
    blurb: `Dr. Ian is a 20-year veteran of the program, and will share the organization's latest findings.`,
  },
  {
    date: new Date("2024-10-08, 19:30 EDT"),
    name: "Dr. Jack Blue",
    affiliation: "University of Michigan",
    title: "Neutrinos and Gravity Waves",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-11-12, 19:30 EST"),
    name: "Dr. Kelly Green",
    affiliation: "University of Wisconsin",
    title: "General Relativity",
    topic: '<topic>',
    blurb: '<blurb>',
  },
  {
    date: new Date("2024-12-10, 19:30 EST"),
    name: "Dr. Larry Brown",
    affiliation: "University of Washington",
    title: "Quantum Mechanics",
    topic: '<topic>',
    blurb: '<blurb>',
  },
];

const today = new Date();
const upcomingSpeakerId = speakers.findIndex((s) => s.date >= today);
const defaultSpeakerId =
  upcomingSpeakerId === -1 ? speakers.length - 1 : upcomingSpeakerId;
const defaultDate = speakers[defaultSpeakerId].date.toISOString().slice(0, 10);

export function Speaker() {
  const { date: selectedDate } = useParams();
  const navigate = useNavigate();
  const [embla, setEmbla] = useState<Embla | null>(null);

  // find the index of the selected speaker
  const selectedSpeakerId = useMemo(() => {
    if (!selectedDate) {
      return defaultSpeakerId;
    }
    const index = speakers.findIndex(
      (s) => s.date.toISOString().slice(0, 10) === selectedDate
    );
    return index === -1 ? defaultSpeakerId : index;
  }, [selectedDate]);

  // on load, if there is no selected date, navigate to the upcoming speaker
  useEffect(() => {
    if (!selectedDate) {
      navigate(`/speaker/${defaultDate}`, { replace: true });
    }
  }, []);

  // when the selected speaker id changes, scroll to the selected speaker
  useEffect(() => {
    if (embla) {
      embla.scrollTo(selectedSpeakerId);
    }
  }, [embla, selectedSpeakerId]);

  // boolean to determine whether the zoom link is active or not
  const isToday = useMemo(
    () =>
      selectedSpeakerId === upcomingSpeakerId &&
      today.getDate() == speakers[upcomingSpeakerId].date.getDate(),
    [selectedSpeakerId]
  );

  return (
    <>
      <Carousel
        withIndicators
        getEmblaApi={setEmbla}
        height={120}
        slideSize={140}
        initialSlide={defaultSpeakerId}
        slideGap={"lg"}
        slidesToScroll={1}
        bg="#eeeeee"
      >
        {speakers.map((speaker, index) => (
          <Carousel.Slide
            key={index}
            onClick={() => {
              navigate(`/speaker/${speaker.date.toISOString().slice(0, 10)}`);
              // embla?.scrollTo(index)
            }}
            opacity={1 / Math.pow(5 / 4, Math.abs(selectedSpeakerId - index))}
          >
            <Stack
              gap={4}
              pt={10}
              bg={index === selectedSpeakerId ? "blue" : undefined}
            >
              <Center>
                <Image src={speakerPlaceholder} />
              </Center>
              <Center>
                <Text
                  size="sm"
                  c={index === selectedSpeakerId ? "white" : "dark"}
                  fw={
                    index === upcomingSpeakerId || index === selectedSpeakerId
                      ? "bold"
                      : "normal"
                  }
                >
                  {speaker.date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </Text>
              </Center>
            </Stack>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Space h={"sm"} />
      <SimpleGrid cols={3} h={320}>
        <Card m="auto">
          <Image w={320} src={speakerPlaceholder} />
        </Card>
        <Card>
          <Stack gap={0} h={"100%"} justify="center">
            <Center>
              <Text fz="h1">
                {speakers[selectedSpeakerId].date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            </Center>
            <Center mt={20}>
              <Text fz="h1">{speakers[selectedSpeakerId].name}</Text>
            </Center>
            <Center>
              <Text fz="h3">{speakers[selectedSpeakerId].affiliation}</Text>
            </Center>
            <Center mt={20}>
              <Text fz="h2">"{speakers[selectedSpeakerId].title}"</Text>
            </Center>
          </Stack>
        </Card>
        <Card>
          <Stack h={"100%"} justify="center">
            <SimpleGrid cols={2}>
              <IconBrandYoutubeFilled size={"6rem"} color="red" />
              <IconBrandZoom
                size={"6rem"}
                color="#0B5CFF"
                opacity={isToday ? 1 : 1 / 3}
              />
            </SimpleGrid>
          </Stack>
        </Card>
      </SimpleGrid>
      <Space h={"xl"} />
      <SimpleGrid cols={2}>
        <Card withBorder>
          <Group>
            <Box flex={1} />
            <Text fz="h2">About the Speaker</Text>
          </Group>
          <ScrollArea type="auto" h={250}>
            <Stack mr={"1.5rem"}>
              <Text>
                This is a bit about the speaker. Fill this in with some lorem
                ipsum text. This is a bit about the speaker. Fill this in with
                some lorem ipsum text. This is a bit about the speaker. Fill
                this in with some lorem ipsum text. This is a bit about the
                speaker. Fill this in with some lorem ipsum text. This is a bit
                about the speaker. Fill this in with some lorem ipsum text. This
                is a bit about the speaker. Fill this in with some lorem ipsum
                text. This is a bit about the speaker. Fill this in with some
                lorem ipsum text. This is a bit about the speaker. Fill this in
                with some lorem ipsum text.
              </Text>
              <Text>
                This is a bit about the speaker. Fill this in with some lorem
                ipsum text. This is a bit about the speaker. Fill this in with
                some lorem ipsum text. This is a bit about the speaker. Fill
                this in with some lorem ipsum text. This is a bit about the
                speaker. Fill this in with some lorem ipsum text. This is a bit
                about the speaker. Fill this in with some lorem ipsum text. This
                is a bit about the speaker. Fill this in with some lorem ipsum
                text. This is a bit about the speaker. Fill this in with some
                lorem ipsum text. This is a bit about the speaker. Fill this in
                with some lorem ipsum text.
              </Text>
            </Stack>
          </ScrollArea>
        </Card>
        <Card withBorder>
          <Group>
            <Text fz="h2">Topic Introduction</Text>
            <Box flex={1} />
          </Group>
          <ScrollArea type="auto" h={250}>
            <Stack mr={"1.5rem"}>
              <Text>
                This is a bit about the topic. Fill this in with some lorem
                ipsum text. This is a bit about the topic. Fill this in with
                some lorem ipsum text. This is a bit about the topic. Fill this
                in with some lorem ipsum text. This is a bit about the topic.
                Fill this in with some lorem ipsum text. This is a bit about the
                topic. Fill this in with some lorem ipsum text. This is a bit
                about the topic. Fill this in with some lorem ipsum text. This
                is a bit about the topic. Fill this in with some lorem ipsum
                text.
              </Text>
              <Text>
                This is a bit about the topic. Fill this in with some lorem
                ipsum text. This is a bit about the topic. Fill this in with
                some lorem ipsum text. This is a bit about the topic. Fill this
                in with some lorem ipsum text. This is a bit about the topic.
                Fill this in with some lorem ipsum text. This is a bit about the
                topic. Fill this in with some lorem ipsum text. This is a bit
                about the topic. Fill this in with some lorem ipsum text. This
                is a bit about the topic. Fill this in with some lorem ipsum
                text.
              </Text>
            </Stack>
          </ScrollArea>
        </Card>
      </SimpleGrid>
      <Space h={"xl"} />
      <Text fz="h2">This Month at the AAAP</Text>
      <Text>
        The June 2024 meeting of the AAAP will take place Tuesday, June 11th at
        7:30 PM. The location will be the planetarium at the NJ State Museum in
        Trenton, NJ. The club’s custom for many years has been to travel to the
        planetarium for the last meeting of the academic year. The meeting will
        feature a sky tour of the Spring and Summer constellations, and a
        special showing of the planetarium’s new show from the American Museum
        of Natural History, “Worlds Beyond Earth.” Meetings at the club’s
        customary venue, Peyton Hall on the campus of Princeton University, will
        resume in September.
      </Text>
      <Space h={"xl"} />
      <Text fz="h2">"Meet the Speaker" Dinner</Text>
      <Text>There is no "Meet the Speaker" dinner this month.</Text>
      <Space h={"xl"} />
      <Text fz="h2">Attending the Meeting</Text>
      <Text>
        Please note that the meeting will take place at the planetarium of the
        NJ State Museum, 205 West State Street, Trenton, NJ. There is plenty of
        free parking behind the museum, next to the planetarium entrance. This
        is an IN-PERSON ONLY event; you must be present at the planetarium to
        view the sky tour, experience the planetarium show projected onto its
        dome by the museum’s recently refurbished projection equipment, and
        participate in the meeting’s agenda. There will be no option to Zoom at
        this meeting, nor will there be a recorded version to play back later.
      </Text>
      <Space h={"xl"} />
      <Text fz="h2">Meeting Agenda</Text>
      <Text>[table/image of the agenda]</Text>
    </>
  );
}

export function SpeakerCard() {
  const speaker = speakers[defaultSpeakerId];

  return <MainCard
    title="Upcoming Speaker"
    titleLink="/speaker"
    image="https://placehold.co/120?text=John"
    imageCaption={`${speaker.name}, ${speaker.affiliation}`}
    body={<Text>Join us{" "}
      <b>
        {speaker.date.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
        })}
      </b>{" "}
      for a talk on {speaker.topic}. {speaker.blurb}.
    </Text>}
    footerLeft="Archive"
    footerLeftLink="/speaker/archive"
    footerRight="More..."
    footerRightLink="/speaker"
  />;}
