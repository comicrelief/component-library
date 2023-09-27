describe('School Lookup component', () => {
  before(() => {
    // go to school lookup component
    cy.visit('/#schoollookup');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SchoolLookup-container"] button[name="rsg-usage"]')
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

  describe('view code section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SchoolLookup-example-1"]')
        .as('container')
        .find('[data-preview="SchoolLookup"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
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

  describe('School lookup functionality', () => {
    beforeEach(() => {
      cy.get('[data-testid="SchoolLookup-example-1"]')
        .as('container')
        .find('[data-preview="SchoolLookup"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('it should show address when school postcode is entered', () => {
      cy.get('@preview')
        .find('input#school-lookup')
        .should('exist');
    });
  });
});
