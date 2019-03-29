# TriviaGame
Week 5 Timers Assignment
### Overview

In this assignment, You'll create a Trivia game using JavaScript for the logic and jQuery to manipulate HTML. Be sure to layout this app with valid HTML and stylish CSS.

### Option Two: Advanced Assignment (Timed Questions)

![Advanced](Images/2-advanced.jpg)

**[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

//Define Variables & Objects:
1. var ansTally (stores # of correct answers)
2. var timeRemain (stores)
3. var/obj quest1 (thru 10) with 4 answer properties (1 being .correct, 3 being .incorrect1, .incorrect2, .incorrect3)
4. var questArray (an array of objects)

//Define functions
startGame
1. reset timeRemain and correctAns to defaul values (15 econds, 0)
2. JQuery display timer @ 15 seconds
3. alert Welcome Message
4. calls nextQuest function upon alert confirm

nextQuest
1. JQuery reveal answer buttons     
2. JQuery replace quest(X) object parameters into defined html ID's (question, ans1, ans2, ans3, ans4)
3. reset timeRemain to 15 seconds
4. JQuery display timeRemain in timer-text
4. start timer @ 15 seconds

correctAns 
1. JQuery(quest(X).correct) replace question-text with GREEN "CORRECT" look, replace ansX-button color?
2. start 7 second timer, then call nextQuest function
3. ansTally ++

* The scenario is similar for wrong answers and time-outs.

wrongAns
1. JQuery replace question-text with RED "INCORRECT" look







  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### A Few Last Notes

* Styling and theme are completely up to you. Get creative!

* Remember to deploy your assignment to Github Pages.

*If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

  **Good Luck!**
