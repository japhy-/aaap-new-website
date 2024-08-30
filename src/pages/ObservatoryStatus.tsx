import { Carousel } from "@mantine/carousel";
import {
  Anchor,
  Badge,
  Box,
  Center,
  Divider,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect, useMemo, useState } from "react";
import { ImageModal } from "../components/ImageModal";
import directions from "/observatory-directions.png";
import { Link, useLocation } from "react-router-dom";
import { images } from "../assets/images";

const NEXT_FRIDAY = getNextFriday();

function getNextFriday() {
  const today = new Date();
  const diff = (12 - today.getDay()) % 7; // 12 = 5 (friday) + 7
  return new Date(today.setDate(today.getDate() + diff));
}

const lat = 40.314176323501606;
const lng = -74.8616453176525;

const status = [
  { label: "OPEN", color: "green" },
  { label: "TENTATIVE", color: "yellow" },
  { label: "CLOSED", color: "red" },
][Math.floor(Math.random() * 3)];


export function ObservatoryStatusMini() {
  const location = useLocation();
  const isMembers = useMemo(() => location.pathname.includes("/members"), [location.pathname]);

  const color = status.color;
  return (
    <Stack gap={0} bg={color} bd={`4px solid ${color}`}>
      <Center>
        <Anchor component={Link} c="white" to={isMembers ? "/members/observatory" : "/observatory"}>
          Observatory Status
        </Anchor>
      </Center>
      <Box bg="white" fw={"bold"} >
        <Center>{status.label} {NEXT_FRIDAY.toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
        })}</Center>
      </Box>
    </Stack>
  );
}

export function ObservatoryStatus() {
  // Powered by SunriseSunset.io
  const [sunsetTime, setSunsetTime] = useState<string>("sunset");
  useEffect(() => {
    fetch(
      `https://api.sunrisesunset.io/json?lat=${lat}&lng=${lng}&date=${NEXT_FRIDAY.toJSON().slice(
        0,
        10
      )}`
    )
      .then((r) => r.json())
      .then((r) => {
        setSunsetTime(r.results.sunset.replace(/:\d\d /, " "));
      });
  }, []);

  return (
    <>
      <Center mb={"lg"}>
        <Text fz="h1">
          {NEXT_FRIDAY.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}{" "}
          we will be
        </Text>
        <Badge m="xs" color={status.color} size="xl" fz="h3">
          {status.label}
        </Badge>
        {status.label !== "CLOSED" && (
          <Text fz="h1">{sunsetTime} &ndash; 11 PM</Text>
        )}
      </Center>
      <Center>
        <Text fz="h2">Seasonal Night Sky Targets</Text>
      </Center>
      <Carousel
        withIndicators
        height={180}
        slideSize={"20%"}
        slideGap={"sm"}
        slidesToScroll={1}
        loop
      >
        {images.map((_, index) => (
          <Carousel.Slide key={index}>
            <Box h={"100%"} bg="blue" c="white">
              <Image src={_.src} />
              <Center fz="xs">{_.caption}</Center>
            </Box>
          </Carousel.Slide>
        ))}
      </Carousel>
      <Group mt="lg">
        <Stack flex={1} mb="lg">
          <Center>
            <Text fz="h2">Directions to the Park Entrace</Text>
          </Center>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m8!1m3!1d3662.263869676087!2d-74.8538463!3d40.3153916!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m0!4m3!3m2!1d40.3159899!2d-74.85224889999999!5e1!3m2!1sen!2sus!4v1718232897728!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Stack>
        <Divider orientation="vertical" />
        <Stack flex={1} mb="lg">
          <Center>
            <Text fz="h2">Directions to the Observatory</Text>
          </Center>
          <Center>
            <ImageModal
              h={450}
              src={directions}
              modal={{
                centered: true,
                size: "75%",
                title:
                  "Directions to Observatory from Entrance on Bear Tavern Road",
              }}
            />
          </Center>
        </Stack>
      </Group>
    </>
  );
}
