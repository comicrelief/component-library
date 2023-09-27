describe('Membership component', () => {
  before(() => {
    // go to membership component
    cy.visit('/#membership');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#membership');
      cy.get('[data-testid="Membership-container"] button[name="rsg-usage"]')
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

  describe('Membership form align right section', () => {
    beforeEach(() => {
      cy.visit('/#membership');
      cy.get('[data-testid="Membership-example-1"]')
        .as('container')
        .find('[data-preview="Membership"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Membership form align right preview', () => {
      cy.get('@container')
        .find('input[id="mship-1--moneyBuy-box1"]')
        .should('exist');
      cy.get('@container')
        .find('input[id="mship-1--MoneyBuy-userInput"]')
        .type('25001');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter a number between 1 and 25000, and up to 2 decimal places');
      cy.get('@container')
        .find('input[id="mship-1--MoneyBuy-userInput"]')
        .type('1')
        .get('input[type="submit"]')
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

  describe('Membership form align left section', () => {
    beforeEach(() => {
      cy.visit('/#membership');
      cy.get('[data-testid="Membership-example-3"]')
        .as('container')
        .find('[data-preview="Membership"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Membership form align left preview', () => {
      cy.get('@container')
        .find('input[id="mship-1--moneyBuy-box3"]')
        .should('exist');
      cy.get('@container')
        .find('input[id="mship-1--MoneyBuy-userInput"]')
        .type('25001');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter a number between 1 and 25000, and up to 2 decimal places');
      cy.get('@container')
        .find('input[id="mship-1--MoneyBuy-userInput"]')
        .type('1')
        .get('input[type="submit"]')
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
