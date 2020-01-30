# _Pig Dice_

#### _A game of luck and bravery_

#### By _**Todd Walraven and Isaac Garnand**_

## Description

_This Application pits two players against each other to see who can roll a total that adds up to 100. But heres the catch, if they roll a 1, the sum of their current rolls is set to 0 and their turn is up. The first to 100 is the winner_

## Setup/Installation Requirements
### Through Web Browser
* _download this respository from GitHub_
* _navigate to project directory_
* _double click index.html_
### Through Terminal
* _open terminal_
* _navigate to desktop_
* _use git clone command to download reposity_
* _change directory into Pig-dice_
* _ use command open index.html_

_If using windows machine user must install Git Bash or similar application to be able to clone the repository from GitHub_

## Known Bugs

_Application doesn't end unless page is reset_

## Support and contact details

_Have any questions/suggestions Email us at cod4247@yahoo.com_

## Specs
Behaviour | Input | Outputs
---|---|---
user clicks 'play' | play:click | displays game page
user's clicks 'hold', ending their turn | hold:click | turn switches to other player
user clicks 'roll', generates random number 1-6 | roll:click | 4
user clicks 'roll' again, appends another roll| roll:click | 4,5
user can't hold until they roll | hold:click\(hidden\) | \(button is hidden\)
user clicks 'hold', after rolling , hides roll button for player who rolled| hold:click | roll: hidden
user clicks 'hold', after rolling, adds turn total to score and hides roll button| hold:click | 4 + 5, total +9 hold: hidden
user clicks 'hold', add score, turn end, current rolls cleared | hold:click | Current rolls: " "
user rolls 1, turn total changed to 0 | roll:click | total + 0
user rolls 1, turn total changed to 0, hides roll button| roll:click | total + 0, turn ends
user score >= 100 | score:100| shows 'winner!' element

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _JQuery_
* _VSCode_
### License

*This Application is licensed under the GPL license*

Copyright (c) 2020 **_Todd Walraven, Isaac Garnand_**