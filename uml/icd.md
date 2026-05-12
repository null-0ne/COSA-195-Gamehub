# UML Class Diagram for Yahtzee Count Page

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

    class YahtzeePage {
        -totalScore : int
        -scores : Array[int]
        +renderScoreForm()
        +SubmitScore()
        +UpdateScore()

    }

    class scoreService {
        +getScore(String:email, int:score)
    }

    %% Relationships
    NavBar <-- YahtzeePage : layout




%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
