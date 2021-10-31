import React from 'react';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import Services from '../Services/Services';
import Growth from '../Growth/Growth';
import useAuth from '../../../hooks/useAuth';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <Growth></Growth>  
        </div>
    );
};

export default Home;