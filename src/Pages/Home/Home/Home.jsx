import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUS from '../ChooseUS/ChooseUS';
import MapComponent from '../MapComponent/MapComponent';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MapComponent></MapComponent>
            <ChooseUS></ChooseUS>
        </div>
    );
};

export default Home;