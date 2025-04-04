import LoginScreen from "./pages/loginScreen";
import RegistrationScreen from "./pages/registrationScreen";
import DashBoard from "./pages/logged-In/DashBoard";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomeScreen from "./pages/logged-In/HomeScreen";
import ProtectedRoutes from "./protectedRoutes/protectedRoutes";
import NotFound from "./pages/notFound";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import AddTaskForm from "./components/tasksComponents/AddTaskForm";
import TaskView from "./components/tasksComponents/TaskView/TaskView";
import ListView from "./pages/logged-In/listView";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/registration",
    element: <RegistrationScreen />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <HomeScreen />,
        children: [
          {
            index: true,
            element: <DashBoard />,
            children: [
              {
                path: "/addTask",
                element: <AddTaskForm />,
              },
              {
                path: "/listView",
                element: <ListView />,
              },
            ],
          },
          {
            path: "/taskView",
            element: <TaskView />,
          },
          {
            path: "/aboutUs",
            element: <AboutUsPage />,
          },
          {
            path: "/contactUs",
            element: <ContactUs />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="">
      {/* <RegistrationScreen />
      <LoginScreen /> */}

      <RouterProvider router={router} />
    </div>
  );
};
export default App;
