import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* Sidebar */}
            <div className="col-span-3">
                <Sidebar />
            </div>
            <div className="col-span-9 p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
