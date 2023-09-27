describe('Button With States component', () => {
  before(() => {
    // go to Button With States component
    cy.visit('/#button');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#button');
      cy.get('[data-testid="ButtonWithStates-container"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    // button with Disabled and loading
    it('renders button with states', () => {
      cy.get('[data-testid="ButtonWithStates-examples"]')
        .find('h2')
        .contains('Disabled and loading')
        .should('exist');
    });

    it('renders button as disabled', () => {
      // verify button as a span
      cy.get('[data-testid="ButtonWithStates-example-1"]')
        .contains('Loading')
        .should('be.disabled');
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
