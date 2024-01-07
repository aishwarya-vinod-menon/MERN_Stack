// Part 1: User Array Data Manipulation
// User Array with 15 objects containg the name, age, gender, location
let users = [
    {
        name: 'Alice',
        age: 28,
        gender: 'female',
        location: 'New York'
    },
    {
        name: 'Bob',
        age: 32,
        gender: 'male',
        location: 'London'
    },
    {
        name: 'Charlie',
        age: 25,
        gender: 'male',
        location: 'Paris'
    },
    {
        name: 'David',
        age: 30,
        gender: 'male',
        location: 'Los Angeles'
    },
    {
        name: 'Emma',
        age: 27,
        gender: 'female',
        location: 'Sydney'
    },
    {
        name: 'Frank',
        age: 16,
        gender: 'male',
        location: 'Berlin'
    },
    {
        name: 'Grace',
        age: 29,
        gender: 'female',
        location: 'Toronto'
    },
    {
        name: 'Henry',
        age: 24,
        gender: 'male',
        location: 'Tokyo'
    },
    {
        name: 'Isabel',
        age: 31,
        gender: 'female',
        location: 'Amsterdam'
    },
    {
        name: 'Jack',
        age: 26,
        gender: 'male',
        location: 'Rome'
    },
    {
        name: 'Kate',
        age: 12,
        gender: 'female',
        location: 'Seoul'
    },
    {
        name: 'Leo',
        age: 23,
        gender: 'male',
        location: 'Madrid'
    },
    {
        name: 'Mia',
        age: 28,
        gender: 'female',
        location: 'Mumbai'
    },
    {
        name: 'Nathan',
        age: 34,
        gender: 'male',
        location: 'Moscow'
    },
    {
        name: 'Olivia',
        age: 29,
        gender: 'female',
        location: 'Rio de Janeiro'
    }
];

// Creating a isAdult Function
function isAdult(age) {
    if (age >= 18){
        return "true";
    }
    else{
        return "false";
    }
}

// Creating a new Array "adults"
let adultUsers = users.filter((user)=>{
    return isAdult(user.age) == "true"
})

console.log(adultUsers)

// Fuction to get the full name
function getFullName(name, loc){
    return name+" "+loc
}

//Using map fuction to return the full names of all the users
let userNames= users.map((user)=>{
    return getFullName(user.name, user.location)
})

console.log(userNames)

// Part 2: chaining User Data Operations
// Filtering users based on gender

function filterBygender(user, gender){
    return user === gender
}


// Chaining to manipulate uders array
//a. create new array that has only female users
//b.get full name of all the females
let femaleUsers= users.filter((user)=>{
    return filterBygender(user.gender,"female")
}).map((user)=>{
    return getFullName(user.name,user.location)
})

console.log(femaleUsers)

// Part 3: Movie Data Array Manipulation
let movies = [
    {
        title: 'The Shawshank Redemption',
        genre: 'Drama',
        year: 1994,
        rating: 9.3
    },
    {
        title: 'The Godfather',
        genre: 'Crime',
        year: 1972,
        rating: 9.2
    },
    {
        title: 'The Dark Knight',
        genre: 'Action',
        year: 2008,
        rating: 9.0
    },
    {
        title: 'Pulp Fiction',
        genre: 'Crime',
        year: 1994,
        rating: 8.9
    },
    {
        title: 'Schindler\'s List',
        genre: 'History',
        year: 1993,
        rating: 8.9
    },
    {
        title: 'The Lord of the Rings: The Return of the King',
        genre: 'Fantasy',
        year: 2003,
        rating: 8.9
    },
    {
        title: 'Forrest Gump',
        genre: 'Romance',
        year: 1994,
        rating: 8.8
    },
    {
        title: 'Inception',
        genre: 'Adventure', 
        year: 2010,
        rating: 8.8,
    },
    {
        title: 'Fight Club',
        genre: 'Drama',
        year: 1999,
        rating: 8.8
    },
    {
        title: 'The Matrix',
        genre: 'Action',
        year: 1999,
        rating: 8.7
    }
];

//Part 4: Chaining Movie Data Operations
function filterByGenre(movie, genre){
    return movie===genre
};

let actionMovies = movies.filter((movie)=>{
    return filterByGenre(movie.genre, "Action")
})

let movieTitles= actionMovies.map((movie)=>{
    return movie.title
})

console.log(actionMovies)
console.log(movieTitles)

//Part5: Integration and Output
// creating an array combined Result that has the adult Users, female users, movie titles and usernames

let combinedResult=[adultUsers, userNames, femaleUsers, movieTitles]
console.log(combinedResult)

