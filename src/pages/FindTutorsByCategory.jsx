import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NoDataAvailabe from "../components/NoDataAvailabe";
import TutorCard from "../components/TutorCard";
import { dataContext } from "../provider/DataProvider";

const FindTutorsByCategory = () => {
    const location = useLocation();
    const {tutorsByCategory, setTutorsByCategory}=useContext(dataContext)

    let pageTitle = location.state;
    pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1).toLowerCase();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/find-tutors/${location.state}`);
                setTutorsByCategory(data);
            } catch (error) {
            }
        };
        fetchData();
    }, [location.state]);

    return (
        <div>
            <h1 className="text-center font-bold text-2xl my-5">Find {pageTitle} Teachers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container mx-auto">
                {
                    tutorsByCategory.length > 0 ?
                        tutorsByCategory.map((tutor) => <TutorCard key={tutor._id} tutor={tutor} />)
                        : <NoDataAvailabe />
                }
            </div>
        </div>
    );
};

export default FindTutorsByCategory;