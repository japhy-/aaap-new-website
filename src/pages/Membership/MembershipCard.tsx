import { MainCard } from "components/MainCard";

export function MembershipCard () {
  return <MainCard
    title="Membership"
    titleLink="/join"
    image="https://placehold.co/120?text=ClubPic"
    imageCaption="AAAP Members at the Observatory"
    body={<>The AAAP is a community of amateur astronomers dedicated to observing the night sky and sharing our passion with others. <b>Join us today!</b></>}
    footerLeft="Members Portal"
    footerLeftLink="/members"
    footerRight="Sign Up"
    footerRightLink="/join"
  />
}
