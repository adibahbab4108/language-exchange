import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import FindTutorsByCategory from "../pages/FindTutorsByCategory";
import axios from "axios";
import UpdateTutorial from "../pages/UpdateTutorial";
import TutorDetails from "../pages/TutorDetails";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/find-tutors',
                element: <FindTutors />
            },
            {
                path: '/find-tutors/:category',
                element: <FindTutorsByCategory />,
            },
            {
                path: '/add-tutorials',
                element: <PrivateRoute><AddTutorials /></PrivateRoute>
            },
            {
                path: '/my-tutorials',
                element: <PrivateRoute> <MyTutorials /></PrivateRoute>
            },
            {
                path: '/my-booked-tutors',
                element: <PrivateRoute>
                    <MyBookedTutors />,
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <UpdateTutorial />,
                loader: ({ params }) => axios.get(`${import.meta.env.VITE_API_URL}/tutor/${params.id}`)
            },
            {
                path: '/tutor/:details',
                element: <TutorDetails />,
                loader: ({ params }) => axios.get(`${import.meta.env.VITE_API_URL}/tutor/${params.details}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
        errorElement:<ErrorPage/>,
        // children[

        // ]
    }

]);
export default router