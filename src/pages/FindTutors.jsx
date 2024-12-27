
import TutorCard from "../components/TutorCard";
import NoDataAvailabe from "../components/NoDataAvailabe";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../provider/DataProvider";
import { CiSearch } from "react-icons/ci";

const FindTutors = () => {
    const { tutors } = useContext(dataContext)
    const [filteredValue, setFilteredValue] = useState(tutors)
    console.log(filteredValue)

    useEffect(() => {
        setFilteredValue(tutors);
    }, [tutors]);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredTutors = tutors.filter(tutor => tutor.name.toLowerCase().includes(searchValue));
        setFilteredValue(filteredTutors);
    }

    return (
        <div className="container mx-auto ">
            <label className="input input-bordered flex items-center gap-2 my-10">
                <input onChange={handleSearch} type="text" className="grow" placeholder="Search" />
                <CiSearch />
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {
                    filteredValue.length > 0 ?
                    filteredValue.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                        : <NoDataAvailabe />
                }
            </div>
        </div>
    );
};

export default FindTutors;