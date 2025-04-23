import { useContext, useState } from "react";
import { authContext } from "../../provider/AuthProvider";
import Loading from "../../components/Loading";

const UpdateUser = () => {
    const { user, updateUserProfile } = useContext(authContext);
    const [name, setName] = useState(user?.displayName || "");
    const [phone, setPhone] = useState(user?.phoneNumber || "");
    const [photo, setPhoto] = useState(user?.photoURL || "");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    console.log(name, phone, photo, message)
    if (!user) return <Loading />;

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateUserProfile({
                displayName: name,
                phoneNumber: phone,
                photoURL: photo,
            });
            setMessage("✅ Profile updated successfully.");
        } catch (err) {
            setMessage("❌ Failed to update profile.");
            console.error(err);
        }
        setLoading(false)
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
            <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                <label className="text-sm font-semibold">Name</label>
                <input
                    type="text"
                    className="input input-bordered"
                    value={name}
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                
                {/* <label className="text-sm font-semibold">Phone</label>
                <input
                    type="text"
                    className="input input-bordered"
                    value={phone}
                    placeholder="+880"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                /> */}

                <label className="text-sm font-semibold">Photo URL</label>
                <input
                    type="text"
                    className="input input-bordered"
                    value={photo}
                    placeholder="Please enter image url"
                    onChange={(e) => setPhoto(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update"}
                </button>

                {message && (
                    <p className="text-center text-sm mt-2 text-blue-600">{message}</p>
                )}
            </form>
        </div>
    );
};

export default UpdateUser;
