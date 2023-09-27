describe('Descriptor component', () => {
  before(() => {
    // go to descriptor component
    cy.visit('/#descriptor');
    cy.wait(2500)
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#descriptor');
      cy.get('[data-testid="Descriptor-container"] button[name="rsg-usage"]')
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

  describe('Descriptor section: Descriptor-example-1', () => {
    beforeEach(() => {
      cy.visit('/#descriptor');
      cy.get('[data-testid="Descriptor-examples"]')
        .find('h3')
        .contains('Descriptor Component');
      cy.get('[data-testid="Descriptor-example-1"]')
        .as('container')
        .find('[data-preview="Descriptor"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should have necessary elements under Descriptor-example-1', () => {
      cy.get('@container')
        .find('span')
        .contains('15/06/2020')
        .should('exist');
      cy.get('[data-testid="Descriptor-example-1"]')
        .find('img:nth-child(1)[alt]')
        .should('exist');
      cy.get('@container')
        .find('img:nth-child(2)[alt]')
        .should('exist');
      cy.get('@container')
        .find('span')
        .should('exist');
      cy.get('@container')
        .find('h3')
        .should('exist');
      cy.get('@container')
        .find('div:nth-child(4)')
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
  });

  describe('Descriptor section: Descriptor-example-2', () => {
    beforeEach(() => {
      cy.visit('/#descriptor');
      cy.get('[data-testid="Descriptor-examples"]')
        .find('h3')
        .contains('Descriptor Component');
      cy.get('[data-testid="Descriptor-example-2"]')
        .as('container')
        .find('[data-preview="Descriptor"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should have necessary elements under Descriptor-example-2', () => {
      cy.get('@container')
        .find('span')
        .contains('15/06/2020')
        .should('exist');
      cy.get('@container')
        .find('img:nth-child(1)[alt]')
        .should('exist');
      cy.get('@container')
        .find('img:nth-child(2)[alt]')
        .should('exist');
      cy.get('@container')
        .find('img:nth-child(3)[alt]')
        .should('exist');
      cy.get('@container')
        .find('span')
        .should('exist');
      cy.get('@container')
        .find('h3')
        .should('exist');
      cy.get('@container')
        .find('div:nth-child(4)')
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
  });
});
