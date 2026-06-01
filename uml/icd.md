# UML Class Diagram for Polytech Game Hub

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
  direction LR

    %%------- COMPONENTS -------%%
    class GameplaySection{
        +renderGameplaySection(element:HTMLElement,params:Object):HTMLElement
    }

    class HelpSlider{
        +renderHelpSlider(element:HTMLElement,params:Object):HTMLElement
    }
    class LeaderboardList{
        +renderLeaderboardList(element:HTMLElement,params:Object):HTMLElement
    }

    class NavBar {
        +renderNavBar(element:HTMLElement,params:Object):HTMLElement
    }

    class YahtzeeScoreCard{
        +renderYahtzeeScoreCard(element:HTMLElement,params:Object):HTMLElement
    }
    %% ---------LIB -----------%%
    class ScoreService {
        <<service>>
        +postScore(int Scores,String gameTitle, String userID, String email) : Score
        +getScores(textSearch:string,sortOrder:string,paging:Object) : Score[]
    }

    class UserService{
        <<service>>
        +retrieveLogin(email: string, password: string) Object[]
        +register(email: string, password: string) Object[]
        +registerValidate(email: string, password: string) boolean
    }

    %% ---------PAGES ----------%%

    class CrapsPage {
        +boolean isRolling
        +int gamePoint
        +int winCount
        +int[] diceArray
        +int gamesPlayed
        +int lossCount
        +boolean gameState
        +boolean didWin

        +renderCrapsPage(); %% at the start of the game, render game HTML

        +resetGame() %%resets all dice and test data from the current game

        +rollDice(); %%animate dice roll, calls determine Point at end. returns dice sum. calculates if win, loss or continue. returns Boolean

        +calculateRound(int currRollSum); %%calculates if the value that was rolled is a win, loss or other

        +updateGame(int currRollSum) %%updates the current roll and last roll score (visual)

        +updateSession(boolean didWin) %%updates the session wins, losses, and games played

        +resetGame() %% starts the game over so user can roll again

        +submitRatio(); %%calls submitScore() in score-service class
    }

    class HomePage{
        +renderHomePage(element:HTMLElement,params:Object):HTMLElement
    }

    class LeaderboardPage{
        +renderLeaderboardPage(element:HTMLElement,title:string):HTMLElement
        
    }
    class LoginPage {
    <<view>>
        +renderLoginPage(element:HTMLElement,title:string,pageNum:int):HTMLElement
        +redirectToDashboard()
    }

    class RegisterPage {
    <<view>>
        +renderRegisterPage(element:HTMLElement,title:string):HTMLElement
        +redirectToDashboard()
    }

    class YahtzeeCountPage {
        +renderYahtzeeCountPage(element:HTMLElement,params:Object):HTMLElement
    }

    class PigPage {
        +renderPigPage(element:HTMLElement,params:Object):HTMLElement
        +holdScore()
    }

    
     %% Relationships
    NavBar <-- YahtzeeCountPage : layout
    ScoreService<-- YahtzeeCountPage : uses
    YahtzeeCountPage <-- YahtzeeScoreCard : uses
    YahtzeeCountPage <-- GameplaySection : uses
    LoginPage --> UserService : fetches data
    RegisterPage --> UserService : fetches data
    NavBar <-- CrapsPage : layout
    YahtzeeCountPage --> HelpSlider: uses
    CrapsPage --> HelpSlider: uses
    CrapsPage --> ScoreService : sends score data
    LeaderboardPage --> NavBar : has
    LeaderboardPage --> LeaderboardList : holds
    PigPage --> HelpSlider : uses
    PigPage --> ScoreService : sends score data
    NavBar <-- PigPage : layout
    PigPage <-- GameplaySection : uses
    HomePage --> PigPage : links
    


%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
