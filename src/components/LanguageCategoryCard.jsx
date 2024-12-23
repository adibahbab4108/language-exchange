import { TfiAgenda, TfiAngleRight } from "react-icons/tfi";

const LanguageCategoryCard = ({ languageCategory }) => {
    const { title, numberOfTeachers, icon } = languageCategory;
    
    return (
        <div>
            <div className="flex border gap-3 p-4">
                <div className="place-content-center">
                    <img src={icon} className="w-14" alt="icon" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold mb-2">{title}</h1>
                    <p className="text-gray-500 font-bold">{numberOfTeachers} teachers</p>
                </div>
                <div className="place-content-center ml-auto">
                    <TfiAngleRight className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default LanguageCategoryCard;