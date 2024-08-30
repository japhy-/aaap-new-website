import { Carousel, Embla } from "@mantine/carousel";
import {
  Button,
  Center,
  Chip,
  Grid,
  Group,
  Image,
  SimpleGrid,
  Stack,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { IconGridDots, IconTable } from "@tabler/icons-react";
import { useEffect, useMemo, useState } from "react";
import { images, tags } from "../assets/images";

export function AstroimagingGallery() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [mode, setMode] = useState<"grid" | "table">("table");
  const [chosenTags, setChosenTags] = useState<string[]>([]);
  const filteredImages = useMemo(
    () =>
      images.filter((image) =>
        chosenTags.length
          ? chosenTags.every((tag) => image.tags?.includes(tag))
          : true
      ),
    [chosenTags]
  );
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const currentImage = filteredImages[currentSlide];

  useEffect(() => {
    setCurrentSlide(0);
  }, [chosenTags]);

  useEffect(() => {
    if (embla) {
      embla.scrollTo(currentSlide);
    }
  }, [embla, currentSlide]);

  return (
    <SimpleGrid cols={2}>
      <Stack>
        <Carousel
          withIndicators
          getEmblaApi={setEmbla}
          slideSize={"100%"}
          slideGap={"xl"}
          height="240"
          slidesToScroll={1}
          loop
          onSlideChange={setCurrentSlide}
        >
          {filteredImages.map((image) => (
            <Carousel.Slide key={image.src}>
              <Center>
                <Image h="240" src={image.src} />
              </Center>
            </Carousel.Slide>
          ))}
        </Carousel>
        {currentImage && (
          <Stack align="center">
            <Text fz="h2">{currentImage.caption}</Text>
            <Text fz="h3">{currentImage.author}</Text>
            <Text fz="h3">{currentImage.date?.toDateString()}</Text>
            <Text>{currentImage.location?.place}</Text>
            <Text size="xs">
              {currentImage.location?.coords.lat},{" "}
              {currentImage.location?.coords.lng}
            </Text>
            <Text>{currentImage.equipment?.join(", ")}</Text>
            <Text size="sm">{currentImage.notes}</Text>
            <Text size="xs">{currentImage.tags?.join("; ")}</Text>
          </Stack>
        )}
      </Stack>
      <Stack>
        <Group justify="center" gap="xl">
          <Button
            variant={mode === "grid" ? "light" : "subtle"}
            onClick={() => setMode("grid")}
          >
            <Group>
              <IconGridDots />
              Grid
            </Group>
          </Button>
          <Button
            variant={mode === "table" ? "light" : "subtle"}
            onClick={() => setMode("table")}
          >
            <Group>
              <IconTable />
              Table
            </Group>
          </Button>
        </Group>
        {/* select tags from a static list of tags */}
        {tags.size > 0 && (
          <Chip.Group multiple value={chosenTags} onChange={setChosenTags}>
            <Group>
              {[...tags].map((tag) => (
                <Chip
                  key={tag}
                  value={tag}
                  disabled={
                    !filteredImages.some((image) => image.tags?.includes(tag))
                  }
                >
                  {tag}
                </Chip>
              ))}
            </Group>
          </Chip.Group>
        )}
        {mode === "table" && (
          <Table>
            <TableThead>
              <TableTh w="auto">Thumbnail</TableTh>
              <TableTh w="33%">Who, What, When</TableTh>
              <TableTh w="33%">Where</TableTh>
              <TableTh w="33%">How &amp; Notes</TableTh>
            </TableThead>
            <TableTbody>
              {filteredImages.map((image, i) => (
                <TableTr key={image.src}>
                  <TableTd>
                    <Image
                      src={image.src}
                      w="auto"
                      h={64}
                      title={image.caption}
                      alt={image.caption}
                      style={{ cursor: "pointer" }}
                      onClick={() => setCurrentSlide(i)}
                    />
                  </TableTd>
                  <TableTd>
                    <Text>{image.author}</Text>
                    <Text>{image.caption}</Text>
                    <Text>{image.date?.toDateString()}</Text>
                  </TableTd>
                  <TableTd>
                    {image.location?.place && (
                      <Text>{image.location.place}</Text>
                    )}
                    {image.location?.coords && (
                      <Text size="sm">
                        {image.location.coords.lat}, {image.location.coords.lng}
                      </Text>
                    )}
                  </TableTd>
                  <TableTd>
                    {image.equipment && (
                      <Text>{image.equipment.join(", ")}</Text>
                    )}
                    {image.notes && <Text size="sm">{image.notes}</Text>}
                    {image.tags?.length && (
                      <Text size="xs">{image.tags.join("; ")}</Text>
                    )}
                  </TableTd>
                </TableTr>
              ))}
            </TableTbody>
          </Table>
        )}
        {mode === "grid" && (
          <Grid>
            {filteredImages.map((image, i) => (
              <Grid.Col
                span={3}
                key={image.src}
                onClick={() => setCurrentSlide(i)}
                style={{ cursor: "pointer" }}
              >
                <Image src={image.src} />
              </Grid.Col>
            ))}
          </Grid>
        )}
      </Stack>
    </SimpleGrid>
  );
}
