import React from "react";
import ListItem from "./ListItem";

class List extends React.Component {
	render() {
		return (
			<div>
				<ul className="list">
					{this.state.items.map((item) => (
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
}

export default List;
