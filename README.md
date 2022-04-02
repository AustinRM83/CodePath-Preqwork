# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Austin Munson

Time spent: **10** hours spent in total

Link to project: https://living-dolomite-titanium.glitch.me/

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Easter Egg 1 (Increased difficulty)
- [x] Easter Egg 2 (Title changes if clicked)
- [x] Easter Egg 3 (Start Button has anger issues if clicked too much)
- [x] Added difficulty buttons which affects the rate of the tones shrinking and how many elements are in a pattern

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
- [x] (Winning) http://g.recordit.co/cimUswOX9t.gif
- [x] (Losing Life and Losing) http://g.recordit.co/2Fl1XiAlR7.gif
- [x] (Different patterns) http://g.recordit.co/RhJ7QB8YCp.gif
- [x] (Easter Eggs) http://g.recordit.co/7CDs0YVaYi.gif

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- I used w3schools to learn how to properly use the DOM.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- A challenge that I faced was implementing the decreasing playtime of the buttons. Initially, I had understood the directions as guiding us towards creating a difficulty system. This path of thought led me to increase the pattern size and change the hold and pause time of the guesses. I had not discovered this problem until I created the README.md file and realized that the instructions directed to an increase in tempo. When I discovered the problem, I rushed to think of ways to incorporate the optional feature into my program. To decrease the lines of code I needed to change, I decided to combine the basics of the difficulty system with the increasing tempo. The solution took me about thirty minutes to fully fleshed out but almost worked flawlessly out of the gate. Several problems were tempo increasing too fast and temp not resetting after the game ended. Thankfully, my ideas solved the issue quickly, and I moved into playtesting parts of the game to determine if they were up to my set standards. This challenge forced me to adapt to the new problem and find solutions that could easily be implemented into the program. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- An important question about web development that I gained after completing my submission was the steps to make websites commercialized. We were introduced to creating a website that could be used in small-scale cases throughout the prework, but that could be problematic if applied to a significant website. I am interested in learning how to make a market-ready website's front and back end.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had a few more hours to work on this project, I would most likely spend them reworking the audio playback code and the formatting of the website. The audio playback section of the given code seems to be more complicated than it needs to be and could be simplified to create and modify tones. The formatting of the website can also improve as the website looks pretty bare-bones and uninviting. If the website goes public, it would be necessary to decorate the site more to increase viewer engagement. If I had a few more hours to work on this project, I believe that I could make this website remarkable.



## Interview Recording URL Link

https://www.loom.com/share/bf57fdb72691428c9513fa9e549f18a2


## License

    Copyright Austin Munson

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
