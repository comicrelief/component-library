describe('CardDs component', () => {
  before(() => {
    // go to cardDs component
    cy.visit('/#cardds');
    cy.wait(2500);
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="CardDs-container"] button[name="rsg-usage"]')
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

  describe('CardDs image and CTA section', () => {
    beforeEach(() => {
      cy.get('[data-testid="CardDs-example-1"]')
        .as('container')
        .find('[data-preview="CardDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders cardDs image and CTA preview', () => {
      cy.get('@container')
        .find('h3')
        .should('exist')
        .contains('Title');
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Text body copy description');
      cy.get('@container')
        .find('a')
        .should('exist')
        .contains('find out more');
      cy.get('@container')
        .find('img')
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

  describe('CardDs no Image with link section', () => {
    beforeEach(() => {
      cy.get('[data-testid="CardDs-example-3"]')
        .as('container')
        .find('[data-preview="CardDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders card no image with link preview', () => {
      cy.get('@container')
        .find('h3')
        .should('exist')
        .contains('Title');
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Text body copy description');
      cy.get('@container')
        .find('a')
        .should('exist')
        .contains('find out more');
      cy.get('@container')
        .find('img')
        .should('not.exist');
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

  describe('CardDs no image no link section', () => {
    beforeEach(() => {
      cy.get('[data-testid="CardDs-example-5"]')
        .as('container')
        .find('[data-preview="CardDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders cardDs no image no link preview', () => {
      cy.get('@container')
        .find('h3')
        .should('exist')
        .contains('Title');
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Text body copy description');
      cy.get('@container')
        .find('img')
        .should('not.exist');
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

  describe('CardDs image, text, no link', () => {
    beforeEach(() => {
      cy.get('[data-testid="CardDs-example-6"]')
        .as('container')
        .find('[data-preview="CardDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders cardDs image and CTA preview', () => {
      cy.get('@container')
        .find('h3')
        .should('exist')
        .contains('Title');
      cy.get('@container')
        .find('p')
        .should('exist')
        .contains('Text body copy description');
      cy.get('@container')
        .find('img')
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
