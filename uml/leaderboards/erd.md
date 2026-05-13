# Entity Relation Diagram (ERD) db-for-api.json

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
erDiagram
<<<<<<< HEAD
    Score {
      String email FK
      int score[] PK
      int time
      String game FK
    }

    Leaderboard {
      String game PK
      User email FK
      Score score FK
      int rank
    }

    User{
        String email PK
        String password
        Score score[] FK
=======
    YahtzeeCountScore {
      String email FK 
      int score
      String gameId PK
      int rank
    }

    CrapsScore {
      String email FK
      int wins
      int losses
      String gameId PK
      int rank
>>>>>>> 2f7a3fdb61428da810a20d203a5bc95d35b47c46
    }

    Score {
      String gameTitle PK
      User email FK
      int[] score FK 
    }

    %% Relationships
    
    Score ||--|{ CrapsScore : "holds"
    Score ||--|{ YahtzeeCountScore : "holds"



<<<<<<< HEAD
%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```

NOTE: we haven't made any notes
=======
%%----------------------- MERMAID MARKUP ABOVE --------------------%%    
```
>>>>>>> 2f7a3fdb61428da810a20d203a5bc95d35b47c46
