
//Conponents
import StudentListPage from "../components/studentlistpage"
import Nav from "../components/nav"
import { ScrollRestoration } from 'react-router-dom';
import Footer from "../components/footer";

function StudentList() {

    return (
        <>
            <Nav />
            <StudentListPage />
            <Footer/>
            <ScrollRestoration/>

        </>
    )
}

export default StudentList
