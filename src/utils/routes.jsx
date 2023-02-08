import { lazy } from "react";
import constant from "./constants";

const Home = lazy(() => import("../pages/Home.jsx"));
const ContactUs = lazy(() => import("../pages/ContactUs"));

const { routeConstants } = constant;

const {
    home,
    contactUs,
} = routeConstants;

export const routes = [
    {
        path: home,
        element: Home,
    },
    {
        path: contactUs,
        element: ContactUs,
    },
];