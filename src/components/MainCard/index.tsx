import {
  Anchor,
  Box,
  Card,
  Center,
  Flex,
  Image,
  Text
} from "@mantine/core";
import React, { ReactElement, ReactNode } from "react";

type MainCardProps = {
  title?: ReactNode;
  titleLink?: string;
  image?: ReactNode;
  imageLink?: string;
  imageCaption?: ReactNode;
  imageCaptionLink?: string;
  body?: ReactNode;
  footerLeft?: ReactNode;
  footerLeftLink?: string;
  footerRight?: ReactNode;
  footerRightLink?: string;
};

export function MainCard(props: MainCardProps) {
  const TitleWrapper = props.titleLink ? Anchor : React.Fragment;
  const ImageWrapper = props.imageLink ? Anchor : React.Fragment;
  const CaptionWrapper = props.imageCaptionLink ? Anchor : React.Fragment;
  const FooterLeftWrapper = props.footerLeftLink ? Anchor : React.Fragment;
  const FooterRightWrapper = props.footerRightLink ? Anchor : React.Fragment;

  return (<Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      {props.title && <TitleWrapper href={props.titleLink}><Text style={{ textAlign: "center" }} fz="h2">{props.title}</Text></TitleWrapper>}
      {props.image && (<Center>
        <ImageWrapper href={props.imageLink}>{
          typeof props.image === "string" ? <Image src={props.image} /> : props.image
        }</ImageWrapper>
      </Center>)}
      {props.imageCaption && <Center>
        <CaptionWrapper href={props.imageCaptionLink}><Text size="xs">{props.imageCaption}</Text></CaptionWrapper>
      </Center>}
    </Card.Section>
    <Box flex={1}>{props.body}</Box>
    <Card.Section>
      <Flex justify="space-between">
        <FooterLeftWrapper href={props.footerLeftLink}>
          {typeof props.footerLeft === 'string' ? <Text fz={"sm"} ml={10}>{props.footerLeft}</Text> : (props.footerLeft || <>&nbsp;</>)}
        </FooterLeftWrapper>
        <FooterRightWrapper href={props.footerRightLink}>
          {typeof props.footerRight === 'string' ? <Text fz={"sm"} mr={10}>{props.footerRight}</Text> : (props.footerRight || <>&nbsp;</>)}
        </FooterRightWrapper>
      </Flex>
    </Card.Section>
  </Card>
  )
}