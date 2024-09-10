import { MainCard } from "components/MainCard";

const month = new Date().toLocaleDateString('en', { month: 'long' });

export function SiderealTimesCard() {
  return <MainCard
    title="Sidereal Times"
    titleLink="https://www.princetonastronomy.com/"
    image="https://placehold.co/120?text=Newsletter"
    imageCaption={`${month} Edition`}
    body={
      <>
        The <b>{month} edition</b> of the our monthly is now available. Features
        include a guide to the summer sky, a review of the latest astroimaging
        equipment, and more.
      </>
    }
    footerLeft="Archive"
    footerLeftLink="https://www.princetonastronomy.com/"
    footerRight="More..."
    footerRightLink="https://www.princetonastronomy.com/"
  />;

}
