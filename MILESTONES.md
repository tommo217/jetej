# Milestone One


## Project Description


We plan to design a domain-specific language(DSL) that allows clients to define one agent, multiple objects, and the events triggered when two objects meet when making their own games. Many games can be created this way such as catching apples, big fish eating small fish, and even spacecraft fighting.


## Feedback from TA


Our DSL needs to have programming capability, which means users of our DSL should have the freedom to implement unique features as they want. To achieve this goal, TA suggested that we could improve on the following aspects:

  1. Allow clients to add more arithmetic functions.

  2. Enable clients to track the agent's position.

  3. Programmatically control agent movement.

  4. Allow users to add some procedures like if-else statements or loops


Moreover, we should focus on the design of the DSL instead of game development. We can use some existing APIs for game development to save time. There's no need to make a fancy game.


## Follow-up tasks

1. Think of ways to provide the clients with more dimensions of creativity. 

2. Start to define syntax and documentation.



# Milestone Two


## Responsiblities & Roadmap
 - Set up project repo (09/20)
 - Write the Tokens Grammar (before 09/26)  jack 
 - Write the Grammar rules for the parser (before 09/26) Jacqueline
 - Do the first user study(before 09/27) Jingxuan/Jack
 - Write the Javascript basic engine (before 09/30) Edmond Tom Jingxuan
    - Setup the game to run
    - Extremely simple physics(AABB collision most likely)
    - Extremely rudimentary 2D rendering(with sprite depth)
 - Write the compiler(before 10/17) Jacqueline
 - Put everything together(before 10/17) All
 - Debugging(before 10/17) Edmond
 - Do the second user study(method & time currently unknown) Jingxuan/Jack
 - Write video script (before 10/17) Edmond/Jack
 - Record video with voiceover (before 10/17) Tom
 - Edit video(before 10/17) Tom
Note: These responsiblities are not set in stone, and if anyone needs help, we will certainly have more people working on the same thing.


## Draft Grammar
The following is an example game written in our planned DSL:  
game:  
background: black  
width: 300  
height: 300  
score: 30  
time: 300;  
  
object:  
name: player  
image: src/resources/player.png  
life: 2  
start x: 150  
start y: 300  
size x: 10  
size y: 10  
update: basicControl(10);  
  
object:  
name: apple  
number: 5  
image: src/resources/apple.png  
start x: random(5,295)  
start y: 0  
speed x: random(-1,1)  
speed y: random(2,5)  
size x: 10  
size y: 10;  
  
object:  
name: bomb  
number: 5  
image: src/resources/bomb.png  
start x: random(5,295)  
start y: 0  
speed y: random(2,5)  
size x: 10  
size y: 10;  
  
object:  
name: ground  
image: src/resources/ground.png  
start x: [0-300]  
start y: 300  
size x: 10  
size y: 10  
update: updateFunc();  
  
event:  
object1: player  
object2: apple  
actions: score(1), disappear(apple);  
  
event:  
object1: player  
object2: bomb  
actions: decreaseScore(5), disappear(bomb), decreaseHealth(player, 1);  
  
event:  
object1: ground
object2: apple
actions: disappear(apple);

event:
object1: ground  
object2: bomb  
actions: disappear(bomb);  
  
function:  
name: score  
param: i  
body:  
{  
score = score + i;  
};  


## TA Feedback
 - Tasks for user study:
    - Given a game example, implement a feature
    - Given a tutorial, write a simple game
    - We can manually act like the compiler during the user study
 - Split the project into two parts, compiler and engine
 - Add a web interface or something similar that can run the game


## Progress So Far
 - Created the project
 - Started work on the lexer and parser
 - Started work on the physics and rendering side of the engine
