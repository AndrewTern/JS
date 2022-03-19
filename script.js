const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
console.log(typeof (numberOfFilms));

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
// console.log(personalMoviesDB.privat);

const lastFilm1 = prompt('Останній переглянутий фільм?', ''),
    markFilm1 = prompt('Яка ваша оцінка фільму?', ''),
    lastFilm2 = prompt('Останній переглянутий фільм?', ''),
    markFilm2 = prompt('Яка ваша оцінка фільму?', '');

personalMoviesDB.movies[lastFilm1] = markFilm1;
personalMoviesDB.movies[lastFilm2] = markFilm2;


console.log(personalMoviesDB);