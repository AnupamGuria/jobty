import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from "./Pages";

import { action as registerAction } from "./Pages/Register";
import { action as loginAction } from "./Pages/Login";
import { loader as dashboardLoader } from "./Pages/DashboardLayout";
import { action as addJobAction } from "./Pages/AddJob";
import { loader as allJobloader } from "./Pages/Alljobs";
import { loader as editJobLoader } from "./Pages/EditJob";
import { action as editJobAction } from "./Pages/EditJob";
import { action as deleteJobActon } from "./Pages/DeleteJob";
import { loader as adminLoader } from "./Pages/Admin";
import { action as profileAction } from "./Pages/Profile";
import { loader as statsLoader } from "./Pages/Stats";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "false";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/Landing", element: <Landing /> },
      {
        path: "/Register",
        element: <Register />,
        action: registerAction,
      },
      { path: "/Login", element: <Login />, action: loginAction },
      {
        path: "/DashboardLayout",
        element: <DashboardLayout checkDefaultTheme />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobloader,
          },
          {
            path: "profile",
            element: <Profile />,
            action: profileAction,
          },
          {
            path: "admin",
            element: <Admin />,
            loader: adminLoader,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
          { path: "delete-job/:id", action: deleteJobActon },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
