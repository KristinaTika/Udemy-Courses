import React, { Component } from 'react';
import { seriesService } from '../../../services/seriesService';
import './SeriesPage.css';
import SerieItem from '../../components/series/SerieItem';

class SeriesPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            series: null,
            searchValue: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let { searchValue } = this.state;
        seriesService.fetchSeries(searchValue)
            .then((res) => {
                this.setState({
                    series: res
                });
            });
    }

    render() {
        let displaySeries = <div>You haven't searched for anything yet.</div>
        const { series } = this.state;
        return (
            <div id="series-container">
                <p>Welcome to Marvel App. Start exploring Marvel universe by searching comics. </p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="searchValue" placeholder="Search Series" onChange={this.handleChange} />
                    <button onClick={this.handleClick}>Search</button>
                </form>
                <ul id="series-list">
                    {!series ? displaySeries : series.length === 0 ? <div>No results </div> : series.map(c => (<SerieItem key={c.id} serie={c} />))}
                </ul>
            </div>
        );
    }
}

export default SeriesPage;