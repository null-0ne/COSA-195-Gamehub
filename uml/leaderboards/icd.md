```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    
    class leaderboardPage{
        +renderLeaderboardPage(element:HTMLElement,title:string):HTMLElement
        +renderScores(Score score)
    }
    class GameCard {
        +renderGameCard(element:HTMLElement,games:string[]):HTMLElement
    }

    %% Relationships
    leaderboardPage --> GameCard : holds


%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
