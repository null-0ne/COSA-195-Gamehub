# Entity Relation Diagram (ERD) db-for-api.json

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
erDiagram



    %% User {
    %%   String email
    %%   int score
    %%   String gameId
    %% }



    Ads {
      String advertisementId PK
      String category
      String message
      String link
    }

     YahtzeeCountScore {
       String email FK
       int score
       String gameId PK
       int rank
     }

     CrapsScore {
       String email FK
       String gameId PK
       int rank
       int score
     }

    scores {
      int id PK
      String gameTitle
      int userID FK
      Number score
    }
    users {
      int id PK
      String email
      String password
    }

    %% Relationships
    users ||--o{ scores : "has"
    scores }o--o{ CrapsScore : "submits"

%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
