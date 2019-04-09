import React from "react";

import "./HomeSection.css";
import CardPlace from "../../components/CardPlace/CardPlace";
import Footer from "../../components/Footer/Footer";

class HomeSection extends React.Component {
	// Pull data from Database here
	componentDidMount() {}

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

		const cardPlaceList = testArr.map((test, idx) => {
			return <CardPlace place={test} url={"123"} key={idx} />;
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
