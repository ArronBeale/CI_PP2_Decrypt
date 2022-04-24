# Decrypt (Work in progress)
Developer: Arron Beale

![responsive display image](https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/am-i-responsive.PNG)

[Deployed Site](https://arronbeale.github.io/CI_PP2_Decrypt/)

## Table of Content
1. [Project Goals](#project-goals)
   1. [User Goals](#user-goals)
   2. [Site owner Goals](#site-owner-goals)
2. [User Experience](#User-Experience)
   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirments-and-expectations)
   3. [User Stories](#user-stories)
3. [Design](#design)
   1. [Design Choices](#design-choices)
   2. [Color](#color)
   3. [Fonts](#fonts)
   4. [Structure](#structure)
   5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
   1. [Languages](#Languages)
   2. [Frameworks and Tools](#frameworks-and-tools)
5. [Features](#features)
6. [Testing](#validation)
   1. [HTML Validation](#HTML-validation)
   2. [CSS Validation](#CSS-validation)
   3. [Accessibility](#accessibility)
   4. [Performance](#performance)
   5. [Device Testing](#Performing-tests-on-devices)
   6. [Browser Compatability](#browser-compatability)
   7. [Testing User Stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#ackowledgements)

## Project Goals
The goal of this project is to create a challenging and fun word guessing game.

### User Goals
- To play a chance puzzle where you guess the word.
- To have a limited number of attempts determined by difficulty level.
- To be able to chhose a difficulty level.
- Replayable, fun and possibly addictive.

### Site Owner Goals
- Provide a challenging and fun game.
- Provide various levels of difficulty to the player
- Provide an option for the player to contact.
- Provide compatability for different screen sizes.

[Back to Top](<#Table-of-Content>)
## User Experience

### Target Audience
- Players with an interest in puzzle style games.
- Players who would like a challenge.
- Players who wish to pass the time.
- Players who enjoy chance games.

### User Requirments and Expectations
- Accessibility and responsiveness.
- Controls to start and stop the game.
- A score for the player.
- A rules section to view game rules.
- Intuitive gameplay.
- An option to contact.
- An option to change difficulty.

### User Stories

### Player
1. As a player, I would like to know how to play.
2. As a player, I like to choose a difficulty.
3. As a player, I would like to see my score.
4. As a player, I would like it minimal, no overload on screen.
5. As a player, I would like it to be fun.
6. As a player, I would like it to be challenging.
7. As a player, I would like replayability.
8. As a player, I would like a variety of words to guess.
9. As a player, I would like to see how many attempts I have.
 
### Site Owner
10. As the site owner, I would like the game to be challenging and fun.
11. As the site owner, I would like a simplistic design.
12. As the site owner, I would like different device size compatability.
13. As the site owner, I would like a contact form.
14. As the site owner, I would like to provide difficulty levels.

[Back to Top](<#Table-of-Content>)
## Design

### Design Choices

The design I chose was an arcade feel as it was a game, I wanted to make the player feel like they were in an arcade.
This alongside the background audio which the player can toggle on and off I hope achieves this aim.

### Color

The colors I went with were green, white and black to match with the arcade background imae specifically the green neon lights in the image.
The black header and footer were chosen as arcades are dark places around the lights of the machines and the white text for good contrast.
The green I chose was a slightly different shade from the below image, rgb(85, 212, 53).
![Color selection image](https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/nav-bar.PNG)
![Color selection image](https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/color-selection.PNG)

### Fonts

The chosen font I decided on was Montserrat and sans-serif as a backup. Montserrat I felt gave the right character to the pages as
I did not want any font that would take attention away from the actual game.

### Structure

The structure of the site is built to give the game the primary focus, upon landing on the page you are welcomed by the game.
This allows players who came to the site to play the game to start playing immediatly without the need to navigate unnecessarily.

- Home page lands the player directly to the game welcoming them and ready to play.
- Contact page has a feedback / contact form for players to leave feedback or get in touch. This is linked to the creators Gmail and all fields are required.
- 404 page is present for any navigation errors by the user that will allow them to return to the home page.

### Wireframes

My original concept was a single page that would house everything such as the contact form, rules.
It would have a countdown alongside the attempts. As the project advanced I removed the countdown as I began to feel it was unnecessary.

<details><summary>Wireframe Images</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/wireframes/wireframe-home.png">
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/wireframes/wireframe-evolved.png">
</details>

   
[Back to Top](<#Table-of-Content>)
## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks and Tools
- [Balsamiq](https://balsamiq.com/)

- [GitPod](https://gitpod.io/)

- [Git](https://git-scm.com/)

- [GitHub](https://github.com/)

- [Google Fonts](https://fonts.google.com/)

- [Font Awesome](https://fontawesome.com/)

[Back to Top](<#Table-of-Content>)

## Features

There are currently 14 features across the deployed site.

### Logo
- Fully responsive on all screen sizes
- Located on all pages
- Allows easy navigation to the home page
- User stories covered: 12, 11, 4
<details><summary>Logo</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-logo.png">
</details>

### navigation Bar
- Fully responsive on all screen sizes
- Located on all pages
- Allows easy navigation to the home and contact page
- User stories covered: 12, 11, 4
<details><summary>Navigation bar</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-navigation.PNG">
</details>

### Footer
- Fully responsive on all screen sizes
- Located on all pages
- Allows easy navigation to creators LinkedIn and GitHub pages.
- User stories covered: 12, 11, 4
<details><summary>Footer</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-footer.png">
</details>

### Welcome
- Fully responsive on all screen sizes
- Located on game page when player lands
- Welcomes player and describes the game
- User stories covered: 12, 11, 4, 1
<details><summary>Welcome</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-welcome.png">
</details>

### Rules
- Fully responsive on all screen sizes
- Located on game page when player clicks the rules button
- Tells the player the rules of the game
- User stories covered: 12, 11, 4, 1
<details><summary>Rules</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-rules.png">
</details>

### Score
- Fully responsive on all screen sizes
- Located at the top of the game screen
- Shows the player their current score
- User stories covered: 12, 11, 4, 3
<details><summary>Score</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-score.png">
</details>

### Play / Stop
- Fully responsive on all screen sizes
- Located at the mid level of the game screen
- Allows player to start and stop game
- User stories covered: 12, 11, 4, 7
<details><summary>Play / Stop</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-play-stop.png">
</details>

### Attempts
- Fully responsive on all screen sizes
- Located at the mid level of the game screen
- Shows the player their current attempts
- User stories covered: 12, 11, 4, 9
<details><summary>Attempts</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-attempts.png">
</details>

### Correct Word
- Fully responsive on all screen sizes
- Located at the top level of the game screen
- Shows the player the correct word on a win
- User stories covered: 12, 11, 4, 9, 5
<details><summary>Correct Word</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-correct-word.png">
</details>

### Difficulty
- Fully responsive on all screen sizes
- Located at the bottom left level of the game screen
- Allows the player to choose a difficulty level
- User stories covered: 12, 11, 4, 9, 5, 6, 2, 14, 10
<details><summary>Difficulty</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-difficulty.png">
</details>

### Used Letters
- Fully responsive on all screen sizes
- Located at the bottom left level of the game screen
- Allows the player to choose a difficulty level
- User stories covered: 12, 11, 4, 6, 10
<details><summary>Used Letters</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-used-letters.png">
</details>

### Music
- Fully responsive on all screen sizes
- Located at the top right level of the game screen
- Allows the player to toggle game music on and off
- User stories covered: 12, 11, 4, 5,
<details><summary>Music</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-music.png">
</details>

### Contact
- Fully responsive on all screen sizes
- Allows the player to send a message or feedback to the owners Gmail
- User stories covered: 12, 11, 4, 13
<details><summary>Contact</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-contact.png">
</details>

### 404
- Fully responsive on all screen sizes
- Allows the user to be notified of a navigation error to a non existent page
- User stories covered: 12, 11, 4,
<details><summary>404</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/features/feature-404.png">
</details>

[Back to Top](<#Table-of-Content>)
## Validation
No errors were detected across all validation platforms.

### HTML Validation
<details><summary>Home</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-html-home.PNG?raw=true">
</details>
<details><summary>Contact</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-html-contact.PNG?raw=true">
</details>
<details><summary>404</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-html-404.PNG?raw=true">
</details>

### CSS Validation


<details><summary>style.css</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-css-style.PNG?raw=true">
</details>

### Accessibility


<details><summary>Home</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-accessibility-home.PNG?raw=true">
</details>
<details><summary>Contact</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-accessibility-contact.PNG?raw=true">
</details>
<details><summary>404 Page</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/validation-accessibility-404.PNG?raw=true">
</details>

### Performance


<details><summary>Home</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/performance-lighthouse-home.PNG?raw=true">
</details>
<details><summary>Contact</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/performance-lighthouse-contact.PNG?raw=true">
</details>
<details><summary>404</summary>
<img src="https://github.com/ArronBeale/CI_PP2_Decrypt/blob/main/docs/validation/performance-lighthouse-404.PNG?raw=true">
</details>

### Performing Tests on Devices
The following devices were used in testing

- iPhone 5 (simulated / physical)
- iPad Air (simulated)
- Ipad Mini (simulated)
- Surface Pro 7 (simulated)
- Samsumg Galaxy A20 (Incompatible due to an issue with android virtual keyboard)

### Browser Compatibility
The following browsers were used to test the site, no issues.

- Mozilla Firefox - compatible
- Google Chrome - compatible
- Microsoft Edge - compatible
- Inernet Explorer - incompatible


### Testing User Stories

1. As a player, I would like to know how to play.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Welcome | Upon landing on the page there is a welcome box to briefly explain it is a word guess game | Once the page loads the welcome screen appears for the player| As expected |
| Rules | On the home page click the rules icon which is a question mark | Rules screen appears which contains the game rules for the player | As expected|

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

2. As a player, I like to choose a difficulty.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty buttons | On the lower right there are three difficulty buttons, click button to choose difficulty | Clicking each difficulty will give the associated attempts, easy x 10, medium x 8, hard x 5 | As expected |
| Difficulty buttons | When game starts difficulty is hidden to stop player refreshing attempts mid game | Click start game, difficulty menu should disappear during game | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

3. As a player, I would like to see my score.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Score | At the top of the game screen the score is displayed, as you win a round it will increase by one | Correctly guess the word and win, score increases by 1 | As expected |
| Score | At the top of the game screen the score is displayed, as you lose a round it will reset to zero | Use all attempts and lose, score is reset to zero| As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

4. As a player, I would like it minimal, no overload on screen.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Play / Stop | Click play button to start game, click stop icon to stop game | Game should start when play is clicked, game should end when stop is clicked| As expected |
| score | As you win or lose score will be adjusted, score area kept to a minimum | score increases on win, resets on lose| As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

5. As a player, I would like it to be fun.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Correct Word | Each round will generate a new five letter word from a list of the fifty most common five letter words in the English language, press play | A new word is generated for the player to guess | As expected |
| Used Letters | As the player uses an incorrect letter it is recorded in the used letters box, guess an incorrect letter| Incorrect letter should display in the used letters box | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

6. As a player, I would like it to be challenging.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty buttons | Choose desired difficulty | If player chooses easy they will get ten attempts, medium they get eightr attempts and hard, five attempts| As expected |
| Attempts | limitewd number of attempts to guess | Choose a difficulty, play the game and incorrect guess will deduct an attempt, when it hits zero player loses| As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

7. As a player, I would like replayability.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Play / Stop | Play button will start a new game with a new word | Press play button and a new game will begin with a new word to guess | As expected |
| Difficulty buttons | Choose a desired difficulty to make the challenge easier or harder  | Difficulty should increase or decrease depending on chosen difficulty | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

8. As a player, I would like a variety of words to guess.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Correct word | Each game will generate a new word from a list of the most common five letter words | Start game, new word should generate | As expected |
| Future Feature | More words will be added to the word list in the future| Future Feature | Future Feature |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

9. As a player, I would like to see how many attempts I have.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Attempts | As game progresses attempts will be visible on game screen | Play game, if a guess is wrong, attempts will decrease | As expected |
| Difficulty buttons | Choose a difficulty | Attempts will adjust to the selected difficulty | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

10. As the site owner, I would like the game to be challenging and fun.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty buttons | Choose desired difficulty | If player chooses easy they will get ten attempts, medium they get eightr attempts and hard, five attempts| As expected |
| Attempts | limitewd number of attempts to guess | Choose a difficulty, play the game and incorrect guess will deduct an attempt, when it hits zero player loses| As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

11. As the site owner, I would like a simplistic design.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| | | |  |
| | | | |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

12. As the site owner, I would like different device size compatability.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| | | |  |
| | | | |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

13. As the site owner, I would like a contact form.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact | Use navigation bar and click contact, fid contact form and submit name, email and message | This will send message to site owner via contact form | As expected |
| Footer | Social media links can be used as an alternative to contact form to get in touc with site owner | Links will bring you to site owners linkedIn and HitHub pages | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

14. As the site owner, I would like to provide difficulty levels.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Difficulty buttons | Choose desired difficulty | If player chooses easy they will get ten attempts, medium they get eightr attempts and hard, five attempts| As expected |
| Rules Button | Click on rules button, rules will be displayed explaining the difficulty levels for the player| Rules screen will appear | As expected |

<details><summary>Images</summary>
<img src="">
<img src="">
</details>

[Back to Top](<#Table-of-Content>)
## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
|used letters not wiping on new game | |
|Opening guess correct, score not increasing. | I had to adjust the location of the code to check if guess was correct and it then began increasing the score|
|Attempts not resetting after game. | I had to add a function to check which mode was true and it would reset attempts accordingly|
|Correct letters from previous game carrying to new game. | Upon win I set startGame function to be called twice which wipes the letters carrying over. |
[Back to Top](<#Table-of-Content>)
## Deployment
The website was deployed to GitHub Pages via the following:
1. From Github repository select settings
2. Select pages from the left menu
3. Select the master branch
4. When the page refreshes you will see a message to notify you the site is now published

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select if you prefere to clone using HTTPS, SSH, or Github CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash
5. Change the current working directory to the one where you want the cloned directory
6. Type git clone and paste the URL from the clipboard ($ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY)
7.Press Enter to create your local clone.

[Back to Top](<#Table-of-Content>)
## Credits

### Media
- Audio track "Cyberpunk Street" provided by Ansimuz via soundcloud https://soundcloud.com/ansimuz/cyberpunk-street / www.patreon.com/ansimuz
- background image from Joey kwok @spideyjoey, https://unsplash.com/@spideyjoey

### Code
- Fonts provided by - Google Fonts
- Font Awesome for the icons used on this project

## Acknowledgements

Special thanks to the following:
- Code Institute for providing this learning platform.
- My Mentor Mo Shami for the valuable guidance and advice.
- CI Slack Community for assistance in any help or queries asked.

[Back to Top](<#Table-of-Content>)
