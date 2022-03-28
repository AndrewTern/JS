let personalMoviesDB = {
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    count: 0,
    start: function () {
        personalMoviesDB.count = prompt('Скільки фільмів ви переглянули?', '');
        while (personalMoviesDB.count == null || personalMoviesDB.count.length == 0 || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = prompt('Скільки фільмів ви переглянули?', '');
        }
        console.log(personalMoviesDB.count);

    },
    personalLeve: function () {
        if (personalMoviesDB.count <= 10) {
            alert('Переглянуто дость мало фільмів!!!');
        } else if (personalMoviesDB.count > 10 && personalMoviesDB.count <= 30) {
            alert('Ви класичний глядач фільмів!!!');
        } else if (personalMoviesDB.count > 30) {
            alert('Оооо Ви кіноман!!!');
        } else {
            alert('Error!!!');
        }
    },

    rememberFilms: function () {

        for (let i = 0; i < 2; i++) {
            let lastFilm = prompt('Останній переглянутий фільм?', ''),
                markFilm = prompt('Яка ваша оцінка фільму?', '');
            while (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || markFilm == null || markFilm == '' || markFilm.length > 50) {
                lastFilm = prompt('Останній переглянутий фільм?', '');
                markFilm = prompt('Яка ваша оцінка фільму?', '');
            }
            personalMoviesDB.movies[lastFilm] = markFilm;
        }
    },
    writeYourGenres: function () {
        for (let n = 1; n < 2; n++) {

            let genres = prompt('Введіть жанри через кому').toLowerCase();

            if (genres == null || genres == '') {
                console.log('ви не ввели дані');
                n--;
            } else {
                personalMoviesDB.genres = genres.split(', ');



            }
            personalMoviesDB.genres.sort();

        }
        personalMoviesDB.genres.forEach(function (item, i) {
            console.log(`Любимий жанр ${i+1} це: ${item}`);
        });

    },


    // writeYourGenres: function () {
    //     for (let n = 0; n < 3; n++) {
    //         let genresMess;
    //         while (genresMess == null || genresMess == '') {
    //             genresMess = prompt(`Ваш любимий жанр під номером ${n+1}`);
    //             personalMoviesDB.genres[n] = genresMess;
    //         }

    //     }
    //     personalMoviesDB.genres.forEach(function (item, i) {
    //         console.log(`Любимий жанр ${i+1} це: ${item}`);
    //     });

    // },

    // toggleVisibleMyBD: function () {
    //     (personalMoviesDB.privat === false) ? (personalMoviesDB.privat = true) : (personalMoviesDB.privat = false);
    //     (personalMoviesDB.privat === true) ? (personalMoviesDB.privat = false) : (personalMoviesDB.privat = true);
    // },

    toggleVisibleMyBD: function () {
        switch (personalMoviesDB.privat) {
            case false:
                personalMoviesDB.privat = true;
                break;
            case true:
                personalMoviesDB.privat = false;
                break;
        }

        // (personalMoviesDB.privat === false) ? (personalMoviesDB.privat = true) : (personalMoviesDB.privat = false);
        // (personalMoviesDB.privat === true) ? (personalMoviesDB.privat = false) : (personalMoviesDB.privat = true);
    },


};
let arr = personalMoviesDB.genres;
console.log(arr);






personalMoviesDB.start();
personalMoviesDB.personalLeve();
personalMoviesDB.rememberFilms();
personalMoviesDB.writeYourGenres();
personalMoviesDB.toggleVisibleMyBD();
// function start() {
//     numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
//     while (numberOfFilms == null || numberOfFilms.length == 0 || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
//     }
// }

// start();


// let numberOfFilms;
// do {
//     numberOfFilms = prompt('Скільки фільмів ви переглянули?', '');
//     console.log(typeof (numberOfFilms));
//     console.log(numberOfFilms);
// }
// while (numberOfFilms == null || numberOfFilms.length == 0);




// function detectPersonalLevel() {
//     if (personalMoviesDB.count <= 10) {
//         alert('Переглянуто дость мало фільмів!!!');
//     } else if (personalMoviesDB.count > 10 && personalMoviesDB.count <= 30) {
//         alert('Ви класичний глядач фільмів!!!');
//     } else if (personalMoviesDB.count > 30) {
//         alert('Оооо Ви кіноман!!!');
//     } else {
//         alert('Error!!!');
//     }
// }

// detectPersonalLevel();

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
// function rememberFilms() {

//     for (let i = 0; i < 2; i++) {
//         let lastFilm = prompt('Останній переглянутий фільм?', ''),
//             markFilm = prompt('Яка ваша оцінка фільму?', '');
//         while (lastFilm == null || lastFilm == '' || lastFilm.length > 50 || markFilm == null || markFilm == '' || markFilm.length > 50) {
//             lastFilm = prompt('Останній переглянутий фільм?', '');
//             markFilm = prompt('Яка ваша оцінка фільму?', '');
//         }
//         personalMoviesDB.movies[lastFilm] = markFilm;
//     }
// }
// rememberFilms();
// console.log(personalMoviesDB);

// function showMyDB() {
//     if (personalMoviesDB.privat == false) {
//         console.log('Function showMyDB WORK!!!');
//         console.log(personalMoviesDB);
//     }
//     //  else {
//     //     return;
//     // }
// }
// showMyDB();

// function showMyDB(hiddenPrivet) {
//     if (hiddenPrivet == false) {
//         console.log(personalMoviesDB);
//     }
// }

// showMyDB(personalMoviesDB.privat);



console.log(personalMoviesDB);