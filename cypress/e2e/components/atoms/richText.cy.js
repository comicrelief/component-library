describe('RichText component', () => {
  before(() => {
    // go to rich text component
    cy.visit('/#richtext');
    cy.wait(2500)
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#richtext');
      cy.get('[data-testid="RichText-container"] button[name="rsg-usage"]')
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

  describe('Rich text section', () => {
    beforeEach(() => {
      cy.visit('/#richtext');
      cy.get('[data-testid="RichText-example-1"]')
        .as('container')
        .find('[data-preview="RichText"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should check rich text section', () => {
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Some strong test markup')
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
