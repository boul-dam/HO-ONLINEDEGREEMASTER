import CustomForm from "./customform";
import Enroll from "./enroll";
import Register from "./register";

const Course = ()=>{

        const features = [
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>,
                title: "Bachelor of Business Administration",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>,
                title: "Bachelor of Commerce",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
            },
            {
                icon:
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                    </svg>,
                title: "MBA - Shipping & Logistics Management",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
            },
        ]
    
        return (
            <section className="relative py-28 bg-gray-900" id="courses">
                <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
                    <div className="max-w-xl">
                        <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Online Bachelor & MBA Programs
                        </h3>
                        <p className="mt-3">
                        online learning solutions that bridge the gap between learners and knowledge, fostering a future of accessible, lifelong learning.
                        </p>
                        <div className="mt-4">
                         <Register />
                      
                        </div>
                    </div>
                    <div className="mt-12 lg:mt-0">
                        <ul className="grid gap-8 sm:grid-cols-2">
                            {
                                features.map((item, idx) => (
                                    <li key={idx} className="flex gap-x-4">
                                        <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400 rounded-lg flex items-center justify-center">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg text-gray-100 font-semibold">
                                                {item.title}
                                            </h4>
                                            <p className="mt-3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                
            </section>
        )
    }

    export default Course;