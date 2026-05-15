/*
    Filename:    leaderboard-list.cy.js

    Course:      COSA 195 (Systems Project)
    Date:        2026-05-01
    Purpose:     Test Leaderboard List  Component
*/
import renderProductList from "../../../src/examples/components/leaderboard-list.js";
import testLeaderboards from '../../fixtures/examples/test-leaderboards.json';
// import {formatCurrency} from '../../../src/examples/lib/formatter.js';

describe('productList component tests ', () => {
    it('displays the products accurately when loaded', () => {

        //render the component by itself in the /support/component-index.html using the fixtures test-products.json
        cy.mount(renderProductList, {params: {score: testleaderboards}});

        //NOTE: vanilla JS map function - use the test-products.json to generate the expected html for each list item
        // using innerHTML is overkill for most test unless you are enforcing exacting styles
        const expectedLeaderboardHTMLs = testLeaderboards.map(p => `
        <div class="ms-2 me-auto">
        <div class="fw-bold">${p.user.id}</div>
        ${p.score}
        </div>
        <span class="badge bg-primary rounded-pill">${p.score}</span>
    `)

        // get the actual html from the rendered component and compare with expected
        //get all the list items <li> in the list <ol> wait up to 3 seconds for items to render
        cy.get('li', {timeout: 3000})
            .should(($items) => {
                //ensure only 3 list items exist
                expect($items).to.have.length(3);

                //NOTE: JQuery map function - get the innerHTML of each list item (could use innerText for less strict tests)
                const actualLeaderboardHTMLs = $items.map((i, li) => li.innerHTML)
                    .get(); // .get() returns JS Array instead of JQuery

                //ensure each actual item html to equal the expected html
                expect(actualLeaderboardHTMLs).to.deep.eq(expectedLeaderboardHTMLs);

            });
    })
})