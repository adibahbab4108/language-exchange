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
                // loader: ()=>axios.get()
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
                element: <MyBookedTutors />
            },

            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    },

]);
export default router