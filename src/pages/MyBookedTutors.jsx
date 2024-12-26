import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const MyBookedTutors = () => {
    const { user } = useContext(authContext);
    const [bookedTutorials, setBookedTutorial] = useState([]);
    console.log(bookedTutorials);

    useEffect(() => {
        const fetchPostedTutorials = async () => {
            try {
                if (user?.email) {
                    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/my-booked-tutorials/${user.email}`);
                    setBookedTutorial(data);
                    console.log('Fetched Data:', data);
                }
            } catch (error) {
                toast.error(error.message || 'Error fetching booked tutorials');
            }
        };

        if (user?.email) {
            fetchPostedTutorials();
        }
    }, [user?.email]);

    return (

        <div>
            <h1 className="text-center my-10 font-bold text-2xl">My Booked Tutors</h1>
            <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {bookedTutorials.map(tutorial => (
                    <div key={tutorial._id} className="card bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
                        <img src={tutorial.tutorImg} alt={tutorial.tutorName} className="w-16 h-16 rounded-full mb-4" />
                        <div className="card-body text-center">
                            <h3 className="text-lg font-semibold">{tutorial.tutorName}</h3>
                            <p className="text-sm text-gray-600">{tutorial.tutorLang}</p>
                            <p className="text-sm text-gray-600">{tutorial.tutorDesc}</p>
                            <p className="text-sm text-gray-600">Price: ${tutorial.tutorPrice}</p>
                            <p className="text-sm text-gray-600">Review: {tutorial.tutorReview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookedTutors;
