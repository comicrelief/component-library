describe('Video Banner component', () => {
  before(() => {
    // go to video banner component
    cy.visit('/#videobanner');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="VideoBanner-container"] button[name="rsg-usage"]')
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

  describe('Video Banner section', () => {
    beforeEach(() => {
      cy.get('[data-testid="VideoBanner-example-0"]')
        .as('container')
        .find('[data-preview="VideoBanner"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders video banner preview', () => {
      cy.get('@container')
        .find('video')
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
    });
  });
});
