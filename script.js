let numberOfFilms;
do {
    numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
    console.log(typeof (numberOfFilms));
    console.log(numberOfFilms);
}
while (numberOfFilms == null || numberOfFilms.length == 0);


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

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Останній переглянутий фільм?', ''),
        markFilm = prompt('Яка ваша оцінка фільму?', '');

    if (lastFilm != null && lastFilm != '' && lastFilm.length < 50 && markFilm != null && markFilm != '' && markFilm.length < 50) {
        personalMoviesDB.movies[lastFilm] = markFilm;
        console.log('Done!');
    } else {
        console.log('Error!');
        i--;
    }



    // markFilm = prompt('Яка ваша оцінка фільму?', '');
    // personalMoviesDB.movies[lastFilm] = markFilm;


    // markFilm = prompt('Яка ваша оцінка фільму?', '');

}


console.log(personalMoviesDB);