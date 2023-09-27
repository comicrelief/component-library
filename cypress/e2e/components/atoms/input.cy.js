describe('Input component', () => {
  before(() => {
    // go to input component
    cy.visit('/#input');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#input');
      cy.get('[data-testid="Input-container"] button[name="rsg-usage"]')
        .contains('Props & methods')
        .as('propsBtn');

      cy.get('@propsBtn')
        .closest('[class^=rsg--tabs]')
        .as('container');
    });

    it('is present', () => {
      cy.get('@propsBtn').should('exist');
    });

    it('does not show table initially', () => {
      cy.get('@container')
        .find('table')
        .should('not.exist');
    });

    it('shows the table on button click', () => {
      cy.get('@propsBtn').click();
      cy.get('@container')
        .find('table')
        .should('contain', 'Prop name');
    });
  });

  describe('Input preview section: required with label and hint', () => {
    beforeEach(() => {
      cy.visit('/#input');
      cy.get('[data-testid="Input-example-0"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Input field required with label and hint', () => {
      cy.get('[data-testid="Input-examples"]')
        .should('exist');

      // Input required with label and hint
      cy.get('@container')
        .find('h4')
        .contains('Input required with label and hint')
        .should('exist');
      cy.get('[data-testid="Input-example-0"] [data-preview="Input"] input')
        .type('test input field');
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

  describe('Input preview section: with error message', () => {
    beforeEach(() => {
      cy.visit('/#input');
      cy.get('[data-testid="Input-example-1"]')
        .as('container')
        .find('[data-preview="Input"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Input field with error message', () => {
      // Input with error message
      cy.get('[data-testid="Input-example-1"] div > h4')
        .contains('Input with error message')
        .should('exist');
      cy.get('[data-testid="Input-example-1"] [data-preview="Input"] input')
        .type('test error input field');
    });

    it('shows error message', () => {
      cy.get('@container')
        .find('[data-test="error-message"]')
        .should('exist');
    });

    it('has view code button', () => {
      cy.get('@viewCodeBtn').should('exist');
    });

    it('does not show code initially', () => {
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });

    it('shows code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container')
        .find('textarea')
        .should('exist');
    });
  });

  describe('Input preview section: with simple input(optional)', () => {
    beforeEach(() => {
      cy.visit('/#input');
      cy.get('[data-testid="Input-example-2"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Input field with simple input', () => {
      // Input with simple input
      cy.get('[data-testid="Input-example-2"] div > h4')
        .contains('Simple input (optional)')
        .should('exist');
      cy.get('[data-testid="Input-example-2"] [data-preview="Input"] input')
        .type('test simple input field');
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
