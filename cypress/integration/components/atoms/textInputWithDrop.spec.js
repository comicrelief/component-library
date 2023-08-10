describe('Text Input With Dropdown component', () => {
  before(() => {
    // go to textinputwithdropdown component
    cy.visit('/#textinputwithdropdown');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="TextInputWithDropdown-container"] button[name="rsg-usage"]')
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

  describe('TextInputWithDropdown section', () => {
    beforeEach(() => {
      cy.get('[data-testid="TextInputWithDropdown-examples"]')
        .as('container')
        .find('[data-preview="TextInputWithDropdown"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders text input with dropdown field section', () => {
      cy.get('@container')
        .find('h1')
        .should('exist')
        .contains('TextInputWithDropdown');
      cy.get('@container')
        .find('#input-with-dropdown')
        .should('exist')
        .type('This is a test text');
      cy.get('@container')
        .find('ul > li:nth-child(2)') // first option
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

    it('closes code on click', () => {
      cy.get('@viewCodeBtn').click();
    });
  });
});
