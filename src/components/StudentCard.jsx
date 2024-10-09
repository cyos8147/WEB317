import { Link } from 'react-router-dom';

const StudentCard = ({ name, major, gpa, studentId }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-600">Major: {major}</p>
    <p className="text-gray-600">GPA: {gpa}</p>
    <Link to={`/StudentProfile`}>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        View Profile
      </button>
    </Link>
  </div>
);

export default StudentCard;