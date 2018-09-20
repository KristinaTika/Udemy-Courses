import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../action-creators/actionCreators';
import CharacterItem from '../components/CharacterItem';
import './CharacterList.css';

class CharacterList extends Component {
    constructor(props) {
        super(props);

        this.renderCharacters = this.renderCharacters.bind(this);
    }

    componentDidMount() {
        this.props.fetchCharacters();
    }

    renderCharacters () {
        const { characters } = this.props;
        return characters.map(val => {
            return <CharacterItem key={val.id} character={val} />
        });
    }

    render() {
        return(
            <ul className="list-characters">
                {this.renderCharacters()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters
    };
}

export default connect(mapStateToProps, { fetchCharacters }) (CharacterList);