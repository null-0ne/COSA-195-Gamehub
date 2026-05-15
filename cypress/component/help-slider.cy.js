import renderHelpSlider from "../../src/components/help-slider.js";

describe('productList component tests ', () => {
    it('Help icon visible', () => {
        cy.mount(renderHelpSlider, {element: {params: "<p>Test</p>"}});
    })
})