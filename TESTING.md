# Testing
## Table of Contents
- [Testing](#testing)
  * [Table of Contents](#table-of-contents)
  * [Manual Testing](#manual-testing)
    + [Home Page](#home-page)
      - [Screenshots where applicable for Home Page tests with corresponding test Numbers.](#screenshots-where-applicable-for-home-page-tests-with-corresponding-test-numbers)
    + [Game Page](#game-page)
      - [Screenshots where applicable for Game Page tests with corresponding test Numbers.](#screenshots-where-applicable-for-game-page-tests-with-corresponding-test-numbers)
    + [Game Play](#game-play)
    + [Card Area](#card-area)
      - [Screenshots where applicable for Card Area tests with corresponding test Numbers.](#screenshots-where-applicable-for-card-area-tests-with-corresponding-test-numbers)
    + [Found Items Area](#found-items-area)
      - [Screenshots where applicable for Found Items area with corresponding test Numbers.](#screenshots-where-applicable-for-found-items-area-with-corresponding-test-numbers)
    + [Leaderboard](#leaderboard)
    + [Screenshots where applicable for Leaderboard area with corresponding test Numbers.](#screenshots-where-applicable-for-leaderboard-area-with-corresponding-test-numbers)
  * [Responsiveness](#responsiveness)
    + [Issues Found](#issues-found)
  * [User Stories Testing](#user-stories-testing)
  * [Validation Testing](#validation-testing)
    + [CSS Validation](#css-validation)
    + [HTML Validation](#html-validation)
    + [JS Validation](#js-validation)
## Manual Testing
Throughout this section, tests have been divided into site areas, and marked as a certain category. The expected and actual results are given, along with a pass/fail indicator. Each test has a unique reference number and, where applicable, these numbers are matched to screenshots of the test results below each table.
### Home Page 
| Test | Category         | Expected Result                     | Actual Result                                              | Pass/Fail |
|------|------------------|-------------------------------------|------------------------------------------------------------|-----------|
| 1.1   | Deployed Website | Home Page loads without any issues  | Home Page loads as expected                                | Pass      |
| 1.2    | Images and font  | Chosen font appears correctly       | All text is in Google font 'Electrolyse' as expected       | Pass      |
| 1.3    | Images and font  | Font Awesome icons load correctly   | Brain and cog icon appear in first paragraph as expected   | Pass      |
| 1.4    | User Input       | User can type username in input     | User can click on the input and type in any value          | Pass      |
| 1.5    | User Input       | User can toggle difficulty switch   | User can change switch from easy to hard, and back to easy | Pass      |
| 1.6    | User Input       | User can click 'Start Game' button  | Button is clickable                                        | Pass      |
| 1.7    | Logic            | 'Start Game' button loads game page | Game page appears upon clicking button                     | Pass      |


#### Screenshots where applicable for Home Page tests with corresponding test Numbers.
1.1|
|:-------------------------:
![](assets/documentation/images/1.1.png) |       

1.4| 1.5
:-------------------------:|:-------------------------:
![](assets/documentation/images/1.4.png) | ![](assets/documentation/images/1.5a.png)![](assets/documentation/images/1.5b.png)

### Game Page
| Test | Category        | Expected Result                                                                      | Actual Result                                                                                              | Pass/Fail |
|------|-----------------|--------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|-----------|
| 2.1    | Screen Loading  | Game page loads without any issues                                                   | Game page loads as expected                                                                                | Pass      |
| 2.2    | Screen Loading  | Header remains above game play area when game page is loaded                                                 | Header remains as expected                                                                                | Pass      |
| 2.3    | Images and font | Chosen font appears correctly                                                        | All text is in Google font 'Electrolyse' as expected                                                       | Pass      |
| 2.4    | Images and font | Font Awesome icons load correctly                                                    | Question mark icons in 'Items Found' box appear as expected                                                | Pass      |
| 2.5    | Logic           | Switching to easy mode changes card layout, Items Found box and Attempts Left value. | 12 cards appear, Attempts Left value is 25, and 6 question marks appear in 'Items Found' box as expected | Pass      |
| 2.6    | Logic           | Switching to hard mode changes card layout, Items Found box and Attempts Left value. | 20 cards appear, Attempts Left value is 35, and 10 question marks appear in 'Items Found' box as expected. | Pass      |
| 2.7    | Logic           | Game page loads with cards face down (showing question mark)                         | In both difficulty modes, all cards appear with question mark when game page is loaded                     | Pass      |
| 2.8    | Logic           | 'Found Items' resets to none                                                         | In both difficulty modes, all icons in box load as question marks                                          | Pass      |
| 2.9    | Logic           | Prompt under cards loads loads as 'Pick a Card!'                                     | Text appears as expected                                                                                   | Pass      |
| 2.10    | Logic           | Leaderboard is blank on first loading, even if username has been entered             | Username can be entered and leaderboard is blank when game is first loaded.                                | Pass      |

#### Screenshots where applicable for Game Page tests with corresponding test Numbers.
1.7, 2.1, 2.2, 2.3, 2.4, 2.5, 2.7, 2.8, 2.9, 2.10| 2.6, 2.7, 2.8, 2.9, 2.10
:-------------------------:|:-------------------------:
![](assets/documentation/images/1.7.png) | ![](assets/documentation/images/2.6.png)

### Game Play
### Card Area
| Test | Category       | Expected Result                                                                                                                                                | Actual Result                                                                                                                                            | Pass/Fail |
|------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| 3.1  | Logic          | In each attempt, any two cards can be selected                                                                                                                 | User can click on any two cards, and question mark turns into specific icon.                                                                             | Pass      |
| 3.2  | Logic          | If cards match, a well done message appears                                                                                                                    | Any matching pair results in a message appearing saying 'well done!' and the number of items left to find is given.                                      | Pass      |
| 3.3  | Logic          | If cards match, user can continue to click on another pair                                                                                                     | When cards match and prompt message appears, user can click on any two cards other than a pair that has already been matched.                            | Pass      |
| 3.4  | Logic          | Cards that are turned over and match remain turned over                                                                                                        | If matching pair is found, they stay turned over until exit game button is clicked and new game is run. See test (2.6, 3.19)                                                         | Pass      |
| 3.5  | Logic          | Matched pairs can't be turned back over                                                                                                                        | If user clicks on a card that has been matched, nothing happens                                                                                          | Pass      |
| 3.6  | Logic          | If an attempt is incorrect, a guess again button appears                                                                                                       | If user selects two cards that don't match, prompt message disapear and guess again button appears                                                      | Pass      |
| 3.7  | Logic          | When guess again button appears, user cannot click on any other cards until button is clicked.                                                                | If user selects any cards before clicking guess again button, nothing happens.                                                                           |  Pass         |
| 3.8  | Logic          | Clicking guess again button turns the unmatched pair back over                                                                                                 | The last two cards selected turn back over                                                                                                               | Pass          |
| 3.9  | Logic          | Guess again button disappears when it is clicked                                                                                                               | When user clicks button, it disappears and there is no prompt message                                                                                    |  Pass         |Pass
| 3.10 | Logic          | If attempts left becomes less than number of items left to find, a message appears stating 'Sorry not enough guesses remaining' and a Try Again button appears | Message and button appear as expected when case occurs                                                                                                   |Pass           |
| 3.11 | Logic          | If attempts left becomes less than number of items left to find, user cannot turn over any more cards until a new game is started                              | When case occurs and message and button have appeared, clicking on any further cards does nothing                                                        |  Pass         |
| 3.12 | Logic          | Clicking Try Again button takes the user back to the settings section of the home page                                                                         | On clicking the Try Again button, the game page disapears and the settings section of the home page appears with instructions and about sections hidden |  Pass         |
| 3.13 | Screen Loading | Header remains above home page area when try again button is clicked                                                                                           | Header remains as expected                                                                                                                               |  Pass         |
| 3.14 | Screen Loading | Username, difficulty switch and Start Game button all appear when try again button is clicked    |Features appear as expected|Pass|
| 3.15 | User Input | Username can be inputted into box on settings only version of home page     | Input accepts any value                                                                           | Pass      |
| 3.16 | User Input | Difficulty switch can be toggled on settings only version of home page      | Switch can be toggled between easy and hard as expected                                           | Pass      |
| 3.17 | User Input | Start Game button can be clicked on settings only version of home page      | Button can be clicked and loads game page as expected                                             | Pass      |
| 3.18 | Logic      | Difficulty switch on settings only version of home page changes card layout | When game page is loaded, difficulty settings act in the same way as starting from full home page |     Pass      |
| 3.19 | Logic      | Once all items are found, a well done message appears and user cannot change any further cards. A play again button appears.| When game is won, message appears as expected, cards cannot be changed and button appears as expected|     Pass      |
| 3.20 | Logic      | Exit game button takes the user back to the home screen and all settings can be changed |Home screen loads as expected and username and difficulty can be selected|     Pass      |
| 3.21 | Logic      | If try again button was clicked during game, exit game button takes the user back to full home screen |Home screen loads in full after game with try again button clicked|     Pass      |
| 3.22 | Logic      | Username and difficulty can be changed for a new game |If difficulty is changed, card layout, items found box and attempts left value all change accordingly|     Pass      |
| 3.23 | Logic      | User can click exit game button at any point and return to home screen |Exit game button returns user to home screen at any point as expected|     Pass      |
| 3.24 | Logic      | Play again button takes user to same settings only home screen as try again button |Button behaves as expected and new game can be loaded with correct functionality|     Pass      |

#### Screenshots where applicable for Card Area tests with corresponding test Numbers.
3.1, 3.2| 3.6
:-------------------------:|:-------------------------:
![](assets/documentation/images/3.2.png) | ![](assets/documentation/images/3.6.png)

3.9| 3.10
:-------------------------:|:-------------------------:
![](assets/documentation/images/3.9.png) | ![](assets/documentation/images/3.10.png)

3.12, 3.13, 3.14,3.15| 3.16
:-------------------------:|:-------------------------:
![](assets/documentation/images/3.12.png) | ![](assets/documentation/images/3.16.png)


3.19|
:-------------------------:|
![](assets/documentation/images/3.19.png) |

### Found Items Area
| Test | Category | Expected Result                                                  | Actual Result                                                                                                                   | Pass/Fail |
|------|----------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|-----------|
| 4.1  | Logic    | After an attempt has been made, the Attempts Left decreases by 1 | Once the user has selected two cards, the value drops by 1                                                                      | Pass      |
| 4.2  | Logic    | If cards match, the item appears in Items Found box              | Once the user has selected two cards and they match, a question mark in Items Found box is replaced with the corresponding item | Pass      |

#### Screenshots where applicable for Found Items area with corresponding test Numbers.
4.1, 4.2|
:-------------------------:|
![](assets/documentation/images/4.1.png) | 

### Leaderboard
| Test | Category | Expected Result                                                                                                                                             | Actual Result                                                                                                              | Pass/Fail |
|------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------|-----------|
| 5.1  | Logic    | The first user to enter a username and complete the game has their username and score saved to 1st place on the leaderboard.                                | Username and score appear in 1st place upon completing game                                                                | Pass      |
| 5.2  | Logic    | Subsequent users who enter a username and complete the game are ranked on the leader board accordingly.                                                     | Users are ranked according to score and appear as expected on the leader board                                             | Pass      |
| 5.3  | Logic    | If a user beats another's score, the order on the board changes                                                                                             | User achieves a score higher than one on the board and displaces current position                                          | Pass      |
| 5.4  | Logic    | If a user ties with another's score, they do not displace their position on the board                                                                       | User achieves same score as currently on board, does not displace current position but is ranked beneath on the board      | Pass      |
| 5.5  | Logic    | If a user's score is less than or equal to the current 3rd place, the user doesn't appear on the board.                                                     | User enters username and completes game but score is lower than current 3rd place so does not appear on board              | Pass      |
| 5.6  | Logic    | If a user completes the game on hard mode, their score is multiplied by 1.5 and is ranked on the leader board as usual                                      | User completes game on hard mode and score is multiplied by 1.5, displacing current 1st place                              | Pass      |
| 5.7  | Logic    | If a user attempts the game again with the same username, and beats their previous score, this is overwritten in the leaderboard                            | User enters a previously used username, achieves a higher score and overwrites previous score on leader board              | Pass      |
| 5.8  | Logic    | If a user attempts the game again with the same username on a different difficulty, and beats their previous score, this is overwritten on the leader board | User enters previously used username, selects hard mode and beats previous score, new score is overwritten on leader board | Pass      |

### Screenshots where applicable for Leaderboard area with corresponding test Numbers.
5.1|
:-------------------------:|
![](assets/documentation/images/5.1.png) |

| 5.2
|:-------------------------:
| ![](assets/documentation/images/5.2a.png)![](assets/documentation/images/5.2b.png)

5.3| 5.4
:-------------------------:|:-------------------------:
![](assets/documentation/images/5.3.png) | ![](assets/documentation/images/5.4.png)

5.5| 5.6
:-------------------------:|:-------------------------:
![](assets/documentation/images/5.5.png) | ![](assets/documentation/images/5.6.png)

5.7| 5.8
:-------------------------:|:-------------------------:
![](assets/documentation/images/5.5.png) | ![](assets/documentation/images/5.6.png)



## Responsiveness
- The site has been tested for responsiveness on a range of browser sizes. These range in width from 320px to 2560px. Both pages are fully responsive in both easy and hard mode, maintaining their structural integrity across all browser sizes. 

- The site uses media queries to change the width of the game page, font size, icon size and card padding depending on the browser size.

### Issues Found
- At narrow browser sizes (<450px in width), the card area begins to look cluttered. This is due to the number of cards that are involved with hard mode. The easy mode layout has to accommodate this as the media queries apply to both easy and hard mode. The game also requires extra space in the margins of the card area, as the cards increase in width when turned over due to the question mark icon being narrower than the others.

- As a fix for this issue, further developments of this project might involve using javascript to make the site responsive at these small browser sizes, allowing the details of the media queries to be dependent on the difficulty level chosen.

- Another solution may be to ensure the cards stay at the same width even when turned over. This would mean there is less margin space needed around the card table.

Home Page viewed on a Mobile (320px) | Home Page viewed on a Tablet (768px)
:-------------------------:|:-------------------------:
![](assets/documentation/images/Mobile-Home.png) | ![](assets/documentation/images/tablet-home.png)

Home Page viewed on a Laptop (1440px)| 
:-------------------------:|
![](assets/documentation/images/laptop-home.png) |


Game Page - Easy mode viewed on a Mobile (320px) | Game Page - Easy mode viewed on a Tablet (768px) 
:-------------------------:|:-------------------------:
![](assets/documentation/images/mobile-game-easy.png) | ![](assets/documentation/images/tablet-game-easy.png))

Game Page - Easy mode viewed on a Laptop (1440px)| 
:-------------------------:|
![](assets/documentation/images/laptop-game-easy.png) |

Game Page - Hard mode viewed on a Mobile (320px) | Game Page - Hard modeviewed on a Tablet (768px) 
:-------------------------:|:-------------------------:
![](assets/documentation/images/mobile-game-hard.png) | ![](assets/documentation/images/tablet-game-hard.png))

Game Page - Hard mode viewed on a Laptop (1440px)| 
:-------------------------:|
![](assets/documentation/images/laptop-game-hard.png) |

## User Stories Testing
The site has been tested according to the user stories and fulfils all user needs:

As a user, I would like to :

- See clearly what the purpose of the game is
   - The home page is very clear and has a snappy about section at the top. The title of the game is also simple and well known as it is a classic game.
- Receive clear and concise instructions as to how to navigate the site and play the game
   - The instructions feature direclty  below the about section on the home page, and are clear and concise, explaining in enough detail the rules and navigation of the game
- Easily navigate the site through eye catching buttons
   -Throughout the site, buttons are eye catching and easy to locate. They appear or disappear at the right times to allow the user to have the smoothest experience possible while playing the game.
- Be able to view my progress as I am playing the game
   - The items found icons update when cards are matched, and the number of items to left is stated to the user, along with the attempts left.
- Receive prompts during the game to know what to do next
   - At the end of each turn the user is told whether to keep guessing if correct or to press a button to turn the cards over if incorrect. 
- Record my result and compare to other players
   - If a username enters their username and makes it to the top 3, their result is saved on the leaderboard along with other users who have played the game on that browser.
- Be able to exit the game or play again at the end of each game
   - At the end of the game the user has the option to start a new game, by taking them to the settings menu regardless of if they win or lose. At any point in the game the user can exit to the home screen.

## Validation Testing
### CSS Validation
The style.css file passes through the official [CSS validator](https://jigsaw.w3.org/css-validator/) without any errors.
![](assets/documentation/images/css-pass.png)
### HTML Validation
The index.html file passes through the official [HTML validator](https://validator.w3.org/) without any errors.
![](assets/documentation/images/html-pass.png)
### JS Validation 
The script.js file passes through [JSHint](https://jshint.com/) without any errors. The validator produces the following metrics: 

- There are 10 functions in this file.

- Function with the largest signature take 2 arguments, while the median is 0.

- Largest function has 41 statements in it, while the median is 5.5.

- The most complex function has a cyclomatic complexity value of 15 while the median is 1.

The validator also gives a warning : "	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (attemptsLeft, card, inputId, inputName, itemsFound, noItems, username, scores, difficulty)"

I chose to ignore this warning as I was confident in the logic of my code that the way the functions and variables declared wouldn't affect the functionality. Further developments of this project might involve looking into declaring the function in a way that doesn't reference outer scoped variables.

![](assets/documentation/images/JS-pass.png)