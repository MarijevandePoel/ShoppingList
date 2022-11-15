import React from "react";
import List from "./List";

function ShoppingList(items, OnItemClick) {
	// waarde van de input geven aan de listitem title aanmaken van een nieuw id
	// onsubmit toevoegen voor nieuw item
	//
	return (
		<div>
			<h1>Shopping list</h1>
			<form>
				<input></input>
				<button> add</button>
			</form>

			<List items={items} OnItemClick={OnItemClick} />
		</div>
	);
}

export default ShoppingList;
