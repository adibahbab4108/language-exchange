import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Home from "../pages/Home";
import FindTutors from "../pages/FindTutors";
import AddTutorials from "../pages/AddTutorials";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
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
                path: '/add-tutorials',
                element: <AddTutorials />
            },
            {
                path: '/my-tutorials',
                element: <MyTutorials />
            },
            {
                path:'/my-booked-tutors',
                element:<MyBookedTutors/>
            }
        ]
    },
]);
export default router