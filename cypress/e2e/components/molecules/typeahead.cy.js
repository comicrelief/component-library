describe('Typeahead component', () => {
  before(() => {
    // go to typeahead component
    cy.visit('/#typeahead');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Typeahead-container"] button[name="rsg-usage"]')
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
      cy.get('[data-testid="Typeahead-example-1"]')
        .as('container')
        .find('[data-preview="Typeahead"]')
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

  describe('Typeahead functionality', () => {
    beforeEach(() => {
      cy.get('[data-testid="Typeahead-example-1"]')
        .as('container')
        .find('[data-preview="Typeahead"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should verify typeahead functionality', () => {
      cy.get('@container')
        .find('#typeahead-test')
        .clear()
        .type('house')
        .get('@container')
        .find('ul > li:nth-child(1) span')
        .contains('house')
        .get('@container')
        .find('#typeahead-test')
        .clear();

      cy.get('@container')
        .find('#typeahead-test')
        .type('&6585*()')
        .get('@container')
        .find('span[data-test="error-message"] span')
        .contains('Sorry, we couldn\'t find anything');
    });
  });
});
