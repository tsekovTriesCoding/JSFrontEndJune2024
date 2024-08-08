function solve(input) {
    let movies = [];
    for (const line of input) {
        if (line.includes("addMovie")) {
            const name = line.split("addMovie ")[1];

            const movie = {
                name: name,
            }

            movies.push(movie);
        } else if (line.includes("directedBy")) {
            const [movieName, director] = line.split(" directedBy ");
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.director = director;
            }
        } else if (line.includes("onDate")) {
            const [movieName, date] = line.split(" onDate ");
            const movie = movies.find(movie => movie.name === movieName);

            if (movie) {
                movie.date = date;
            }
        }
    }

    movies.filter(movie => movie.director && movie.date)
        .forEach(movie => console.log(JSON.stringify(movie)));
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]);

solve([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);