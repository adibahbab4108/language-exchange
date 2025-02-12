import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [languageCategories, setLanguageCategories] = useState([]);
    const [tutors, setTutors] = useState([]);
    const [tutorsByCategory, setTutorsByCategory] = useState([]);

    useEffect( () => {
        fetchCategories()
        fetchAllTutorials()
    }, []);


    const fetchCategories = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/language-categories`)
        setLanguageCategories(data)
    }
    const fetchAllTutorials = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/find-tutors`, {
            withCredentials: true
        })
        setTutors(data)
    }
    const data = {
        languageCategories, tutors,
        tutorsByCategory, setTutorsByCategory,
    }
    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
};

export default DataProvider;