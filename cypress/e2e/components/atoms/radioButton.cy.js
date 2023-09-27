describe('Radio Button component', () => {
  before(() => {
    // go to radio button component
    cy.visit('/#radiobutton');
    cy.wait(2500)
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#radiobutton');
      cy.get('[data-testid="RadioButton-container"] button[name="rsg-usage"]')
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

  describe('Radio button section', () => {
    beforeEach(() => {
      cy.visit('/#radiobutton');
      cy.get('[data-testid="RadioButton-example-1"]')
        .as('container')
        .find('[data-preview="RadioButton"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders radio button preview', () => {
      cy.get('@container')
        .find('label')
        .first()
        .click();
      cy.get('@container')
        .find('label:nth-child(2)')
        .click();
      cy.get('@container')
        .find('label:nth-child(3)')
        .click();
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
