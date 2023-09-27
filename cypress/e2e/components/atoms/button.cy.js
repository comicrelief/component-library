describe('Button component', () => {
  before(() => {
    // go to button component
    cy.visit('/#button');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#button');
      cy.get('[data-testid="Button-container"] button[name="rsg-usage"]')
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

  describe('Plain Button: Button-example-0', () => {
    beforeEach(() => {
      cy.visit('/#button');
      cy.get('[data-testid="Button-example-0"')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders button as a span', () => {
      //verify button as a span
      cy.get('[data-testid="Button-example-0"]')
        .contains('My button')
        .should('exist');
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

  describe('Button as a span: Button-example-1', () => {
    beforeEach(() => {
      cy.visit('/#button');
      cy.get('[data-testid="Button-example-1"]')
        .as('container')
        .find('[class^=rsg--preview]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders button as a span', () => {
        // verify button as a span
      cy.get('[data-testid="Button-example-1"]')
        .contains('My button as a span')
        .should('exist');
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
