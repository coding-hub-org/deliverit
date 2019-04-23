import React from "react";
import "./DetailsSection.css";
import Footer from "../../components/Footer/Footer";
import DetailCard from "../../components/DetailCard/DetailCard";

class DetailsSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			appetizers: [
				{
					dish: "Spring Roll (3 rolls)",
					price: 3.5,
					description:
						"Deep fried vegetarian roll served with sweet and sour sauce"
				},
				{
					dish: "Crab Rangoon (5 pieces)",
					price: 4.25,
					description:
						"Deep fried wonton filled with cream cheese, onion, red bell pepper and crab meat served with sweet and sour sauce."
				},
				{
					dish: "Avocado Rangoon (6 rolls)",
					price: 4.25,
					description:
						" Deep fried wonton skin filfed with avocado and cream cheese mixture. Served with sweet and sour sauce."
				},
				{
					dish: "Golden Bag (6 pieces)",
					price: 3.95,
					description:
						"Deep fried rice paper skins stuffed with a ground chicken mixture. Served with sweet and sour sauce."
				}
			]
		};
	}

	render() {
		return (
			<div className="details-section">
				<h1>TEXAS</h1>
				<div className="details-section--wrapper">
					<h1>APPETIZERS</h1>
					{this.state.appetizers.map((appetizer, idx) => (
						<DetailCard key={idx} menu={appetizer} />
					))}
				</div>
				<Footer />
			</div>
		);
	}
}

export default DetailsSection;
