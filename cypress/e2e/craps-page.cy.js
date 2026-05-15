/*
    Filename:    
    Student:    Garrett Thomson
    Course:      COSA 195 (Systems Project)
    Date:        2026-05-15
    Purpose:     End To End test Craps Page
*/
describe("craps page test", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:5173/craps`); 
  });

  it("rolls dice when Roll button is clicked", () => {
    cy.get("#btnRoll").click();

    cy.wait(1200); // wait until animation is done

    cy.get("#img1")
      .invoke("attr", "src") // retrieving attribute & source
      .should("match", /dice[1-6]\.png$/); // img changed properly

    cy.get("#img2")
      .invoke("attr", "src")
      .should("match", /dice[1-6]\.png$/);
  });

  it("updates current roll total", () => {
    cy.get("#btnRoll").click();

    cy.wait(1200);

    cy.get("#gameColRow24").should("not.contain", "= 0");
  });

  it("updates games played record when game ends", () => {
    cy.get("#statsColRow41")
      .invoke("text") // getting text content
      .then((preGameText) => {
        // extract the number from the text for comparison
        const preGame = parseInt(preGameText.match(/\d+/)[0]);
        // preGame = 0

        function rollUntilGameEnds() {
          cy.get("#btnRoll").click();
          cy.wait(1200);
          cy.get("#statsColRow41")
            .invoke("text")
            .then((postText) => {
              const postGame = parseInt(postText.match(/\d+/)[0]);
              // postGame SHOULD = 1 if game is over

              if (preGame === postGame) {
                rollUntilGameEnds();
              } else {
                expect(postGame).to.equal(preGame + 1);
              }
            });
        }
        rollUntilGameEnds();
      });
  });

  it("resets text when 'reset button is clicked;", () => {

     cy.get("#btnRoll").click(); //roll dice
     cy.wait(1200);

    cy.get("#btnReset").click(); //click reset button

   

    cy.get("#gameColRow24")
      .invoke("text") 
      .should("match", /0/); // text changed properly

   
  });

  
});