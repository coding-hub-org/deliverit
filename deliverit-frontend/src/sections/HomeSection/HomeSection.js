import React from 'react';

import './HomeSection.css';
import CardPlace from '../../components/CardPlace/CardPlace';
import Footer from '../../components/Footer/Footer';

class HomeSection extends React.Component {
    render() {
        const testArr = [
            "Jade Oriental",
            "Walmart",
            "Target",
            "Subway",
            "Golden Palace",
            "Chick-fil-a",
            "Texas Roadhouse"
        ];

        const cardPlaceList = testArr.map(test => {
            return (
                <CardPlace place={test}/>
            )
        }); 

        return (
            <div className={'home-section'}>
                <div className={'home-section--wrapper'}>
                    {cardPlaceList}
                </div>
                <Footer/>
            </div>
        )
    }
};

export default HomeSection;