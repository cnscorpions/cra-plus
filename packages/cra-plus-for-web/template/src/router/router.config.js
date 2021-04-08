// import Loadable from "react-loadable";
import Home from "pages/Home"
// import Loading from "./Loading";

// const Home = Loadable({
//   loader: () => import("pages/Home/index"),
//   loading: Loading,
// });

export const Routes = [
  {
    path: "/",
    component: Home,
  }
];
