describe('Donate component', () => {
  before(() => {
    // go to donate component
    cy.visit('/#donate');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Donate-container"] button[name="rsg-usage"]')
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

  describe('Donate Form align right section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Donate-example-1"]')
        .as('container')
        .find('[data-preview="Donate"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders donate form align right preview', () => {
      // monthly
      cy.get('@container')
        .find('label[for="give-once--mship-1"]')
        .contains('Single');
      cy.get('@container')
        .find('label[for="give-monthly--mship-1"]')
        .contains('Monthly')
        .click();
      cy.get('@container')
        .find('#mship-1--moneyBuy-box2')
        .should('exist')
        .click();
      cy.get('@container')
        .find('[id="mship-1--MoneyBuy-userInput"]')
        .should('have.value', '10')
        .clear()
        .type('15.99')
        .clear()
        .type(' ');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('[id="mship-1--MoneyBuy-userInput"]')
        .type('15.999');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('form > fieldset > input')
        .contains('Donate monthly');
      cy.get('@container')
        .find('h2')
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

  describe('Donate Form align left section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Donate-example-3"]')
        .as('container')
        .find('[data-preview="Donate"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders donate form align left preview', () => {
      cy.get('@container')
        .find('label[for="give-once--mship-2"]')
        .contains('Single');
      cy.get('@container')
        .find('label[for="give-monthly--mship-2"]')
        .contains('Monthly');
      cy.get('@container')
        .find('#mship-2--moneyBuy-box2')
        .should('exist')
        .click();
      cy.get('@container')
        .find('[id="mship-2--MoneyBuy-userInput"]')
        .should('have.value', '20')
        .clear()
        .type(' ');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('[id="mship-2--MoneyBuy-userInput"]')
        .type('10.999');
      cy.get('@container')
        .find('p.error--amount')
        .should('contain', 'Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('form > fieldset > input')
        .contains('Donate now');
      cy.get('@container')
        .find('h2')
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

  describe('Single Giving section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Donate-example-5"]')
        .as('container')
        .find('[data-preview="Donate"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Single Giving preview', () => {
      cy.get('@container')
        .find('label[for="give-once"]')
        .should('not.exist');
      cy.get('@container')
        .find('#mship-3--moneyBuy-box3')
        .should('exist')
        .click();
      cy.get('@container')
        .find('[id="mship-3--MoneyBuy-userInput"]')
        .should('have.value', '30')
        .clear()
        .type('10.99')
        .clear()
        .type(' ');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('[id="mship-3--MoneyBuy-userInput"]')
        .type('10.999');
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('form > fieldset > input')
        .contains('Donate now');
      cy.get('@container')
        .find('h2')
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

  describe('Single Giving "No Money Buys" section', () => {
    beforeEach(() => {
      cy.get('[data-testid="Donate-example-7"]')
        .as('container')
        .find('[data-preview="Donate"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders Single Giving "No Money Buys" preview', () => {
      cy.get('@container')
        .find('label[for="give-once"]')
        .should('not.exist');
      cy.get('@container')
        .find('#mship-4--moneyBuy-box1')
        .should('not.exist');
      cy.get('@container')
        .find('[id="mship-4--MoneyBuy-userInput"]')
        .should('exist')
        .clear()
        .type('5')
        .clear();
      cy.get('@container')
        .find('p.error--amount')
        .contains('Please enter an amount between £1 and £25000 and up to 2 decimal places');
      cy.get('@container')
        .find('[id="mship-4--MoneyBuy-userInput"]')
        .type('10.999')
        .clear()
        .type('5')
        .should('not.have', 'Please enter an amount between £1 and £250000 and up to 2 decimal places');
      cy.get('@container')
        .find('form > fieldset > input')
        .contains('Donate');
      cy.get('@container')
        .find('h2')
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
