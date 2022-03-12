import React from "react";

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        };

    }

    handleRadioChange = (e) => {
        this.setState({ filter: e.target.value }, () => {
            this.props.searchMovies(this.props.search, this.state.filter);
        });
    }

    render() {
        return <div className="filter">
            <p>
                <label>
                    <input className="with-gap" name="filter" checked={this.state.filter === '' ? 'checked' : ''} type="radio" value={''} onChange={this.handleRadioChange} />
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="filter" type="radio" value={'movie'} onChange={this.handleRadioChange} />
                    <span>Movie only</span>
                </label>
                <label>
                    <input className="with-gap" name="filter" type="radio" value={'series'} onChange={this.handleRadioChange} />
                    <span>Series only</span>
                </label>
                <label>
                    <input className="with-gap" name="filter" type="radio" value={'episode'} onChange={this.handleRadioChange} />
                    <span>Episode only</span>
                </label>
            </p>


        </div>
    }
}
export { SearchFilter }