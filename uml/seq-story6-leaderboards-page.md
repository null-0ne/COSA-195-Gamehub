# Simplified Sequence Diagram  : Shopper views a list of products

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%


sequenceDiagram
title: Leaderboards that show the top 3 scores in each game

    actor u as User
    participant l as LeaderboardPage<br><<component>>
    participant m as LeaderboardService<br><<service>>
    participant n as LeaderboardList<br><<component>>
    participant f as Formatter<br><<utility>
    
    u->>l: navigates to page
    activate l

    l->>l: renderLeaderboardPage(element, title)

    l->>m: renderScores(score)
    activate m

    m->>l: returns scores:Score[]
    deactivate m

    l->>n: renderScoreList(gameCard, scores)
    activate n

    n->>f: formatScoreList(email, score, gameId)
    activate f

    f->>f: sortAndRankScore(score)

    f->>n: return ScoreList
    deactivate f

    n->>l: Rendered List Component
    deactivate n

    l->>u: Display Leaderboard
    deactivate l

%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
