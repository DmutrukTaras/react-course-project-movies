import React, {useState, useEffect} from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {

    const [movies, setMovies]=useState([]);
    const [loading, setLoading]=useState(true);

    const searchMovies = (text, filter) => {
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}&type=${filter}`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            }).catch((err)=>{
                console.log(err);
                setLoading(false);
            });
    }

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=naruto`)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false)
            })
            .catch((err)=>{
                console.log(err);
                setLoading(false)
            });
    },[])

        return (
            <main className="container content">
                <Search searchMovies={searchMovies} />
                {!loading ? (
                    <Movies movies={movies} />
                ) : (
                    <Preloader />
                )}
            </main>
        );
}

export { Main };