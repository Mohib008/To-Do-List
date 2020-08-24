import React from "react";
import "./listItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props) {
        const items = props.items;
        const listItems = items && items.map(item => {
            return <div className="list" key="item.key">
                <p>{item.text}</p>
                <span>
                    <FontAwesomeIcon className="faicons" icon="trash" />
                </span>
            </div>
        })
        return(
            <div>{listItems}</div>
    )
}

export default ListItems;

