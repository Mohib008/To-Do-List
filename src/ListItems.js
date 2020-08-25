import React from "react";
import "./listItems.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from "react-flip-move";

function ListItems(props) {
        const items = props.items;
        const listItems = items && items.map(item => {
            return <div className="list" key={item.key}>
                <p>
                <input type="text" 
                id={item.text}
                value = {item.text}
                onChange ={
                    (e) => {
                        props.setUpdate(e.target.value, item.key)
                    }
                }
                />
                <span>
                    <FontAwesomeIcon className="faicons" 
                    icon="trash"
                    onClick={ () => props.deleteItem(item.key)
                    }/>
                </span>
                </p>
            </div>
        })
        return(
            <FlipMove duration={500} easing="ease-in-out">
            <div>{listItems}</div>
            </FlipMove>

    )
}

export default ListItems;

