import React from 'react';
import Footer from '../../Footer/Footer/Footer';
import Contact from '../Contact/Contact';
import Profession from '../Profession/Profession';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Services></Services>
            <Profession></Profession>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;