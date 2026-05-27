# Simplified Sequence Diagram  : Shopper views a list of products

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%


sequenceDiagram
title: Register Page

    actor u as User
    participant r as RegisterPage<br><<component>>
    participant c as UserService<br><<service>> 
    

    u->>r: navigates to register page
    activate r
    r->>r: renderRegisterPage(element:HTMLElement,title:string,pageNum:int)
    alt Click Sign Up
        r->>r: registerValidate(email: string, password: string)
        alt Validation Successful
            r->>c: register(email: string, password: string)
        activate c
            c-->>r: user:User
        deactivate c
            r->>u: redirectToDashboard()
            
    deactivate r
            
        
        end
    end
    




%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
