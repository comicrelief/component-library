describe('Accordion component', () => {
  before(() => {
    // go to accordion component
    cy.visit('/#accordion');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#accordion');
      cy.get('[data-testid="Accordion-container"] button[name="rsg-usage"]')
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

  describe('Accordion section', () => {
    beforeEach(() => {
      cy.visit('/#accordion');
      cy.get('[data-testid="Accordion-example-1"]')
        .as('container')
        .find('[data-preview="Accordion"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('clicking svg dropdown icon should element p', () => {
      cy.get('[data-testid="Accordion-example-1"] button > div').click();
      cy.get('p').should('exist');
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
