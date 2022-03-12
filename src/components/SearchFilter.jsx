import React, { useState } from 'react';

function SearchFilter(props) {


    const { searchMovies, search } = props;
    const [filter, setFilter] = useState('naruto');

    const handleRadioChange = (e) => {
        setFilter(e.target.value);
        searchMovies(search, e.target.value);
    }


    return <div className="filter">
        <p>
            <label>
                <input className="with-gap" name="filter" checked={filter === '' ? 'checked' : ''} type="radio" value={''} onChange={handleRadioChange} />
                <span>All</span>
            </label>
            <label>
                <input className="with-gap" name="filter" type="radio" value={'movie'} onChange={handleRadioChange} />
                <span>Movie only</span>
            </label>
            <label>
                <input className="with-gap" name="filter" type="radio" value={'series'} onChange={handleRadioChange} />
                <span>Series only</span>
            </label>
            <label>
                <input className="with-gap" name="filter" type="radio" value={'episode'} onChange={handleRadioChange} />
                <span>Episode only</span>
            </label>
        </p>


    </div>
}


export { SearchFilter }