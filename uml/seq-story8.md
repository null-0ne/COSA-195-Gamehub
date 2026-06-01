# Story 8: As a user I want to enter a score into a category

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%


sequenceDiagram
title: User plays Yahtzee Count

participant u as user<br><<actor>>
participant p as yahtzee-count-page<br><<component>>
participant help as help-slider<br><<component>>
participant dice as dice-roll<br><<component>>
participant scoreSvc as score-service<br><<service>>
participant scoreRepo as scoreRepository<br><<repository>>

u->>p: navigate to yahtzee page
activate p

p->>help: renderHelpSlider()
activate help

help-->>p: sends help menu button
deactivate help

p->>dice: renderDiceRoll()
activate dice
dice-->>p: sends dice component and rolling function
deactivate dice

u->>p: enters a score into a category

p->>p: updateScore(int:score)

u->>p: Clicks submit score button


p->>scoreSvc: submitScore(score:int,String:email)

activate scoreSvc
scoreSvc->>scoreRepo: sendScore(String:email, int:score)
deactivate scoreSvc
deactivate p





%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
