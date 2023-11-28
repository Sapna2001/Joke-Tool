# Joke-Tool
Introducing "Jestful Jokinator" – Your Go-To Joke Command Line Tool!

The "Jestful Jokinator" is a Node.js command line tool designed to bring laughter to your terminal. With a dash of humor and a sprinkle of creativity, this tool interacts with the ["icanhazdadjoke"](https://icanhazdadjoke.com/api) API to provide you with jokes based on your chosen search term.

## Features
#### Joke Fetching
Use the tool by providing a search term, and the Jokinator will fetch jokes from the "icanhazdadjoke" API for your amusement.

#### Random Joke Selection
The Jokinator will randomly select a joke from the API results, ensuring a unique and unexpected punchline each time.

#### Persistence for Laughs
Your favorite jokes will be stored in a text file named "jokes.txt" for future laughs. Because good jokes are worth revisiting!

#### Witty Error Handling
In the rare event that the joke gods are taking a day off and the API fails to deliver laughs, the Jokinator will surprise you with a witty message, proving that laughter is the best medicine, even in the face of unexpected errors.

#### Leaderboard of Laughs
For those seeking an extra dose of hilarity, use the "leaderboard" command line argument. The Jokinator reveals the most popular joke from the "jokes.txt" file, accompanied by a side-splitting comment. Because every joke deserves its moment in the spotlight!

## Using the Jestful Jokinator
#### Fetch a Joke
Run the Jokinator with a search term to fetch a joke. Replace your search term with your desired term.
```
node index.js yourSearchTerm
```
#### Save for Future Laughs
Your selected joke will be displayed, and it will be saved to jokes.txt in the same directory for future enjoyment.
#### Witty Error Handling
If the API fails to find a joke for the search term, the Jokinator will surprise you with a witty message.
#### View the Leaderboard
To see the most popular joke from the leaderboard, use the "leaderboard" command line argument.
```
node index.js leaderboard
```

## Output 
In every output, the "Jestful Jokinator" aims to turn your command line interactions into a delightful experience filled with laughter and good vibes. Get ready for a journey where jokes meet jest, and every output brings a smile!

![output](https://github.com/deepshi1410/HeartOk/assets/56690856/37a76b59-af4a-496e-9140-9c8355a8e10a)

The "Jestful Jokinator" is your go-to tool for a dose of humor on the command line. Whether you're fetching jokes or exploring the leaderboard, let the Jokinator be your virtual comedy companion. Keep smiling, and happy joking!
