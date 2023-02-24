Hangman

Hangman is a game which runs on Javascript.

Hangman is a word guessing game. This started out as a paper-and-pencil game that can involve two or more players. One player will think of a word, phrase or sentence and the other player(s) will try to guess the word within a certain number of guesses. Each incorrect guess will cause an element of hangman being drawn. If the players guess the word before the drawing is complete they win, otherwise they lose to the player who set the word.

In this game the user plays against the computer which will generate a random word to be guessed. Instructions are provided in the game to teach the user how to play.

[Link to Hangman game](https://8000-amardange-gamequiz-opc08xwcdni.ws-eu87.gitpod.io/)

* [How to play](#How-to-play)
* [User Experience (UX)](#User-Experience-(UX))
  * [Initial Discussion](#Initial-Discussion)
  * [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Graphics](#Graphics)
  * [Flowchart](#Flowchart)
  
* [Features](#Features)
  * [Future features](#Future-features)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Testing](#Testing)
  * [Solved Bugs](#Solved-Bugs)
  * [Known Bugs](#Known-Bugs)
  * [PEP8](#PEP8)
  * [Manual Testing](#Manual-Testing)

* [Deployment](#Deployment)
  * [Local Deployment](#Local-Deployment)
  * [Remote Deployment](#Remote-Deployment)
  * [Deploy project to Heroku](#Deploy-project-to-Heroku)
  
* [Credits](#Credits)
  * [Code](#Code)
  * [Content](#Content)
  * [Acknowledgements](#Acknowledgements)

- - -

## How to play

The object of the game is to figure out the unknown word by guessing letters. 

The length of the word is explicitly stated and is marked by underscores for each letter to be guessed. 
If the letter guessed by the user is in the unknown word it will display by replacing the underscores wherever the letter occurs.

If the guessed letter is not in the unknown word the user will lose a try. This will correspond to a person on the gallow being drawn, one part for each incorrect letter guessed. 
i.e. in the order: head, body, left arm, right arm, left leg, right leg.

As such the user will have to guess the word before the drawing is complete and they are hanged.
If the user successfully guesses the word before they run out of tries they win the game.

To assist the user, a hint is provided that words to be guessed in this game are animals.

- - -

## User Experience (UX)

### Initial Discussion
In this hangman game the user plays against the computer to guess the word and win the game before they run out of tries and are hanged. 

The target audience is anyone interested in playing a game of hangman. This could be a familiar childhood game for some but there are instructions provided for those who are new to the game.

#### Key information:
* Win or lose the user is given an option to play again

### User Stories

#### Client Goals
* To entertain users
* To be able to learn how to play
* To make it easy for users to interact with the game
* To be clearly informed of invalid input and how to proceed
* Win or lose, to play the game to completion without issue
* To be able to choose to play again or quit

#### First Time Visitor Goals
* I want to be able to learn how to play.
* I want to be informed on what the issue is if an invalid input is made.
* I want to be given instant feedback if a correct or incorrect guess is made.
* I want to be able to guess the full word if I think I know what it is.
* I want to be informed when the game is over, if I've won or lost.
* I want to be able to play again or quit.

#### Returning Visitor Goals
* I want to be able to play the game multiple times with a new word.

- - -
