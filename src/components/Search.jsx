import React, {useState} from 'react';
import { SearchFilter } from "./SearchFilter";

function Search (props) {

    const {searchMovies} = props;
    const [search, setSearch] = useState('naruto');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search,'');
        }
    }

    const handleClick = () => {
        searchMovies(search,'');
    }

        return <div className="row">
            <div className="col s12">
                <div className="input-field">
                    <input
                        id="search"
                        type="search"
                        className="validate"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => { setSearch(e.target.value)}}
                        onKeyDown={handleKey}
                    />
                    <button className="btn search-btn" onClick={handleClick} >Search
                    </button>
                </div>
                <SearchFilter searchMovies={searchMovies} search={search} />
            </div>
        </div>
}
export { Search }