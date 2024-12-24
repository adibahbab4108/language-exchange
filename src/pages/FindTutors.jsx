
import TutorCard from "../components/TutorCard";
import NoDataAvailabe from "../components/NoDataAvailabe";
import { useContext } from "react";
import { dataContext } from "../provider/DataProvider";

const FindTutors = () => {
    const { tutors } = useContext(dataContext)

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