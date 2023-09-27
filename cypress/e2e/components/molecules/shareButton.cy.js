describe('Share Button component', () => {
  before(() => {
    // go to share button component
    cy.visit('/#sharebutton');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#sharebutton');
      cy.get('[data-testid="ShareButton-container"] button[name="rsg-usage"]')
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

  describe('Share Button section', () => {
    beforeEach(() => {
      cy.visit('/#sharebutton');
      cy.get('[data-testid="ShareButton-example-0"]')
        .as('container')
        .find('[data-preview="ShareButton"]')
        .as('preview');
      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Share Button preview', () => {
      cy.get('@container')
        .find('p')
        .contains('Share with:');
      cy.get('@container')
        .find('ul > li:nth-child(1) > a')
        .should('exist');
      cy.get('@container')
        .find('ul > li:nth-child(2) > a')
        .should('exist');
      cy.get('@container')
        .find('div:nth-child(2) > p')
        .contains('Share some other page:');
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
