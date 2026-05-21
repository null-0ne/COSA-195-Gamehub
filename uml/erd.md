# Entity Relation Diagram (ERD) db-for-api.json

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
erDiagram


  users{
    int id PK
    String email
    String password
  }

  craps{
    int id pk
    String email
    String gameName
    Number score
  }

  scores {
  int id PK
  String gameTitle
  int userID FK
  Number score
  }


   %% Relationships
    scores }o--o{ craps : "submits"
    users ||--o{ scores : "has"


%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```

NOTE: orders has a customerId which implys a customer entity (but that is outside of example scope)
