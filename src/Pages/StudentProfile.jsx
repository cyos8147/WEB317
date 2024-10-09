import { ScrollRestoration } from 'react-router-dom';
import StudentProfile from '../components/StudentProfile';


//components
import Nav from '../components/nav';
import Footer from '../components/footer';

const StudentProfilePage = () => {

  return (
    <>
      <Nav/>
      <StudentProfile />
      <Footer/>
      <ScrollRestoration/>
    </>
  );
};

export default StudentProfilePage;
