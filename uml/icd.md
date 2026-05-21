# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    class LeaderboardPage{
        +renderLeaderboardPage(element:HTMLElement,title:string):HTMLElement
    }

    class GameCard {
        +renderGameCard(element:HTMLElement,games:string[]):HTMLElement
    }

    class LeaderboardList{
        +renderScoreList(GameCard: Object, scores: Score[])
    }

    class LeaderboardService{
        +renderScores(Score score)
    }

    class Formatter{
        +formatScoreList(email: String, score: int[], gameId: String)
        +sortAndRankScore(score:int[])
    }

    class NavBar {
        +renderNavBar(element:HTMLElement,params:Object):HTMLElement
    }

    class Footer {
        +renderNavBar(element:HTMLElement,advert:String):HTMLElement
    }

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



    class YahtzeeCountPage {
        renderYahtzeeCountPage(element:HTMLElement,title:string)
    }

    class HelpSlider {
        renderhelpInfo(params:string)
    }

%%  direction LR

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


    %% Relationships
    LoginPage --> UserService : fetches data
    RegisterPage --> UserService : fetches data
    NavBar <-- CrapsPage : layout
    NavBar <-- YahtzeeCountPage : layout
    YahtzeeCountPage --> HelpSlider: uses
    CrapsPage --> HelpSlider: uses
    CrapsPage --> score-service : sends score data
    LeaderboardPage --> GameCard : holds
    LeaderboardPage --> NavBar : has
    LeaderboardPage --> Footer : has

    %%----- Services -----%%

    class UserService{
        <<service>>
        +retrieveLogin(email: string, password: string) Object[]
        +register(email: string, password: string) Object[]
        +registerValidate(email: string, password: string) boolean
    }

    class score-service{
        <<service>>
        +UserId
        +uEmail
        +gameName
        +ratio

        +submitScore(userId, uEmail, gameName, ratio)
    }


%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
