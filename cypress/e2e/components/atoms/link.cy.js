describe('Link component', () => {
  before(() => {
    // go to link component
    cy.visit('/#link');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Link-container"] button[name="rsg-usage"]')
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

  describe('Link standard preview section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Link-example-0"]')
        .as('container')
        .find('[data-preview="Link"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders link standard section', () => {
      cy.get('[data-testid="Link-example-0"]')
        .should('exist');

      cy.get('[data-testid="Link-example-0"]')
        .first()
        .contains('Link standard')
        .should('exist');
      cy.get('[data-testid="Link-example-0"] div > div:nth-child(2) > a')
        .contains('Link standard icon')
        .should('exist');
      cy.get('[data-testid="Link-example-0"] div > div:nth-child(2) > a > span > svg')
        .should('exist');
      cy.get('[data-testid="Link-example-0"] div > div:nth-child(3) > a')
        .contains('Link standard white')
        .should('exist')
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

  describe('Iconography section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Link-example-2"]')
        .as('container')
        .find('[data-preview="Link"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders link Iconography section', () => {
      cy.get('[data-testid="Link-example-2"]')
        .should('exist');

      cy.get('[data-testid="Link-example-2"]')
        .first()
        .contains('Internal link')
        .should('exist');
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(2) > a')
        .contains('External link')
        .should('exist');
      //check icon exist
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(2) > a > span > svg')
        .should('exist');
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(3) > a')
        .contains('Download link')
        .should('exist');
      //check icon exist
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(3) > a > span > svg')
        .should('exist');
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(4) > a')
        .contains('Favourite link')
        .should('exist');
      //check icon exist
      cy.get('[data-testid="Link-example-2"] div > div:nth-child(4) > a > span > svg')
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

  describe('Link as button section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Link-example-3"]')
        .as('container')
        .find('[data-preview="Link"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders link as buttons section', () => {
      cy.get('[data-testid="Link-example-3"]')
        .should('exist');

      //verify all button colors
      cy.get('[data-testid="Link-example-3"] div > div:nth-child(1) > a[color="black"]')
        .contains('Link as button')
        .should('exist');
      cy.get('[data-testid="Link-example-3"] div > div:nth-child(2) > a[color="red"]')
        .contains('Link as button')
        .and('exist');
      cy.get('[data-testid="Link-example-3"] div > div:nth-child(3) > a[color="yellow"]')
        .should('exist');
      cy.get('[data-testid="Link-example-3"] div > div:nth-child(4) > a[color="yellow_light"]')
        .contains('Link as button')
        .should('exist');
      cy.get('[data-testid="Link-example-3"] div > div:nth-child(5) > a[color="yellow_dark"]')
        .contains('Link as button')
        .should('exist');
      cy.get('[data-testid="Link-example-3"] div:nth-child(6) > div:nth-child(1) > a[color="grey"] ')
        .contains('Link as button')
        .should('exist');
      cy.get('[data-testid="Link-example-3"] div > div > div:nth-child(6) > a[color="transparent"]')
        .contains('Link as transparent button')
        .should('exist');
      cy.get('[data-testid="Link-example-3"]  div:nth-child(3) > a[color="white"]')
        .contains('White button')
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
