import React, { useContext } from "react";
import { authContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading";

const UserProfile = () => {
    const { user } = useContext(authContext)
    console.log(user)
if(!user) return <Loading/>
    return (
        <div className=" shadow-lg rounded-2xl">
            <div className="flex flex-col items-center  text-center p-6">
                <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-56 h-56 rounded-full border-4 border-blue-500"
                />
                <h2 className="text-2xl font-bold mt-4">{user?.displayName}</h2>
                <p className="text-gray-600 text-sm">{user?.email}</p>
                <p className="text-gray-600 text-sm">{user?.phoneNumber}</p>

                <div className="mt-2">
                    <span
                        className={`text-xs font-semibold px-2 py-1 rounded ${user?.emailVerified ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                            }`}
                    >
                        {user?.emailVerified ? "✔ Email Verified" : "✖ Not Verified"}
                    </span>
                </div>

                <div className="mt-4">
                    <p className="text-sm text-gray-500 flex justify-between">
                        <span className="font-semibold">Account Created:</span>{" "}
                        {user?.metadata?.creationTime || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500 flex justify-between">
                        <span className="font-semibold">Created At:</span>{" "}
                        {new Date(Number(user?.metadata?.createdAt)).toLocaleDateString() || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500 flex justify-between">
                        <span className="font-semibold">Last Sign-In:</span>{" "}
                        {user?.metadata?.lastSignInTime || "N/A"}
                    </p>
                    <p className="text-sm text-gray-500 flex justify-between">
                        <span className="font-semibold">Last Login:</span>{" "}
                        {new Date(Number(user?.metadata?.lastLoginAt)).toLocaleDateString() || "N/A"}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default UserProfile;
