import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/home/Home";
import AllCoursFeed from "../components/cours/AllCoursFeed";
import Mentors from "../components/mentorSection/mentors";
import MentorDetails from "../components/mentorSection/MentorDetails";
import SkillDetails from "../pages/home/SkillDetails";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../pages/PrivateRoute";
import MyProfile from "../pages/MyProfile";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />, // এখানে তোমার homepage component
      },
      {
        path: "/category/:category",
        element: <AllCoursFeed />,
        loader: () => fetch("/skillData.json").then((res) => res.json()),
      },
      {
        path: "/mentors",
        element: <Mentors />,
      },
      {
        path: "/mentorDetails/:id",
        element: (
          <PrivateRoute>
            <MentorDetails></MentorDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/mentors.json").then((res) => res.json()),
      },
      {
        path: "/skillDetails/:id",
        loader: () => fetch("/skillData.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <SkillDetails></SkillDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/loginPage",
    element: <LoginPage></LoginPage>,
  },
]);
