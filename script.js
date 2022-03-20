// let numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
// for (let i = 0;
//     (numberOfFilms == null || numberOfFilms.length == 0); i++) {
//     numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
// }

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
    while (numberOfFilms == null || numberOfFilms.length == 0 || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
    }
}

start();


// let numberOfFilms;
// do {
//     numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
//     console.log(typeof (numberOfFilms));
//     console.log(numberOfFilms);
// }
// while (numberOfFilms == null || numberOfFilms.length == 0);


let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMoviesDB.count <= 10) {
    alert('Переглянуто дость мало фільмів!!!');
} else if (10 < personalMoviesDB.count <= 30) {
    alert('Ви класичний глядач фільмів!!!');
} else if (personalMoviesDB > 30) {
    alert('Оооо Ви кіноман!!!');
} else {
    alert('Error!!!');
}

// for (let i = 0; i < 2; i++) {
//     const lastFilm = prompt('Останній переглянутий фільм?', ''),
//         markFilm = prompt('Яка ваша оцінка фільму?', '');

//     if (lastFilm != null && lastFilm != '' && lastFilm.length < 50 && markFilm != null && markFilm != '' && markFilm.length < 50) {
//         personalMoviesDB.movies[lastFilm] = markFilm;
//         console.log('Done!');
//     } else {
//         console.log('Error!');
//         i--;
//     }
// }
for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('Останній переглянутий фільм?', ''),
        markFilm = prompt('Яка ваша оцінка фільму?', '');
    while (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || markFilm == null || markFilm == '' || markFilm.length > 50) {
        lastFilm = prompt('Останній переглянутий фільм?', '');
        markFilm = prompt('Яка ваша оцінка фільму?', '');
    }
    personalMoviesDB.movies[lastFilm] = markFilm;
}
console.log(personalMoviesDB);