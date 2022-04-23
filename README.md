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
8. As a player, I would like a variety or words to guess.
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

### Play /Stop
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

[Back to Top](<#Table-of-Content>)
## Validation


### HTML Validation
<details><summary>Home</summary>
<img src="">
</details>
<details><summary>Contact</summary>
<img src="">
</details>
<details><summary>404</summary>
<img src="">
</details>

### CSS Validation


<details><summary>style.css</summary>
<img src="">
</details>

### Accessibility


<details><summary>Home</summary>
<img src="">
</details>
<details><summary>Contact</summary>
<img src="">
</details>
<details><summary>404 Page</summary>
<img src="">
</details>

### Performance


<details><summary>Home</summary>
<img src="">
</details>
<details><summary>Contact</summary>
<img src="">
</details>
<details><summary>404</summary>
<img src="">
</details>

### Performing Tests on Devices

- 
- 
- 
- 

### Browser Compatibility
- 
- 
- 

### Testing User Stories
First Time User:
1. 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| | | |  |
| | | | |

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
- 

### Media
- Audio track "Cyberpunk Street" provided by Ansimuz via soundcloud https://soundcloud.com/ansimuz/cyberpunk-street / www.patreon.com/ansimuz

### Code
- 

## Acknowledgements

Special thanks to the following:
- 

[Back to Top](<#Table-of-Content>)
