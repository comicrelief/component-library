describe('Search Input component', () => {
  before(() => {
    // go to search input component
    cy.visit('/#searchinput');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SearchInput-container"] button[name="rsg-usage"]')
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

  describe('Search Input section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SearchInput-example-1"]')
        .as('container')
        .find('[data-preview="SearchInput"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders search input preview', () => {
      cy.get('@container')
        .find('span')
        .should('exist')
        .contains('Search');
      cy.get('@container')
        .find('input')
        .type('test search');
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
