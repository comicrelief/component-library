describe('Box component', () => {
  before(() => {
    // go to box component
    cy.visit('/#box');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Box-container"] button[name="rsg-usage"]')
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

  describe('Box example 1 section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Box-example-1"]')
        .as('container')
        .find('[data-preview="Box"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders box preview', () => {
      cy.get('@container')
        .find('h3')
        .should('exist')
        .contains('Title');
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Text body copy description');
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

  describe('Box example 3 section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Box-example-3"]')
        .as('container')
        .find('[data-preview="Box"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders box preview', () => {
      cy.get('@container')
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
