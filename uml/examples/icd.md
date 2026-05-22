# UML Class Diagram for Examples

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#732181","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%
classDiagram
%%  direction LR

    class ProductPage {
        +renderProductPage(element:HTMLElement,title:string,pageNum:int):HTMLElement
    }
    
    class CounterPage {
        +renderCounterPage(element:HTMLElement,title:string):HTMLElement
        +handleIncrement()
    }

    class MemoryPage {
        +renderMemoryPage(element:HTMLElement,title:string):HTMLElement
    }

    class NavBar {
        +renderNavBar(element:HTMLElement,params:Object):HTMLElement
    }

    class CardGroup {
        +renderCardGroup(element:HTMLElement,cards:int[],faceUp:bool):HTMLElement
    }

    class Counter {
        +renderCounter(element:ButtonElement,count:int,incr:Function):ButtonElement
    }

    class ProductList {
        +renderProductList(element:HTMLElement,products:Product[])
    }

    class ProductService {
        +getProducts(textSearch:string,sortOrder:string,paging:Object)
    }

    class Formatter {
        +formatCurrency(price:decimal)
        +formatDate(date:Date)
    }

    %% Relationships
    NavBar <-- ProductPage : layout
    NavBar <-- CounterPage : layout
    NavBar <-- MemoryPage : layout
    
    ProductPage --> ProductService : fetches data
    ProductPage --> ProductList : uses
    CounterPage --> Counter : uses
    MemoryPage --> CardGroup : contains
    ProductList --> Formatter : formats prices
    



%%----------------------- MERMAID MARKUP ABOVE --------------------%%    
```