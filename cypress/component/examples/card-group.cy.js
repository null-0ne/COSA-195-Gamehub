/*
    Filename:    card-group.cy.js
    Student:     
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Card Group Component
*/

import renderCardGroup from "../../../src/examples/components/card-group.js";

describe('productList component tests ', () => {
    it('displays 4 cards facedown', () => {

        const cardNums = [1,3,4,2]

        //render the component by itself in the /support/component-index.html using the fixtures test-products.json
        cy.mount(renderCardGroup, {params: {cards: cardNums, faceUp:false}});

        //generate the expected image srcs from the card numbers
        const expectedImgSrcs = cardNums.map((c) => `/images/img-${c}.svg` )

        //get all the card face images wait up to 6 seconds for items to render
        cy.get('div.card-face img', {timeout: 6000})
            .should(($items) => {
                //ensure only 4 list items exist
                expect($items).to.have.length(4);
                
                const actualImgSrcs =[]
                $items.each((i, img) => {
                    //ensure each item is NOT visible (face down)
                    expect(img).to.not.be.visible;
                    const actualImgSrcPath = (new URL(img.src)).pathname
                    console.log(actualImgSrcPath)
                    expect(actualImgSrcPath).to.eq(expectedImgSrcs[i]);
                });
            });

        //get all the card backs wait up to 6 seconds for items to render
        cy.get('div.card-back', {timeout: 6000})
            .should(($items) => {
                //ensure only 4 list items exist
                expect($items).to.have.length(4);
                
                $items.each((i, div) => {
                    //ensure each card back is visible (face down)
                    expect(div).to.be.visible;
                });
            });            
    })

    it('displays 4 cards face up', () => {

            const cardNums = [1,4,2,3]

            //render the component by itself in the /support/component-index.html using the fixtures test-products.json
            cy.mount(renderCardGroup, {params: {cards: cardNums, faceUp:true}});

            //generate the expected image srcs from the card numbers
            const expectedImgSrcs = cardNums.map((c) => `/images/img-${c}.svg` )

            //get all the card face images wait up to 6 seconds for items to render
            cy.get('div.card-face img', {timeout: 6000})
                .should(($items) => {
                    //ensure only 4 list items exist
                    expect($items).to.have.length(4);
                    const actualImgSrcs =[]
                    $items.each((i, img) => {
                        //ensure each item is visible (face up)
                        expect(img).to.be.visible;
                        const actualImgSrcPath = (new URL(img.src)).pathname
                        console.log(actualImgSrcPath)
                        expect(actualImgSrcPath).to.eq(expectedImgSrcs[i]);
                    });

                });

            //get all the card back divs wait up to 6 seconds for items to render
            cy.get('div.card-back', {timeout: 6000})
                .should(($items) => {
                    //ensure only 4 list items exist
                    expect($items).to.have.length(4);
                    
                    $items.each((i, div) => {
                        //ensure each card back is NOT visible (face up)
                        expect(div).to.not.be.visible;
                    });
                });      

    })
        
    it('flips cards when clicked', () => {

        const cardNums = [1,2] // really only need 1 card to test flip but 2 is more fun

        //render the component by itself in the /support/component-index.html using the fixtures test-products.json
        cy.mount(renderCardGroup, {params: {cards: cardNums, faceUp:false}});

        for(let i=0 ; i < cardNums.length; i++) {
            //ensure face down and click
            cy.get('.flippable-card').eq(i).children('.card-face').should('not.be.visible');
            cy.get('.flippable-card').eq(i).children('.card-back').should('be.visible');
            cy.get('.flippable-card').eq(i).should('not.have.class', 'face-up').click();

            //ensure face up and click
            cy.get('.flippable-card').eq(i).children('.card-face').should('be.visible');
            cy.get('.flippable-card').eq(i).children('.card-back').should('not.be.visible');
            cy.get('.flippable-card').eq(i).should('have.class', 'face-up').click();
            
            //ensure face down again
            cy.get('.flippable-card').eq(i).children('.card-face').should('not.be.visible');
            cy.get('.flippable-card').eq(i).children('.card-back').should('be.visible');
            cy.get('.flippable-card').eq(i).should('not.have.class', 'face-up')
        }

    })

})