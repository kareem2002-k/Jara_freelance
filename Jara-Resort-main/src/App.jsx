import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.scss";
import Home from "./screens/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import RoomsView from "./screens/RoomsView";
import Gallery from "./screens/Gallery";
import Media from "./screens/Media";
import EventsBooking from "./screens/EventsBooking";
import About from "./screens/About";
import Contact from "./screens/Contact";
import ExperiencesView from "./screens/ExperiencesView";
import Activities from "./screens/Activities";
import AllInclusive from "./screens/AllInclusive";
import ChildrenView from "./screens/ChildrenView";
import BoatTransport from "./screens/BoatTransport";
import ResponsibleHospitality from "./screens/ResponsibleHospitality";
import ContentCreators from "./screens/ContentCreators";
import CarServices from "./screens/CarServices";
import DayPass from "./screens/DayPass";
import Covid19 from "./screens/Covid19";
import OvernightExperiencesAndBooking from "./screens/OvernightExperiencesAndBooking";
import BusinessRetreat from "./screens/BusinessRetreat";
import Complaints from "./screens/Complaints";
import BookingAdditions from "./screens/BookingAdditions";
import Weddings from "./screens/Weddings";
import BriefHistory from "./screens/BreifHistory";
import Menus from "./screens/Menus";
import MuseyoCommunityYouthsTollgate from "./screens/MuseyoCommunityYouthsTollgate";
import Packages from "./screens/Packages";
import PremiumCollection from "./screens/PremiumCollection";
import PrivateParties from "./screens/PrivateParties";
import Photoshoots from "./screens/Photoshoots";
import Vouchers from "./screens/Vouchers";
import SpecialRequests from "./screens/SpecialRequests";
import Photos from "./screens/Photos";
import JoinUs from "./screens/JoinUs";
import FAQs from "./screens/FAQs";
import Taxes from "./screens/Taxes";
import JaraForGood from "./screens/JaraForGood";
import DayPassBooking from "./screens/DayPassBooking";
import OverNightBooking from "./screens/OverNightBooking";
import GuestCountNight from "./screens/OverNight booking/GuestCountNight";
import GuestDetailsDay from "./screens/DayPassBooking/GuestDetailDay";
import GuestDetailsNight from "./screens/OverNight booking/GuestDetailsNight";
import BookingSummaryDay from "./screens/DayPassBooking/BookingSummaryDay";
import BookingOptions from "./screens/DayPassBooking/BookingOptions";
import Calendar from "./screens/OverNight booking/Calender";


export default function App() {
 
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  AOS.init({
    once: true,
  });
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rooms" element={<RoomsView />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/history" element={<BriefHistory />} />
        <Route exact path="/media" element={<Media />} />
        <Route exact path="/events" element={<EventsBooking />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/photo" element={<About />} />
        <Route exact path="/experiences" element={<ExperiencesView />} />
        <Route exact path="/activities" element={<Activities />} />
        <Route exact path="/children" element={<ChildrenView />} />
        <Route exact path="/boat-transport" element={<BoatTransport />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/jara-for-good" element={<JaraForGood />} />
        <Route path="/taxes" element={<Taxes />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/special-requests" element={<SpecialRequests />} />
        <Route exact path="/vouchers" element={<Vouchers />} />
        <Route exact path="/photoshoots" element={<Photoshoots />} />
        <Route exact path="/private-parties" element={<PrivateParties />} />
        <Route exact path="/premium-collection" element={<PremiumCollection />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/booking-additions" element={<BookingAdditions />} />
        <Route exact path="/weddings" element={<Weddings />} />
        <Route exact path="/menus" element={<Menus />} />
        <Route exact path="/responsible-hospitality" element={<ResponsibleHospitality />} />
        <Route exact path="/all-inclusive" element={<AllInclusive />} />
        <Route exact path="/car-services" element={<CarServices />} />
        <Route exact path="/day-pass" element={<DayPass />} />

        <Route exact path="/complaints" element={<Complaints />} />
        <Route
          exact
          path="/museyo-community-youths-tollgate"
          element={<MuseyoCommunityYouthsTollgate />}
        />
        <Route exact path="/covid-19" element={<Covid19 />} />
        <Route exact path="/content-creators" element={<ContentCreators />} />

{/*THE ROUTES BELOW ARE FOR THE OVERNIGHT EXPERIENCES AND BOOKING PAGE and i use them nested to toggle between them and make it clean*/}
        <Route exact path="/overnight-pass-booking" element={<OverNightBooking/>} >
          <Route path="" element={<GuestCountNight />} />
          <Route path="guest-details" element={<GuestDetailsNight />} />
          <Route path="calender" element={<Calendar />} />

        </Route>


        <Route exact path="/day-pass-booking" element={<DayPassBooking />} >
          <Route path="" element={<GuestDetailsDay/>} />
          <Route path="booking-summary" element={<BookingSummaryDay />} />
          <Route path="booking-options" element={<BookingOptions />} />


        </Route>

        <Route exact path="/business-retreat" element={<BusinessRetreat />} />
        <Route
          exact
          path="/overnight-experiences-and-booking"
          element={<OvernightExperiencesAndBooking />}
        />
      </Routes>
      <Footer />
    </>
  );
}
