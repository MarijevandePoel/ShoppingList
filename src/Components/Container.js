import React from "react";
import ShoppingList from "./ShoppingList";
import ShoppingCart from "./ShoppingCart";

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			items: [
				{ id: 1, title: "Appels" },
				{ id: 2, title: "Bread" },
				{ id: 3, title: "garlic" },
				{ id: 4, title: "Cheese" },
			],
		};
		this.OnItemClick = this.OnItemClick.bind(this);
	}
	OnItemClick(item) {
		console.log(`Clicked ${item.id}: ${item.title}`);
	}

	render(items, OnItemClick) {
		return (
			<div className="container">
				<header>
					<h1>Grocery List</h1>
				</header>
				<main>
					<ShoppingList items={this.state.items} OnItemClick={OnItemClick} />
					<ShoppingCart items={this.state.items} OnItemClick={OnItemClick} />
				</main>
			</div>
		);
	}
}

export default Container;
