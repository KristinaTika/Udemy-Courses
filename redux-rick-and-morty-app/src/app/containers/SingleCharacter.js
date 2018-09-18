import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleCharacter } from '../action-creators/actionCreators';

class SingleCharacter extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        return this.props.fetchSingleCharacter(id);
    }

    render() {
        const { singleCharacter } = this.props;
        let renderSingleCharacter = <div>Loading Character</div>
        if(!singleCharacter) {
            return renderSingleCharacter;
        }
        
        renderSingleCharacter = (
            <div>
                <h2><b>Character name:</b> {singleCharacter.name}</h2>
                <div>
                    <img src={singleCharacter.image} alt={singleCharacter.name} />
                </div>
                <p><b>Gender:</b> {singleCharacter.gender}</p>
                <p><b>Origin:</b> {singleCharacter.origin.name}</p>
                <p><b>Species:</b>{singleCharacter.species}</p>
                <p><b>Status:</b> {singleCharacter.status}</p>
                <p><b>Planet:</b> {singleCharacter.location.name}</p>
            </div>);
    
        return (
            <div>
                {renderSingleCharacter}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        singleCharacter: state.singleCharacter
    }
}

export default connect(mapStateToProps,{ fetchSingleCharacter })(SingleCharacter);