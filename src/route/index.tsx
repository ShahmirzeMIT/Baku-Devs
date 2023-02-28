import About from 'pages/About';
import Contact from 'pages/Contact';
import Courses from 'pages/Courses';
import { Routes, Route } from 'react-router'
import Home from 'pages/Home';
import {SignIn} from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Sifre1 from 'pages/Şifre1';
const Routing = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/sifre1' element={<Sifre1 />} />
        </Routes>
    )
}

export default Routing;
