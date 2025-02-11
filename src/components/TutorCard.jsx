import { FaGraduationCap, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const TutorCard = ({ tutor }) => {
    const { _id, name, email, image, language, description, review, price } = tutor;

    return (
        <div className="flex flex-col md:flex-row border p-4 gap-4 bg-white rounded-lg shadow-md dark:bg-gray-900 ">
            <div className="w-32">
                <img src={image} alt={name} className="rounded-lg " />
            </div>
            <div className="w-full md:w-2/3 flex  justify-between">
                <div className="mt-2 ">
                    <div>
                        <h2 className="font-bold text-2xl text-black dark:text-white">{name} ✅</h2>
                        <small className="btn-xs bg-amber-200 rounded-sm px-2 py-1 text-black">Ostirrr</small>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaGraduationCap className="text-indigo-500" />
                        <p className="text-gray-500">{language}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FaUser className="text-indigo-500" />
                        <p className="text-gray-500">24 active students, 230 lessons</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-gray-500">Speaks English (Proficient), Polish (Native)</p>
                    </div>
                    <p className="mt-2 text-gray-500">{description}</p>
                </div>
                <div>
                    <div className="flex justify-between md:flex-col lg:flex-row items-center mt-4">
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-bold text-yellow-500">5⭐</h3>
                            <small className="text-gray-500">{review} reviews</small>
                        </div>
                        <div className="flex flex-col items-center">
                            <h3 className="text-lg font-bold text-green-500">Price: ${price}</h3>
                            <small className="text-gray-500">50 min lesson</small>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Link to={`/tutor/${_id}`} className="btn btn-primary w-full">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
