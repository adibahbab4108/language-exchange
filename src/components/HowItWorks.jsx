import { GiGraduateCap } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import SectionTitle from "./shared/SectionTitle";
import tutor1 from "/users/user6.jpg";
import tutor2 from "/users/user7.jpg";
import tutor3 from "/users/user8.jpg";
import user1 from "/users/user9.png";

// Reusable TutorCard component
const TutorCard = ({ image, name, languages }) => (
    <div className="flex gap-4 border rounded-lg overflow-hidden  shadow-sm">
        <img src={image} className="w-24 h-24 object-cover" alt={`Profile of ${name}`} />
        <div className="p-4">
            <p className="flex items-center gap-2 font-medium ">
                <GiGraduateCap />
                {name}
            </p>
            <p className="flex items-center gap-2 text-sm ">
                <MdLanguage />
                {languages}
            </p>
        </div>
    </div>
);

// Reusable StepCard component
const StepCard = ({ stepNumber, title, description, children, bgColor = 'bg-green-500' }) => (
    <div className="relative p-6 border w-[28rem] min-w-[20rem] h-[32rem] flex-shrink-0 rounded-xl  shadow-md">
        <div className={`text-3xl w-12 h-12 grid place-content-center font-bold  ${bgColor} rounded-md mb-4`}>
            {stepNumber}
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className=" mb-4">{description}</p>
        {children}
    </div>
);

// Main Component
const HowItWorks = () => {
    return (
        <section className="py-16 mt-10 ">
            <SectionTitle title="How It Works" />
            <div className="flex overflow-x-auto gap-6 px-4 mt-10">
                {/* Step 1 */}
                <StepCard
                    stepNumber="1"
                    title="Find your tutor"
                    description="We'll connect you with a tutor who will motivate, challenge, and inspire you."
                    bgColor="bg-green-500"
                >
                    <div className="absolute bottom-6 left-6 right-6">
                        <TutorCard
                            image={tutor1}
                            name="John Doe"
                            languages="Speaks English (native), Spanish +3"
                        />
                        <TutorCard
                            image={tutor2}
                            name="Lary Wiliamson"
                            languages="Speaks Spanish (native), English +2"
                        />
                        <TutorCard
                            image={tutor3}
                            name="Avishek Dandi"
                            languages="Speaks English (native), Hindi +4"
                        />
                    </div>
                </StepCard>

                {/* Step 2 */}
                <StepCard
                    stepNumber="2"
                    title="Start Learning"
                    description="Your tutor will guide the way through your first lesson and help you plan your next steps."
                    bgColor="bg-green-600"
                >
                    <img src={tutor1} className="object-cover rounded-xl h-72 w-full mt-auto" alt="Tutor teaching" />
                </StepCard>

                {/* Step 3 */}
                <StepCard
                    stepNumber="3"
                    title="Speak. Read. Write. Repeat."
                    description="Choose how many lessons you want to take each week and get ready to reach your goals!"
                    bgColor="bg-green-700"
                >
                    <img src={user1} className="object-cover rounded-xl h-72 w-full mt-auto" alt="Student learning" />
                </StepCard>
            </div>
        </section>
    );
};

export default HowItWorks;
