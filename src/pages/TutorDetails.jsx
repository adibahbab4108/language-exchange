import axios from 'axios';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authContext } from '../provider/AuthProvider';

const TutorDetails = () => {
    const { user } = useContext(authContext)
    const { data } = useLoaderData();
    const { _id, name, email, image, language, description, price, review } = data;
    const bookedData = {
        userEmail: user?.email, userName: user?.displayName,
        tutorId: _id, tutorName: name, tutorEmail: email, tutorImg: image, tutorLang: language, tutorDesc: description, tutorPrice: price, tutorReview: review,

    }

    const handleBook = async () => {
        if (!user) {
            return toast.warn("Please login first")
        }
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/book-tutor`, bookedData)
            if (data.message) toast.warn(data.message)
            if (data.acknowledged) {
                toast.success('Tutor booked successfully');
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <p className="text-gray-700 mb-2"><strong>Language:</strong> {language}</p>
                <p className="text-gray-700 mb-2"><strong>Description:</strong> {description}</p>
                <p className="text-gray-700 mb-2"><strong>Price:</strong> ${price}</p>
                <p className="text-gray-700 mb-2"><strong>Review:</strong> {review}</p>
                <button
                    onClick={handleBook}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition duration-300"
                >
                    Book
                </button>
            </div>
        </div>
    );
};

export default TutorDetails;
