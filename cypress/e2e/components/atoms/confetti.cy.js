describe('Confetti component', () => {
  before(() => {
    // go to confetti component
    cy.visit('/#confetti');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#confetti');
      cy.get('[data-testid="Confetti-container"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders button with states', () => {
      cy.get('[data-testid="Confetti-examples"]')
        .find('h1')
        .contains('Confetti')
        .should('exist');
    });

    it('renders confetti when "trigger confetti" is clicked', () => {
      // verify button as a span
      cy.get('[data-testid="Confetti-example-1"]')
        .contains('trigger confetti')
        .click()
    });

    it('has view code button', () => {
      cy.get('@viewCodeBtn').should('exist');
    });

    it('shows code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container')
        .find('textarea')
        .should('exist');
    });
  });
});
