import React from 'react';
import './CardPlace.css';
import { withRouter } from 'react-router-dom'
// Import images
import testImage from '../../assets/food-sample-img.png';
import starImage from '../../assets/star-img.png';


class CardPlace extends React.Component {
    handleSubmit = (e) => {
        // console.log("HEY");
        this.props.history.push(`/place/${this.props.url}`);        
    }

    render() {
        return (
            <div className={'card-place-component'} onClick={this.handleSubmit}>
                <section className={'card-place-component--image'}>
                    <img src={testImage} alt=""/>
                </section>
                <section className={'card-place-component--content'}>
                    <div className={'card-place-component--content__big'}>
                        <p>{this.props.place}</p>
                        <div>
                            <p>4.2</p>
                            <img src={starImage} alt=""/>
                        </div>
                    </div>
                <div className={'card-place-component--content__small'}>
                    <p>3.2 miles</p>
                    <p>Delivery $ 2.50</p>
                </div>
                </section>
            </div>
        )
    }
}
 
export default withRouter(CardPlace);