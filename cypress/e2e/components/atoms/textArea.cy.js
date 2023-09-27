describe('TextArea component', () => {
  before(() => {
    // go to text area component
    cy.visit('/#textarea');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="TextArea-container"] button[name="rsg-usage"]')
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

  describe('Text Area section', () => {
    beforeEach(() => {
      cy.get('[data-testid="TextArea-example-1"]')
        .as('container')
        .find('[data-preview="TextArea"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    //Long copy/Message field
    it('renders Long copy/Message field section', () => {
      cy.get('@container')
        .find('h4')
        .should('exist')
        .contains('Long copy/Message field');
      cy.get('@container')
        .find('label:nth-child(2) > textarea')
        .should('exist')
        .type('This is a test text');
    });

    //Long copy/Message field with error message
    it('renders Long copy/Message field with error message', () => {
      cy.get('@container')
        .find('h4')
        .should('exist')
        .contains('Long copy/Message field');
      cy.get('@container')
        .find('label:nth-child(4) > span')
        .should('exist')
        .contains('This is an error message');
      cy.get('@container')
        .find('label:nth-child(4) > textarea')
        .type('This is a test text 2')
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
