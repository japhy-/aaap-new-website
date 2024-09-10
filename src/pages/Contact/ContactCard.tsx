import { MainCard } from "components/MainCard";

export function ContactCard () {
  return <MainCard
    title="Contact Us"
    titleLink="/contact"
    image="https://placehold.co/120?text=contact"
    imageCaption="Social Media placeholder"
    body={
      <>
        Find us on <b>Twitter</b>, <b>Facebook</b>, and <b>Instagram</b>.
        You can also reach us <b>by email</b>.
      </>
    }
    footerRight="More..."
    footerRightLink="/contact"
  />;
}
