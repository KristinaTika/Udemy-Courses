import React, { Component, Fragment } from 'react';
import { charactersService } from '../../services/characters';

class CharacterItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            character: {},
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        charactersService.fetchSingleCharacter(id)
            .then((res) => {
                this.setState({
                    character: res,
                });
            });
    }

    render() {
        let renderCharacter = <div>Loading character...</div>
        const { character } = this.state;
        const { name, image, gender, origin, species, status, location } = this.state.character;
        if (!character) {
            return renderCharacter;
        }
        renderCharacter = <div>
            <p>Character name: {name}</p>
            <div>
                <img src={image} alt={name} />
            </div>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
            <p>Species: {species}</p>
            <p>Status: {status}</p>
            <p>Planet: {location}</p>
        </div>

        return (
            <Fragment>
                {renderCharacter}
            </Fragment>
        );
    }
};

export default CharacterItem;