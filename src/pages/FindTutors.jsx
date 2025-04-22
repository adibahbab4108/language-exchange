
import TutorCard from "../components/TutorCard";
import NoDataAvailabe from "../components/NoDataAvailabe";
import { useContext, useEffect, useState } from "react";
import { dataContext } from "../provider/DataProvider";
import { CiSearch } from "react-icons/ci";

const FindTutors = () => {
    const { tutors } = useContext(dataContext);
    const [filteredValue, setFilteredValue] = useState([]);

    useEffect(() => {
        setFilteredValue(tutors);
    }, [tutors]);

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filteredTutors = tutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchValue)
        );
        setFilteredValue(filteredTutors);
    };

    const handleSort = (e) => {
        const sortBy = e.target.value;

        const sortedData = [...filteredValue].sort((a, b) => {
            if (sortBy === "price-asc") return parseFloat(a.price) - parseFloat(b.price);
            if (sortBy === "price-desc") return parseFloat(b.price) - parseFloat(a.price);
            if (sortBy === "rating") return parseFloat(b.rating) - parseFloat(a.rating);
            return 0; // Prevent unexpected behavior
        });

        setFilteredValue(sortedData);
    };


    return (
        <div className="container mx-auto ">
            <div className="grid grid-cols-12 gap-2">
                <label className="input input-bordered flex items-center gap-2 my-10 col-span-8">
                    <input onChange={handleSearch} type="text" className="grow text-black" placeholder="Search" />
                    <CiSearch />
                </label>

                <label className="flex items-center gap-2 my-10 col-span-4  border-gray-300 rounded-lg">
                    <span className="ml-2 font-semibold">Sort by:</span>
                    <select
                        onChange={handleSort}
                        name="sort"
                        id="sort"
                        className=" p-2 grow input input-bordered focus:ring-blue-500 bg-transparent cursor-pointer"
                    >
                        <option value="">Select...</option>
                        <optgroup label="Price">
                            <option value="price-asc">Low to High</option>
                            <option value="price-desc">High to Low</option>
                        </optgroup>
                        <optgroup label="Rating">
                            <option value="rating">Highest Rated</option>
                        </optgroup>
                    </select>
                </label>

            </div>
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