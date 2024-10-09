import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`container mx-auto py-20 flex flex-col md:flex-row items-center md:items-start md:justify-between md:px-12 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="hidden md:inline md:w-1/3 mt-10 md:mt-0 text-center">
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="img"
                    className="w-full md:w-auto mx-auto rounded-lg"
                />
            </div>
            <div className="md:w-1/2 text-center md:text-end">
                <h1 className="text-4xl font-bold">Welcome to Our Student Directory</h1>
                <p className="mt-4 text-lg">Find and connect with your classmates.</p>
                <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
                    Explore Your Class
                </button>
            </div>
        </div>
    );
};

const AboutSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`py-12 bg-gray-800 transition-opacity duration-700 text-white  ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center">About Our Directory</h2>
            <p className="mt-4 text-center text-lg max-w-3xl mx-auto">
                Our directory helps you reconnect with your classmates and stay updated on important events. Explore by class year, and get to know your peers better.
            </p>
        </div>
    );
};

const NewsFeed = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`py-12 bg-gray-900 text-white transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div className="container mx-auto ">
                <h2 className="text-2xl font-bold text-center">Latest News</h2>
                <ul className="mt-6 space-y-4">
                    <li className="bg-gray-700 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold">สัปดาห์วิทยาศาตร์ประจำปี 2567</h3>
                        <p className="mt-2 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique.</p>
                    </li>
                    <li className="bg-gray-700 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold">พิธีไหว้ครูประจำปี 2567</h3>
                        <p className="mt-2 text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </li>
                    <li className="bg-gray-700 p-4 rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold">ปรับพื้นฐานนักศึกษาปี 2567</h3>
                        <p className="mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const ClassCard = ({ className, year, description }) => (
    <div className="relative group">
        <Link to='/StudentList'>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{className} - {year}</h3>
            </div>
            <div className="absolute inset-0 bg-white p-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>{description}</p>
            </div>
        </Link>
    </div>
);

const ClassList = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <div ref={ref} className={`p-12 bg-gray-50 transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className="text-2xl font-bold text-center mb-6 md:text-3xl md:font-extrabold">Choose Your Class</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ClassCard className="Class of 2019" year="2020" description="Achieved excellence in all endeavors." />
                <ClassCard className="Class of 2017" year="2018" description="Resilient and resourceful in every way." />
                <ClassCard className="Class of 2018" year="2019" description="Innovators with a vision for the future." />
                <ClassCard className="Class of 2019" year="2020" description="Trailblazers with a passion for change." />
                <ClassCard className="Class of 2020" year="2021" description="Creative minds shaping tomorrow." />
                <ClassCard className="Class of 2021" year="2022" description="Empowered by knowledge and growth." />
                <ClassCard className="Class of 2022" year="2023" description="Driven by ambition and purpose." />
                <ClassCard className="Class of 2023" year="2024" description="Forging new paths with determination." />
                <ClassCard className="Class of 2024" year="2025" description="Leaders of tomorrow, inspired today." />
            </div>
        </div>
    );
};

const HomePage = () => (
    <div>
        <HeroSection />
        <ClassList />
    </div>
);

export default HomePage;
