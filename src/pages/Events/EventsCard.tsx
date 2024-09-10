import { Text } from "@mantine/core";
import { MainCard } from "components/MainCard";

export function EventCard() {
  return <MainCard
    title="Upcoming Event"
    titleLink="/events"
    image="https://placehold.co/120?text=Moon"
    imageCaption="Lawrence Hopewell Trail Full Moon Ride"
    body={<Text>
      <b>Saturday, September 14</b> &mdash; AAAP members will have telescopes available for cyclists to view the moon and planets.
    </Text>}
    footerLeft="Request an Event"
    footerLeftLink="/events/request"
    footerRight="More..."
    footerRightLink="/events"
  />;
}
