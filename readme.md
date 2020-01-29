# _{Application Name}_

#### _{Brief description of application}, {Date of current version}_

#### By _**{List of contributors}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Specs
Behaviour | Input | Outputs
---|---|---
user clicks 'play' | play:click | displays game page
user's turns ends | hold:click OR roll:click | turn switches to other player
user clicks 'roll', generates random number 1-6 | roll:click | 4
user clicks 'roll' again | roll:click | 4,5
user clicks 'hold' without having rolled | hold:click | alert(please roll at least once per turn)
user clicks 'hold', adds turn total to score | hold:click | 4 + 5, total +9
user clicks 'hold', adds turn total to score, turn ends | hold:click | 4 + 5, total +9, turn ends
user rolls 1, turn total changed to 0 | roll:click | total + 0
user rolls 1, turn total changed to 0, turn ends | roll:click | total + 0, turn ends
user score >= 100 | hold:click | shows 'winner!' element

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_{List of contributors or company name}_**