import { useEffect, useState } from "react";
import LanguageCategoryCard from "./LanguageCategoryCard";
const LanguageCategory = () => {
    const [languageCategories, setLanguageCategories] = useState([]);

    useEffect(() => {
        fetch('/languageCategories.json')
            .then(response => response.json())
            .then(data => setLanguageCategories(data.languageCategories))
            .catch(error => alert('Error fetching JSON:', error));
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 container mx-auto mt-14">
            {
                languageCategories.map((languageCategory,idx) => <LanguageCategoryCard key={idx} languageCategory={languageCategory} />)
            }

        </div>
    );
};

export default LanguageCategory;