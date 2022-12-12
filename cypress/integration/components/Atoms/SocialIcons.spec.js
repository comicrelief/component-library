describe('SocialIcons component', () => {
  before(() => {
    // go to social icons component
    cy.visit('/#socialicons');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SocialIcons-container"] button[name="rsg-usage"]')
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

  describe('Comic Relief social icons section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SocialIcons-example-1"]')
        .as('container')
        .find('[data-preview="SocialIcons"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('checks comic relief social icons', () => {
      cy.get('@container')
        .find('a')
        .first()
        .should('have.attr', 'href', 'https://www.facebook.com/comicrelief');
      cy.get('@container')
        .find('li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://twitter.com/comicrelief');
      cy.get('@container')
        .find('li:nth-child(3) > a')
        .should('have.attr', 'href', 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw');
      cy.get('@container')
        .find('li:nth-child(4) > a')
        .should('have.attr', 'href', 'https://www.instagram.com/comicrelief');
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

  describe('Red Nose Day social icons section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SocialIcons-example-3"]')
        .as('container')
        .find('[data-preview="SocialIcons"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('checks Red Nose Day social icons', () => {
      cy.get('@container')
        .find('a')
        .first()
        .should('have.attr', 'href', 'https://www.facebook.com/rednoseday');
      cy.get('@container')
        .find('li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://twitter.com/rednoseday');
      cy.get('@container')
        .find('li:nth-child(3) > a')
        .should('have.attr', 'href', 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw');
      cy.get('@container')
        .find('li:nth-child(4) > a')
        .should('have.attr', 'href', 'https://www.instagram.com/rednoseday');
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

  describe('Sport Relief social icons section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SocialIcons-example-5"]')
        .as('container')
        .find('[data-preview="SocialIcons"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('checks Sport Relief social icons', () => {
      cy.get('@container')
        .find('a')
        .first()
        .should('have.attr', 'href', 'https://www.facebook.com/sportrelief');
      cy.get('@container')
        .find('li:nth-child(4) > a')
        .should('have.attr', 'href', 'https://www.instagram.com/sportrelief');
      cy.get('@container')
        .find('li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://twitter.com/sportrelief');
      cy.get('@container')
        .find('li:nth-child(3) > a')
        .should('have.attr', 'href', 'https://www.youtube.com/channel/UCdF5u0ggeSETozc8fsprjcw');
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
