describe('SimpleSchoolLookup component', () => {
  before(() => {
    // go to simpleschoollookup component
    cy.visit('/#simpleschoollookup');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#simpleschoollookup');
      cy.get('[data-testid="SimpleSchoolLookup-container"] button[name="rsg-usage"]')
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
      cy.visit('/#simpleschoollookup');
      cy.get('[data-testid="SimpleSchoolLookup-examples"]')
        .as('container');

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

  describe('Simple School lookup functionality', () => {
    beforeEach(() => {
      cy.visit('/#simpleschoollookup');
      cy.get('[data-testid="SimpleSchoolLookup-example-0"]')
        .as('container')
        .find('[data-preview="SimpleSchoolLookup"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('it should show address when school postcode is entered', () => {
      cy.get('@container')
        .find('input#school_lookup')
        .type('RG1 4JJ')
        .get('[data-preview="SimpleSchoolLookup"] div > div > button')
        .should('exist');
    });
  });
});
