# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    class loginPage {
        +renderProductPage(element:HTMLElement,title:string,pageNum:int):HTMLElement
    }

    class registerPage {
        +renderCounterPage(element:HTMLElement,title:string):HTMLElement
    }



    %% Relationships
    
    

%%----- Services -----%%

class userCredentials{
    <<service>>
    +retrieveLogin(email: string, password: string) Object[]
    +register(email: string, password: string) Object[]
}

%%----------------------- MERMAID MARKUP ABOVE --------------------%%    
```