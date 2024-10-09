import React from 'react';
import { useParams } from 'react-router-dom';

const StudentProfile = () => {
  const { id } = useParams();
  // Fetch student data based on id (e.g., from an API or context)
  // For demonstration, using static data:
  const student = {
    name: 'ชนะศึก ยอดนางรอง',
    imageUrl: 'https://www.prachachat.net/wp-content/uploads/2024/09/hippo-1-728x485.jpg',
    bio: 'A passionate student majoring in Computer Science. Interested in AI and software development.',
    achievements: [
      'Dean\'s List, 2023',
      'First Place, Hackathon 2024',
      'Published Research on Machine Learning'
    ],
    contact: 'jane.doe@example.com',
    social: {
      linkedin: 'https://www.linkedin.com/uas/login-submit',
      github: 'https://github.com/'
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-20">
      <header className="flex items-center mb-8">
        <img src={student.imageUrl} alt={student.name} className="w-24 h-24 rounded-full border-2 border-gray-300" />
        <h1 className="text-2xl font-semibold ml-4 md:text-3xl md:font-bold md:ml-4">{student.name}</h1>
      </header>
      <section className="bg-gray-100 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p className="text-gray-700">{student.bio}</p>
      </section>
      <section className="bg-white p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
        <ul className="list-disc ml-5">
          {student.achievements.map((achievement, index) => (
            <li key={index} className="text-gray-700">{achievement}</li>
          ))}
        </ul>
      </section>
      <section className="bg-gray-100 p-4 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700">{student.contact}</p>
      </section>
      <section className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Social Media</h2>
        <div className="flex space-x-4">
          {student.social.linkedin && (
            <a href={student.social.linkedin} className="text-blue-600 hover:underline">LinkedIn</a>
          )}
          {student.social.github && (
            <a href={student.social.github} className="text-gray-600 hover:underline">GitHub</a>
          )}
        </div>
      </section>
    </div>
  );
};

export default StudentProfile;
