import { Carousel } from "@mantine/carousel";
import {
  Box,
  Card,
  Center,
  Flex,
  Image,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core";
import { SpeakerCard } from "./Speaker";
import { SiderealTimesCard } from "./SiderealTimes";

export function LandingPage() {
  return (
    <>
      <Carousel
        withIndicators
        height={200}
        slideSize={"33.3333%"}
        slideGap={"xl"}
        slidesToScroll={1}
        loop
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Carousel.Slide key={index}>
              <Box h={"100%"} bg="blue" c="white" fz={"h1"}>
                {/* <Center h={"100%"}>{index + 1}</Center> */}
                <Image
                  src={`https://via.placeholder.com/400x200?text=astroimage+${
                    index + 1
                  }`}
                />
              </Box>
            </Carousel.Slide>
          ))}
      </Carousel>
      <Space h="lg" />
      <Center>
        <SimpleGrid cols={3} spacing={"lg"} maw={1200}>
          <SpeakerCard/>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Center fz="h2">Astroimaging</Center>
              <Center>
                <Image src="https://via.placeholder.com/120?text=M81" />
              </Center>
              <Center>
                <Text size="xs">M81 Spiral Galaxy in Ursa Major</Text>
              </Center>
            </Card.Section>
            <Text flex={1}>
              The AAAP has a digital library of over <b>2,000</b> images of
              planets, comets, and deep sky objects taken by our members.
            </Text>
            <Card.Section>
              <Flex>
                <Box flex={1} />
                <Text fz={"sm"} mr={10}>
                  More...
                </Text>
              </Flex>
            </Card.Section>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Center fz="h2">Upcoming Event</Center>
              <Center>
                <Image src="https://via.placeholder.com/120?text=Moon" />
              </Center>
              <Center>
                <Text size="xs">Lawrence Hopewell Trail Full Moon Ride</Text>
              </Center>
            </Card.Section>
            <Text flex={1}>
              <b>Saturday, September 14</b> &mdash; AAAP members will have
              telescopes available for cyclists to view the moon and planets.
            </Text>
            <Card.Section>
              <Flex>
                <Text fz={"sm"} ml={10}>
                  Request an Event
                </Text>
                <Box flex={1} />
                <Text fz={"sm"} mr={10}>
                  More...
                </Text>
              </Flex>
            </Card.Section>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Center fz="h2">Membership</Center>
              <Center>
                <Image src="https://via.placeholder.com/120?text=ClubPic" />
              </Center>
              <Center>
                <Text size="xs">AAAP Members at the Observatory</Text>
              </Center>
            </Card.Section>
            <Text flex={1}>
              The AAAP is a community of amateur astronomers dedicated to
              observing the night sky and sharing our passion with others.{" "}
              <b>Join us today!</b>
            </Text>
            <Card.Section>
              <Flex>
                <Text fz={"sm"} ml={10}>
                  Members Portal
                </Text>
                <Box flex={1} />
                <Text fz={"sm"} mr={10}>
                  Sign Up
                </Text>
              </Flex>
            </Card.Section>
          </Card>
          <SiderealTimesCard/>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Center fz="h2">Contact Us</Center>
              <Center>
                <Image src="https://via.placeholder.com/120?text=contact" />
              </Center>
              <Center>
                <Text size="xs">Social Media placeholder</Text>
              </Center>
            </Card.Section>
            <Text flex={1}>
              Find us on <b>Twitter</b>, <b>Facebook</b>, and <b>Instagram</b>.
              You can also reach us <b>by email</b>.
            </Text>
            <Card.Section>
              <Flex>
                <Box flex={1} />
                <Text fz={"sm"} mr={10}>
                  More...
                </Text>
              </Flex>
            </Card.Section>
          </Card>
        </SimpleGrid>
      </Center>
    </>
  );
}
