describe('Video Banner component', () => {
  before(() => {
    // go to video banner component
    cy.visit('/#videobanner');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#videobanner');
      cy.get('[data-testid="VideoBanner-container"] button[name="rsg-usage"]')
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

  describe('VideoBanner-example-1: Default Video Banner', () => {
    beforeEach(() => {
      cy.visit('/#videobanner');
      cy.get('[data-testid="VideoBanner-example-1"]')
        .as('container')
        .find('[data-preview="VideoBanner"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders video banner preview', () => {
      cy.get('@container')
        .find('video')
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

  describe('VideoBanner-example-3: Looping Video Banner With Controls', () => {
    beforeEach(() => {
      cy.visit('/#videobanner');
      cy.get('[data-testid="VideoBanner-example-3"]')
        .as('container')
        .find('[data-preview="VideoBanner"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders looping Video Banner With Controls preview', () => {
      cy.get('@container')
        .find('video')
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

  describe('VideoBanner-example-5: Non-autoplay Video Banner', () => {
    beforeEach(() => {
      cy.visit('/#videobanner');
      cy.get('[data-testid="VideoBanner-example-5"]')
          .as('container')
          .find('[data-preview="VideoBanner"]')
          .as('preview');

      cy.get('@container')
          .find('button')
          .contains('View Code')
          .as('viewCodeBtn');
    });

    it('renders Non-autoplay Video Banner preview', () => {
      cy.get('@container')
          .find('video')
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
