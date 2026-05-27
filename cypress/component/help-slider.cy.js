import renderHelpSlider from "../../src/components/help-slider.js";

describe('Help Slider Component Test ', () => {
    it('Help icon visible', () => {
        cy.mount(renderHelpSlider, {params: {text: "Test"}});
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
    })
        it('Help icon Information is visible when button is clicked', () => {
        cy.mount(renderHelpSlider, {params: {text: "Test"}});
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
        cy.get("#HelpIcon").click();
        cy.get("#offcanvasRightLabel").should("be.visible");
        cy.get(".offcanvas-body").should("be.visible");
    })
    it('Help icon Information is not visible when anypart of site is clicked except for the offcanvas', () => {
        cy.mount(renderHelpSlider, {params: {text: "Test"}});
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
        cy.get("#HelpIcon").click();
        cy.get("#offcanvasRightLabel").should("be.visible");
        cy.get(".offcanvas-body").should("be.visible");
        cy.get("body").click('left');
        cy.get("#HelpIcon").should("be.visible");
        cy.get("#offcanvasRightLabel").should("not.be.visible");
        cy.get(".offcanvas-body").should("not.be.visible");
    })
})