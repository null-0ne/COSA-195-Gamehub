# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR



    class NavBar {
        +renderNavBar(element:HTMLElement,params:Object):HTMLElement
    }

    class CrapsPage{
        +int winCount
        +int[] diceArray
        +int gamesPlayed
        +int lossCount
        +boolean continue


    +renderGame(); %% at the start of the game, render game HTML

    +rollDice(); %%animate dice roll, calls determine Point at end. returns dice sum. calculates if win, loss or continue. returns Boolean

    %%+shiftDice(); %%move "current roll" dice into "last roll" dice slots

    +updateGame(int[] dice, int score) %%updates the current roll and last roll score (visual)

    +updateSession(int lossCount, int winCount, int gamesPlayed, boolean didWin) %%updates the session wins, losses, and games played

    +submitScore(); %%adds wins and losses to JSON file
    }





    %% Relationships
    NavBar <-- CrapsPage: has




%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
