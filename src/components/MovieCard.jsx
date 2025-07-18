import React from 'react';

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language } }) => {
    return (
        <>
            <div className="movie-card">
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'} alt={title} />

                <div className="mt-4">
                    <h3>{title}</h3>
                </div>

                <div className="content">
                    <div className="rating">
                        <svg className="w-4 h-4 text-gray-800 dark:text-white fill-amber-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                        </svg>

                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span>•</span>
                    <p className="lang">{original_language}</p>
                    <span>•</span>
                    <p className="year">{release_date ? release_date.split('-')[0] : "N/A"}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard