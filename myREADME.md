

##
This app functions by first setting up variable and arrays. We need all the possible characters that the password could contain or a pool of all possible options. Then, over a series of prompts, alerts, and confirms, we find out the parameters of the password based on the user’s inputs. The length is determined, then which characters to add to the pool to draw from randomly. I’ve set these to turn into booleans because that was the easiest way for me to conceptualize which arrays to add to the “pool”. Once we have all the parameters (ie: 42 character password, Uppercase letters, numbers, and special characters), then we set an equation for the computer to draw random characters from the user selected pool (using the math.random function). Finally, we console.log to print the final result to the computer.


Although I’ve managed to complete the basic function of this app, there are a couple things I wasn’t able to figure out YET:

-I was unable to get the app to lock out and restart if a number of characters entered was invalid (under 8 characters or over 128). The best I could come up with was an alert message saying to pick a valid password length and restart the app by refreshing the page. However, even with this alert, you are able to continue with the prompts and a password is created, even with the invalid length. This is an undesired result.

-I was unable to figure out how to actually get the console.log to print onto the page itself. Manipulating the HTML from within the Javascript page is how I assume it’s done, but I couldn’t find the right code to make it display. As a plan B solution, I've had the output print onto a final alert, after all the inputs are chosen.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```