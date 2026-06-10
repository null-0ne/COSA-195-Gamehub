# Story 9: As a user, I want to view my profile

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%

sequenceDiagram
    actor u as user
    participant p as profilepage <br><<component>>
    participant us as userservice <br><<service>>
    participant ss as scoreservice <br><<service>>
    participant uic as userinfocomponent <br><<component>>
    participant lc as leaderboardlistcomponent <br><<component>>

    u ->> p: navigates to profile page

    alt user is not logged in
    p->> p: redirect to login page


    else user is logged in
    activate p

    p ->> us: getProfile(email) request current user profile
    us -->> p: returns user profile data

    p ->> uic: renderUserInfo(gamerTag, avatar, email)

    alt user updates profile
        u ->> uic: changes gamerTag or avatar
        uic ->> us: postProfile(gamerTag, avatar) submit updated profile
        uic ->> us: getProfile(email) request updated profile
        us -->> uic: returns updated profile
        uic ->> uic: update page with new avatar and gamerTag
    end

    p ->> ss: getScores("craps") request top 3 scores for craps
    ss -->> p: returns top 3 craps scores
    p ->> lc: renderLeaderboardList(craps scores)

    p ->> ss: getScores("yahtzee-count") request top 3 scores for yahtzee-count
    ss -->> p: returns top 3 yahtzee-count scores
    p ->> lc: renderLeaderboardList(yahtzee scores)

    p ->> ss: getScores("pig") request top 3 scores for pig
    ss -->> p: returns top 3 pig scores
    p ->> lc: renderLeaderboardList(pig scores)

    p -->> u: displays profile info and leaderboard results
    deactivate p
    end

%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
