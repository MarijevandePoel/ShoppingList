import React from "react";

function ListItem({ item, clickItem }) {
	return (
		<li
			key={item.id}
			className="listItem"
			onClick={clickItem}
			value={item.title}
		>
			{item.title}
		</li>
	);
}

export default ListItem;
