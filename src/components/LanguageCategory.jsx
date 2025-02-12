import { useContext, useEffect, useState } from "react";
import LanguageCategoryCard from "./LanguageCategoryCard";
import { dataContext } from "../provider/DataProvider";
const LanguageCategory = () => {
    const { languageCategories } = useContext(dataContext)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
            {
                languageCategories.map((languageCategory, idx) => <LanguageCategoryCard key={idx} languageCategory={languageCategory} />)
            }

        </div>
    );
};

export default LanguageCategory;