describe('Card component', () => {
  before(() => {
    // go to card component
    cy.visit('/#card');
    cy.wait(2500)
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Card-container"] button[name="rsg-usage"]')
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

  describe('Card example 1 section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Card-example-1"]')
        .as('container')
        .find('[data-preview="Card"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders card preview', () => {
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

    it('closes code on click', () => {
      cy.get('@viewCodeBtn').click();
    });
  });

  describe('Card no body section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Card-example-3"]')
        .as('container')
        .find('[data-preview="Card"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders card no body preview', () => {
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

    it('closes code on click', () => {
      cy.get('@viewCodeBtn').click();
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });
});
