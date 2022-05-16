import {Home} from "../pages/Home/Home";
import {Airports} from "../pages/Airports/Airports";
import {Flights} from "../pages/Flights/Flights";
import {FAQ} from "../pages/FAQ/FAQ";

const routes = [
  {
    name: "Home",
    path: "/Home",
    component: Home,
    isProtected: false,
  },
  {
    name: "Airports",
    path: "/Airports",
    component: Airports,
    isProtected: true,
  },
  {
    name: "Flights",
    path: "/Flights",
    component: Flights,
    isProtected: true,
  },
  {
    name: "FAQ",
    path: "/FAQ",
    component: FAQ,
    isProtected: true,
  },
];

export default routes;
