# Entity Relation Diagram (ERD) db-for-api.json

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
erDiagram


  User{
    String id pk
    String password
    String crapsScore
  }

  Craps{
    String id pk
    String userId fk
    String score
  }


   %% Relationships
    Craps ||--o{ User : "has"


%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```

NOTE: orders has a customerId which implys a customer entity (but that is outside of example scope)
