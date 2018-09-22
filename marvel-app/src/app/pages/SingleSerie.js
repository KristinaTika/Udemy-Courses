import React, { Component } from 'react';
import { seriesService } from '../../services/seriesService';
import './SingleSerie.css';

class SingleSerie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            serie: [],
        }

        this.renderInfo = this.renderInfo.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        seriesService.fetchSingleSerie(id)
            .then(res => (this.setState({serie: res})))
            .catch(err => console.log("Something went wrong!", err));
    }

    renderInfo(titles) {
        return titles.map((t, i) => (<li key={i}>{t} </li>)); 
    }

    render() {
        const serie = this.state.serie[0];
        return (
            <div >
                { !serie ? <div> loading </div> : <h3> {serie.title} </h3> }   
                {!serie
                    ?
                        <div> loading </div>
                    : 
                        <div id="single-serie-container">
                            <div>
                                <img src={serie.image} alt={serie.title} />
                            </div>
                            <div>
                                <h4>Start Year </h4>
                                <p> {serie.startYear} </p>
                                <h4>End Year </h4>
                                <p> {serie.endYear} </p>
                                <h4> Description </h4>
                                <p> {serie.description === null ? "No description available" : serie.description } </p>
                                <h4> Creators: </h4>
                                <ul>
                                    {this.renderInfo(serie.creators)}
                                </ul>
                                <h4> Characters </h4>
                                <ul>
                                    {this.renderInfo(serie.characters)}
                                </ul>
                                <h4>Type:</h4>
                                <p> {serie.type === "" ? "No type available" : serie.type } </p>
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default SingleSerie;

