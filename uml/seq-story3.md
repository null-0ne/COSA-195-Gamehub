# Simplified Sequence Diagram  : Shopper views a list of products

```mermaid
%%{init:{"securityLevel":"loose","layout":"elk","elk":{"nodePlacementStrategy":"NETWORK_SIMPLEX"},"theme":"base",
"themeVariables":{"primaryColor":"#EEE","primaryTextColor":"#009ABE","primaryBorderColor":"#732181","lineColor":"#009ABE","noteBorderColor":"#732181","noteBkgColor":"#F38A00","activationBkgColor":"#F38A00"    }
}}%%
%%----------------------- MERMAID MARKUP BELOW --------------------%%


sequenceDiagram
title: Simplified Shopper views a list of products

    actor u as Shopper
    participant p as ProductPage<br><<component>>
    participant s as ProductService<br><<service>>
    participant l as ProductList<br><<component>>
    participant f as Formatter<br><<untility>>

    u->>p: navigates to page
    activate p

    p->>p: renderProductPage(element,title,pageNum)
    
    p->>s: getProducts(textSearch,sortOrder,paging)
    activate s
    s-->>p: returns products:Product[]
    deactivate s

    Note over p, l: ProductList manages its own display logic
    p->>l: renderProductList(element,products)
    activate l
    
    loop for each product
        l->>f: formatCurrency(price)
        activate f
        f-->>l: formattedPrice:string
        deactivate f
    end
    
    l-->>p: Rendered List Component
    deactivate l

    p-->>u: Displays full Product Page
    deactivate p




%%----------------------- MERMAID MARKUP ABOVE --------------------%%
```
