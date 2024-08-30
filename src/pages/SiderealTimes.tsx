import {
  Box,
  Card,
  Center,
  Flex,
  Image,
  Text
} from "@mantine/core";

const month = new Date ().toLocaleDateString ('en', {month: 'long'});

export function SiderealTimesCard() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Center fz="h2">Sidereal Times</Center>
        <Center>
          <Image src="https://via.placeholder.com/120?text=Newsletter" />
        </Center>
        <Center>
          <Text size="xs">{month} Edition</Text>
        </Center>
      </Card.Section>
      <Text flex={1}>
        The <b>{month} edition</b> of the our monthly is now available. Features
        include a guide to the summer sky, a review of the latest astroimaging
        equipment, and more.
      </Text>
      <Card.Section>
        <Flex>
          <Text fz={"sm"} ml={10}>
            Archive
          </Text>
          <Box flex={1} />
          <Text fz={"sm"} mr={10}>
            More...
          </Text>
        </Flex>
      </Card.Section>
    </Card>
  );
}
