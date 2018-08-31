import React, {Component} from "react";

class HobbyList extends Component {
    render() {

        const hobbies = ["Sleeping", "Eating", "Cuddling"];
        const liStyle = {fontSize: "25px"};

        return (
            <ul>
                {hobbies.map( (h, i) => {
                    return <li style={liStyle} key={i}> {h} </li>
                })}
            </ul>
        );
    }
}

export default HobbyList;