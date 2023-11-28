// Required modules
const fs = require('fs');
const process = require('process');
const request = require('request');

const apiUrl = 'https://icanhazdadjoke.com/search';

// Function to make API request
function getJokes(searchTerm, callback) {
    const options = {
        url: `${apiUrl}?term=${encodeURIComponent(searchTerm)}`,
        headers: {
            'Accept': 'application/json',
        },
    };

    request(options, (error, response, body) => {
        // If no error and OK success status
        if (!error && response.statusCode === 200) {
            const data = JSON.parse(body);
            callback(null, data.results);
        } else {
            callback(error || 'Failed to fetch jokes from the API');
        }
    });
}

// Function to select and display a random joke
function displayRandomJoke(jokes) {
    if (jokes && jokes.length > 0) {
        // Select a random joke from the jokes array
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const selectedJoke = jokes[randomIndex].joke;
        console.log('Here is a joke for you:');
        console.log(selectedJoke);

        // Save the selected joke to jokes.txt
        fs.appendFile('jokes.txt', selectedJoke + '\n', (error) => {
            if (error) {
                throw error;
            }

            console.log('Joke saved to jokes.txt for future laughs!');
        });
    } else {
        console.log("Looks like the joke gods are taking a day off. No jokes found!");
    }
}

// Function to display the most popular joke from jokes.txt
function displayLeaderboard() {
    fs.readFile('jokes.txt', 'utf8', (error, data) => {
        if (error) {
            if (error.code === "ENOENT") {
                console.log('No jokes found in the leaderboard. Time to start collecting some laughs!');
                return
            }
            console.error(error);
            return;
        }

        const jokes = data.split('\n').filter((line) => line.trim() !== '');
        if (jokes.length > 0) {
            const mostPopularJoke = findMostPopularJoke(jokes);
            console.log('And the most popular joke is:');
            console.log(mostPopularJoke);

            console.log("Congratulations! This joke is so popular that even the joke gods are impressed.");
        } else {
            console.log('No jokes found in the leaderboard. Time to start collecting some laughs!');
        }
    });
}

// Function to find the most popular joke
function findMostPopularJoke(jokes) {
    const jokeCountMap = new Map();

    jokes.forEach((joke) => {
        const count = jokeCountMap.get(joke) || 0;
        jokeCountMap.set(joke, count + 1);
    });

    // Sort to obtain the entry with the higher count
    const sortedJokes = Array.from(jokeCountMap.entries()).sort((a, b) => b[1] - a[1]);
    return sortedJokes.length > 0 ? sortedJokes[0][0] : '';
}

// Main script
const searchTerm = process.argv[2];
console.log("Welcome to Jestful Jokinator")

if (!searchTerm) {
    console.log('Please provide a search term for jokes or use "leaderboard" to view the most popular joke.');
} else if (searchTerm.toLowerCase() === 'leaderboard') {
    displayLeaderboard();
} else {
    getJokes(searchTerm, (error, jokes) => {
        if (error) {
            console.error(error);
        } else {
            displayRandomJoke(jokes);
        }
    });
}
