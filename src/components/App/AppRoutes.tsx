import { Navigate, Route, Routes } from "react-router-dom";
import { AstroimagingGallery } from "pages/AstroimagingGallery";
import { AstroimagingUpload } from "pages/AstroimagingUpload";
import { EventsCalendar } from "pages/EventsCalendar";
import { LandingPage } from "pages/LandingPage";
import { Members } from "pages/Members";
import { MemberDetails } from "pages/Members/MemberDetails";
import { MembersRoster } from "pages/Members/MembersRoster";
import { MembersWrapper } from "pages/Members/MembersWrapper";
import {
  ObservatoryStatus
} from "pages/ObservatoryStatus";
import { SignupForm } from "pages/SignupForm";
import { Speaker } from "pages/Speaker";

export function AppRoutes() {
  return (<Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="speaker/:date?" element={<Speaker />} />
    <Route path="astroimaging" element={<AstroimagingGallery />} />
    <Route path="events" element={<EventsCalendar />} />
    <Route path="observatory" element={<ObservatoryStatus />} />
    <Route path="join" element={<SignupForm />} />

    <Route path="members" element={<MembersWrapper />}>
      <Route index element={<Members />} />
      <Route path="me" element={<MemberDetails />} />
      <Route path="roster" element={<MembersRoster />} />
      <Route path="events" element={<EventsCalendar />} />
      <Route path="speaker/:date?" element={<Speaker />} />
      <Route path="astroimaging" element={<AstroimagingGallery />} />
      <Route
        path="astroimaging/upload"
        element={<AstroimagingUpload />}
      />
      <Route path="observatory" element={<ObservatoryStatus />} />
      <Route path="*" element={<Navigate replace to="/members" />} />
    </Route>

    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>);
}

export default AppRoutes;
