import { Carousel } from "@mantine/carousel";
import {
  Anchor,
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
import { AstroimagingCard } from "./Astroimaging/AstroimagingCard";
import { EventCard } from "./Events/EventsCard";
import { MembershipCard } from "./Membership/MembershipCard";
import { ContactCard } from "./Contact/ContactCard";

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
                  src={`https://placehold.co/400x200?text=astroimage+${index + 1
                    }`}
                />
              </Box>
            </Carousel.Slide>
          ))}
      </Carousel>
      <Space h="lg" />
      <Center>
        <SimpleGrid cols={3} spacing={"lg"} maw={1200}>
          <SpeakerCard />
          <AstroimagingCard/>
          <EventCard/>
          <MembershipCard/>
          <SiderealTimesCard />
          <ContactCard/>
        </SimpleGrid>
      </Center>
    </>
  );
}
