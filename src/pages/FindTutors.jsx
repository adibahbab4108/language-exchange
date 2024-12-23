import axios from "axios";
import { useEffect, useState } from "react";
import TutorCard from "../components/TutorCard";
import NoDataAvailabe from "../components/NoDataAvailabe";

const FindTutors = () => {
    const [tutors, setTutors] = useState([]);
    useEffect(() => {
        fetchAllTutorials()
    }, [])

    const fetchAllTutorials = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/find-tutors`)
        setTutors(data)
    }
    console.log(tutors)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
            {
                tutors.length > 0 ?
                    tutors.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                    : <NoDataAvailabe />
            }
        </div>
    );
};

export default FindTutors;