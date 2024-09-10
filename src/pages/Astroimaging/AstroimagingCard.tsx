import { Text } from "@mantine/core";
import { MainCard } from "components/MainCard";

export function AstroimagingCard() {
  return <MainCard
    title="Astroimaging"
    titleLink="/astroimaging"
    image="https://placehold.co/120?text=M81"
    imageCaption="M81 Spiral Galaxy in Ursa Major"
    body={<Text>
      The AAAP has a digital library of over <b>2,000</b> images of planets, comets, and deep sky objects taken by our members.
    </Text>}
    footerRight="More..."
    footerRightLink="/astroimaging"
  />
}
