# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    class CrapsPage {
        renderCrapsPage(element:HTMLElement,title:string)
    }
    class YahtzeeCountPage {
        renderYahtzeeCountPage(element:HTMLElement,title:string)
    }
    class NavBar {
        renderNavBar(element:HTMLElement,params:Object)
    }
    class HelpSlider {
        renderhelpInfo(params:string)
    }

%%  direction LR

    class LoginPage {
    <<view>>
        +renderLoginPage(element:HTMLElement,title:string,pageNum:int):HTMLElement
        +redirectToDashboard()
    }

    class RegisterPage {
    <<view>>
        +renderRegisterPage(element:HTMLElement,title:string):HTMLElement
        +redirectToDashboard()
    }


    %% Relationships
    LoginPage --> UserService : fetches data
    RegisterPage --> UserService : fetches data
    NavBar <-- CrapsPage : layout
    NavBar <-- YahtzeeCountPage : layout
    YahtzeeCountPage --> HelpSlider: uses
    CrapsPage --> HelpSlider: uses

%%----- Services -----%%

class UserService{
    <<service>>
    +retrieveLogin(email: string, password: string) Object[]
    +register(email: string, password: string) Object[]
    +registerValidate(email: string, password: string) boolean
}

%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
