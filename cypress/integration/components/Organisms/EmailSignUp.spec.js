describe('Email Sign Up component', () => {
  before(() => {
    // go to Email Sign Up component
    cy.visit('/#emailsignupform');
    cy.wait(2500);
  });

  describe('Email Sign Up section', () => {
    beforeEach(() => {
      cy.get('[data-testid="EmailSignUpForm-example-1"]')
        .as('container')
        .find('[data-preview="EmailSignUpForm"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Email Sign Up preview', () => {
      cy.get('@container')
        .find('h2')
        .should('exist')
        .contains('Stay in the know!');
      cy.get('@container')
        .find('p')
        .contains("Get regular email updates and info on what we're up to!");
      cy.get('[data-test="subscribe-button"]').should('be.disabled');
      cy.get('@container').find('input[id="first-name"]').type('Test');
      cy.get('@container').find('input[id="last-name"]').type('User');
      cy.get('@container')
        .find('input[id="email"]')
        .type('test@comicrelief.com')
        .blur();
      cy.get('[data-test="subscribe-button"]').should('not.be.disabled');
      cy.get('[data-test="subscribe-button"]').click();

      cy.get('@container').contains(
        'Thanks! Your first email will be with you shortly'
      );
    });

    it('has view code button', () => {
      cy.get('@viewCodeBtn').should('exist');
    });

    it('shows code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container').find('textarea').should('exist');
    });

    it('closes code on click', () => {
      cy.get('@viewCodeBtn').click();
    });
  });
});
