import React from "react";
import { SearchFilter } from "./SearchFilter";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'naruto',
        };

    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search,'');
        }
    }
    handleClick = () => {
        this.props.searchMovies(this.state.search,'');
    }

    render() {
        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={(e) => { this.setState({ search: e.target.value }) }}
                        onKeyDown={this.handleKey}
                    />
                    <button className="btn search-btn" onClick={this.handleClick} >Search
                    </button>
                </div>
                <SearchFilter searchMovies={this.props.searchMovies} search={this.state.search} />
            </div>
        </div>
    }
}
export { Search }