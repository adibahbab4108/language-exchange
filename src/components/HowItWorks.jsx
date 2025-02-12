import { GiGraduateCap } from "react-icons/gi";
import { MdLanguage } from "react-icons/md";
import SectionTitle from "./shared/SectionTitle";
import tutor1 from "/users/user6.jpg"
import tutor2 from "/users/user7.jpg"
import tutor3 from "/users/user8.jpg"
import user1 from "/users/user9.png"
const HowItWorks = () => {
    return (
        <div className="py-10 mt-20">
            <div>
                <SectionTitle title="How It Works" />
                <div className="flex overflow-y-auto gap-4">
                    {/* Step 1 */}
                    <div className="relative  p-4 border h-128 w-128 flex-shrink-0 ">
                        <h1 className="text-3xl w-12 h-12 grid place-content-center font-bold bg-green-500 rounded-md">1</h1>
                        <div >
                            <h1 className="text-4xl font-bold">Find your tutor</h1>
                            <p>We'll connect you with a tutor who will motivate, challenge, and inspire you.</p>
                        </div>
                        <div className="p-3 ">
                            <div className="flex gap-4 border w-[28rem] absolute bottom-48 bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                                <img src={tutor1} className="w-24 h-24 object-cover" alt="" />
                                <div className=" p-4 flex-shrink-0">
                                    <p className="flex items-center gap-2">
                                        <GiGraduateCap />
                                        <span className="text-lg ">John Doe</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MdLanguage />
                                        <span className="text-lg ">Speaks English (native), Spanish +3</span>
                                    </p>

                                </div>
                            </div>
                            <div className="flex gap-4 border  w-[28rem] absolute bottom-28  left-10 bg-white dark:bg-gray-900  rounded-lg overflow-hidden">
                                <img src={tutor2} className="w-24 h-24 object-cover" alt="" />
                                <div className="p-4 flex-shrink-0">
                                    <p className="flex items-center gap-2">
                                        <GiGraduateCap />
                                        <span className="text-lg "> Lary Wiliamson</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MdLanguage />
                                        <span className="text-lg ">Speaks Spanish (native), English +2</span>
                                    </p>

                                </div>
                            </div>
                            <div className="flex gap-4 border  w-[28rem] absolute bottom-6 left-12 bg-white dark:bg-gray-900  rounded-lg overflow-hidden">
                                <img src={tutor3} className="w-24 h-24 object-cover" alt="" />
                                <div className="p-4 flex-shrink-0">
                                    <p className="flex items-center gap-2">
                                        <GiGraduateCap />
                                        <span className="text-lg ">Avishek Dandi</span>
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <MdLanguage />
                                        <span className="text-lg ">Speaks English (native), Hindi +4</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col p-4 border h-128 w-128 flex-shrink-0 justify-around">
                        <h1 className="text-3xl w-12 h-12 grid place-content-center font-bold bg-green-600 rounded-md">2</h1>
                        <h1 className="text-4xl font-bold">Start Learning</h1>
                        <p>Your tutor will guide the way through your first lesson and help you plan your next steps.</p>
                        <img src={tutor1} className=" object-cover rounded-xl h-72 w-full" alt="" />

                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col p-4 border h-128 w-128 flex-shrink-0 justify-around">
                        <h1 className="text-3xl w-12 h-12 grid place-content-center font-bold bg-green-700 rounded-md">3</h1>
                        <h1 className="text-4xl font-bold">Speak. Read. Write. Repeat.</h1>
                        <p>Choose how many lessons you want to take each week and get ready to reach your goals!</p>
                        <img src={user1} className="object-cover rounded-xl h-72 w-full" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HowItWorks;