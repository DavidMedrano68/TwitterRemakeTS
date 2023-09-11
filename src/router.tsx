import { Navigate, createHashRouter } from "react-router-dom";
import HomePage from "./components/homePage";
import Notifications from "./components/notifications";
import MessagesPage from "./components/MessagesPage";
import ProfilePage from "./components/Profilepage";
import NewsFeed from "./components/newsFeed";
import Settings from "./components/settings";
import Explore from "./components/explore";
import Tweet from "./components/tweet";
import Error from "./components/error";
import ErrorPageProfile from "./components/errorPageProfile";
import ErrorPage from "./components/errorPage";

export const routes = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to={"/Home/"} replace />,
      },
      {
        path: "Home/",
        element: <NewsFeed />,
      },
      {
        path: "Alerts/",
        element: <Notifications />,
      },
      {
        path: "More../",
        element: <Settings />,
      },
      {
        path: "Explore/",
        element: <Explore />,
      },
      {
        path: "Post/:TweetID",
        element: <Tweet />,
        errorElement: <ErrorPage />,
      },
      {
        path: "Profile/:userID",
        element: <ProfilePage />,
        errorElement: <ErrorPageProfile />,
      },
    ],
  },
  {
    path: "Inbox/",
    element: <MessagesPage />,
  },
]);
