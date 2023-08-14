describe('Single Message Ds component', () => {
  before(() => {
    // go to single message Ds component
    cy.visit('/#singlemessageds');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-container"] button[name="rsg-usage"]')
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

  describe('SingleMessageDs-example-1: Image align left and CTA are clickable', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-example-1"]')
        .as('container')
        .find('[data-preview="SingleMessageDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders image align left and CTA are clickable', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h4')
        .contains('Heading Line 1 Heading Line 2');
      cy.get('@container')
        .find('p')
        .should('exist');
      cy.get('@container')
        .find('a')
        .contains('Check out')
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

  describe('SingleMessageDs-example-3: Image align right and CTA are clickable', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-example-3"]')
        .as('container')
        .find('[data-preview="SingleMessageDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders image align right and CTA are clickable', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h4')
        .contains('Heading Line 1 Heading Line 2');
      cy.get('@container')
        .find('p')
        .should('exist');
      cy.get('@container')
        .find('a')
        .contains('Check out');
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

  describe('SingleMessageDs-example-5: SingleMessageDs-example-5', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-example-5"]')
        .as('container')
        .find('[data-preview="SingleMessageDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders SingleMessageDs-example-5', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h4')
        .contains('Heading Line 1 Heading Line 2')
        .should('exist');
      cy.get('@container')
        .find('p')
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

  describe('SingleMessageDs-example-7: Using the linkIcon prop', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-example-7"]')
        .as('container')
        .find('[data-preview="SingleMessageDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Using the linkIcon prop', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
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

  describe('SingleMessageDs-example-9: Video with no CTA', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessageDs-example-9"]')
        .as('container')
        .find('[data-preview="SingleMessageDs"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message vertical height preview', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
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
