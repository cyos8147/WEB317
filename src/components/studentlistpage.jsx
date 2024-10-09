import StudentCard from "./StudentCard";

const StudentListPage = () => {
    return (
        <>
            <body className="bg-gray-700 h-full-screen py-20">
                <div className="container mx-auto py-10">
                    <div className="text-center mb-6 md:text-start">
                        <h1 className="text-3xl font-bold text-white">Class of 2023</h1>
                        <p className="text-white mt-2">Explore the students of the class of 2023.</p>
                    </div>

                    <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center mb-6">
                        <input
                            type="text"
                            placeholder="Search students..."
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-1/3"
                        />
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Sort by Name</button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Sort by GPA</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Loop through the student data to generate cards */}
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.8" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        <StudentCard name="ชนะศึก" major="Computer Science" gpa="3.9" />
                        {/* Add more student cards as needed */}
                    </div>

                    <div className="mt-10 text-center">
                        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                            Load More
                        </button>
                    </div>
                </div>
            </body>
        </>
    );
};

export default StudentListPage;
