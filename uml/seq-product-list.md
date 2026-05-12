# Simplified Sequence Diagram : Shopper views a list of products

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%


sequenceDiagram
title: Simplified Shopper views a list of products

    actor u as User
    participant craps as CrapsPage<br><<component>>
    participant dice as Dice<br><<component>>
    participant ups as UpdateSession<br><<utility>>
    participant f as Formatter<br><<untility>>

    u->>craps: navigates to page
    activate craps

    craps->>craps: renderGame()
    u->>craps: clicks roll dice button

    alt continue true
    loop while point is rolled
        craps->>dice: rollDice()
        activate dice
        dice->>dice: updateGame()
        dice-->>craps: returns boolean (win/loss or point)
        deactivate dice
    end

    else continue false
    end

    craps->>ups: updateSession()

    deactivate craps




%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
