describe('Pagination component', () => {
  before(() => {
  // go to pagination component
    cy.visit('/#pagination');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Pagination-container"] button[name="rsg-usage"]')
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

  describe('Pagination minimalist section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Pagination-example-1"]')
        .as('container')
        .find('[data-preview="Pagination"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should check minimalist section', () => {
      cy.get('[data-testid="Pagination-example-1"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-1"] ul')
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
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });

  describe('Pagination full size section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Pagination-example-3"]')
        .as('container')
        .find('[data-preview="Pagination"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('verifies full size pagination', () => {
      cy.get('[data-testid="Pagination-example-3"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-3"] ul')
        .should('exist');
      cy.get('[data-testid="Pagination-example-3"] [aria-label="First page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-3"] [aria-label="Previous page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-3"] [aria-label="Next page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-3"] [aria-label="Last page"]')
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
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });

  describe('Pagination custom style section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Pagination-example-5"]')
        .as('container')
        .find('[data-preview="Pagination"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should check custom style section exist', () => {
      cy.get('[data-testid="Pagination-example-5"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-5"] ul')
        .should('exist');
      cy.get('[data-testid="Pagination-example-5"] [aria-label="First page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-5"] [aria-label="Previous page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-5"] [aria-label="Last page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-5"] [aria-label="Next page"]')
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
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });

  describe('Pagination custom labels section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Pagination-example-7"]')
        .as('container')
        .find('[data-preview="Pagination"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('should check custom style section exist', () => {
      cy.get('[data-testid="Pagination-example-7"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-7"] ul')
        .should('exist');
      cy.get('[data-testid="Pagination-example-7"] [aria-label="First page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-7"] [aria-label="Previous page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-7"] [aria-label="Last page"]')
        .should('exist');
      cy.get('[data-testid="Pagination-example-7"] [aria-label="Next page"]')
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
      cy.get('@container')
        .find('textarea')
        .should('not.exist');
    });
  });
});
