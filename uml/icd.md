# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    class loginPage {
    <<view>>
        +renderLoginPage(element:HTMLElement,title:string,pageNum:int):HTMLElement
        +redirectToDashboard()
    }

    class registerPage {
    <<view>>
        +renderRegisterPage(element:HTMLElement,title:string):HTMLElement
        +redirectToDashboard()
    }


    %% Relationships
    loginPage --> userCredentials : fetches data
    registerPage --> userCredentials : fetches data

%%----- Services -----%%

class userCredentials{
    <<service>>
    +retrieveLogin(email: string, password: string) Object[]
    +register(email: string, password: string) Object[]
    +registerValidate(email: string, password: string) boolean
    +emailExists(email: string) boolean
}

%%----------------------- MERMAID MARKUP ABOVE --------------------%%    
```