import React from "react";
import ListItem from "./ListItem";

function List() {
	return (
		<div>
			<ul className="list">
				{this.props.items.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						clickItem={() => this.OnItemClick(item)}
					/>
				))}
			</ul>
		</div>
	);
}

export default List;
