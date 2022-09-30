### Table of Contents: 
- [Milestone 1](#milestone-1)
  - [Project Description](#project-description)
  - [Feedback from TA](#feedback-from-ta)
  - [Follow-up tasks](#follow-up-tasks)
- [Milestone 2](#milestone-2)
  - [Responsiblities & Roadmap](#responsiblities--roadmap)
  - [Draft Grammar](#draft-grammar)
  - [TA Feedback](#ta-feedback)
  - [Progress So Far](#progress-so-far)
- [Milestone 3](#milestone-3)
  - [Concrete language mockup](#concrete-language-mockup)
  - [Notes from user study](#notes-from-user-study)
  - [Changes to language design](#changes-to-language-design)
  - [Feedback from TA](#feedback-from-ta-1)
  - [Progress & Roadmap](#progress--roadmap)
      - [Progress so far](#progress-so-far-1)
      - [Roadmap](#roadmap)

# Milestone 1


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



# Milestone 2


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

```
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
```

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


# Milestone 3

Since the last milestone, the first user study has been conducted. As a result of that, tweaks and feature changes has been identified for the language. 

## Concrete language mockup

The syntax we used for the first user study is the same as the one outlined in [Milestone 2](#draft-grammar). 

Each codeblock starts with one of the keywords `game`, `object`, `event`, or `function`, and ends with the `;` symbol. Inside a codeblock, each line defines an attribute of the declared keyword, and can accept primitives(number and string), arrays, and function calls. 



<details>
<summary>This is an example of a game written in the DSL syntax (click me): </summary>

```
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
update: basicControl();
 
object:
name: apple
number: 5
image: src/resources/apple.png
start x: random(5,295)
start y: 0
speed x: random(-1,1)
speed y: change(2,5)
size x: 10
size y: 10;
 
object:
name: bomb
number: 2
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
 
event:
object1: player
object2: apple
actions: score(1), disappear(apple);
 
event:
object1: player
object2: bomb
actions: score(-5), disappear(bomb), decreaseHealth(1);
 
event:
object1: ground
object2: apple
actions: disappear(apple);
 
event:
object1: ground
object2: bomb
actions: disappear(bomb);
 
function:
name: decreaseHealth
param: i
body:
{
life = life - i;
};
```
</details>


## Notes from user study

Some issues we identified from the user study: 

- The user relied heavily on the provided example to set up their own game
- The meaning of some attribute keywords were ambiguous
- The user is often unsure which variables and functions are built-in, and which ones need to be custom-declared
- Some syntax complaints
  - Keyword declaration such as `object:` is too similar to attribute declaration such as `name:`
  - Syntax for declaring an array of elements from 0 to 300 `[0-300]` is ambiguous

## Changes to language design

We identified the following changes to improve code comprehensibility

 - For Objects, provide syntax to enable/disable collision, define mass, etc
 - Range syntax for spawning a list of objects start x: [0-300]
 - Attribute keyword refactorings
   - Start x/start y -> pos x/pos y
   - Size x/size y -> delete

We also identified the following features that need to be implemented: 
 - Syntax for instancing: 
   - Provide a way to explicitly refer to an object instance in function definition
   - Provide a way to spawn a specific number of an object type

 - A syntax for the definition of end-conditions

 - In custom function, add support for `if` statements & return values 

## Feedback from TA

 - Syntax for custom function definitions are within-scope and is a major feature we should consider implementing
 - ANTLR as Javascript support, so it would be possible to call the game engine functions directly through an AST visitor. 


## Progress & Roadmap

#### Progress so far
 - Set up project repo (09/20)
 - Finished lexer & parser for the current syntax (09/26) *Jack, Jacqueline*
 - Conduct the first user study (09/25) *Jingxuan*
 - Set up basic engine  *Edmond*
 - UI and integrated game interface (ongoing) *Tom, Jingxuan*


#### Roadmap
 - Set up ANTLR with javascript support (10/03)
 - Finish the eingine & game UI (10/07 - delayed by 1 week) *Edmond Tom Jingxuan*
 - Conduct second user study with prototype (10/11) *Jack, Jingxuan*
 - Integrate compiler and game (before 10/14) *All*
 - Debugging(before 10/17) *Edmond*
 - Do the second user study(method & time currently unknown) *Jingxuan/Jack*
 - Write video script (before 10/17) *Edmond/Jack*
 - Record video with voiceover (before 10/17) *Tom*
 - Edit video(before 10/17) *Tom*