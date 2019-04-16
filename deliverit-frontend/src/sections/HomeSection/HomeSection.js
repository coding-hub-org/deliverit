import React from "react";

import "./HomeSection.css";
import CardPlace from "../../components/CardPlace/CardPlace";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

class HomeSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			store: []
		};
	}

 
  componentDidMount = () => {
    fetch("http://127.0.0.1:3000/images")
      .then(response => response.json())
      .then(data => {
        this.setState({ store: data });
      });
  };
 
	render() {
		const cardPlaceList = this.state.store.map(test => {
			return (
				<Link to={"/details/123"}>
					<CardPlace place={test} />
				</Link>
			);
		});

		return (
			<div className={"home-section"}>
				<div className={"home-section--wrapper"}>{cardPlaceList}</div>
				<Footer />
			</div>
		);
	}
}

export default HomeSection;
