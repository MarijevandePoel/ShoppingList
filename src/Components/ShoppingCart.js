import React from "react";
import List from "./List";

function ShoppingCart(items, OnItemClick) {
	// classname van het listItem veranderen
	return (
		<div>
			<h1>Shopping cart</h1>
			<button> empty shopping cart</button>
			<List items={items} OnItemClick={OnItemClick} />
		</div>
	);
}

export default ShoppingCart;
