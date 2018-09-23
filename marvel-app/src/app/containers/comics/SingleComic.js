import React, { Component } from 'react';
import { comicsService } from '../../../services/comicsService';
import './SingleComic.css';

class SingleComic extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comic: [],
        }

        this.renderInfo = this.renderInfo.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        comicsService.fetchSingleComic(id)
            .then(res => (this.setState({comic: res})))
            .catch(err => console.log("Something went wrong!", err));
    }

    renderInfo(titles) {
        return titles.map((t, i) => (<li key={i}>{t} </li>)); 
    }

    render() {
     
        const comic = this.state.comic[0];
        console.log(comic);
        return (
            <div >
                { !comic ? <div> loading </div> : <h3> {comic.title} </h3> }   
                {!comic
                    ?
                        <div> loading </div>
                    :
                    <div id="div-div">
                        <div id="single-comic-container">
                            <div>
                                <img src={comic.image} alt={comic.title} />
                            </div>
                            <div> 
                                <h4> Format </h4>
                                <p> {comic.format} </p>
                                <h4> Isbn </h4>
                                <p> {comic.isbn === "" ? "No isbn available" : comic.isbn} </p>
                                <h4> Issue Number </h4>
                                <p> {comic.issueNumber} </p>
                                <h4> Pages </h4>
                                <p> {comic.pages} </p>
                                <h4> Price </h4>
                                <p> {comic.price[0]} </p>
                            </div>
                        </div>
                        <div>
                            <h4> Description </h4>
                            <p> {comic.description} </p>
                            <h4> Creators: </h4>
                            <ul>
                                {this.renderInfo(comic.creators)}
                            </ul>
                            <h4> Series: </h4>
                            <ul>
                                {comic.series}
                            </ul>
                            <h4> Stories: </h4>
                            <ul>
                                {this.renderInfo(comic.stories)}
                            </ul>
                            <h4> Characters: </h4>
                            <ul>
                                {this.renderInfo(comic.characters)}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default SingleComic;

