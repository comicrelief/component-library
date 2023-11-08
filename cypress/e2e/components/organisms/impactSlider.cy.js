/* eslint-disable no-undef */
describe('Impact Slider component', () => {
  before(() => {
    // go to cookie banner component
    cy.visit('/#impactslider');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#impactslider');
      cy.get('[data-testid="ImpactSlider-container"] button[name="rsg-usage"]')
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

  describe('Check test values and interaction', () => {
    beforeEach(() => {
      cy.visit('/#impactslider');
      cy.get('[data-testid="ImpactSlider-example-1"]')
        .as('sliderOne');

      cy.get('@sliderOne')
        .find('[data-testid="impact-slider--moneybuy-1"]')
        .as('moneybuy1');

      cy.get('@sliderOne')
        .find('[data-testid="impact-slider--moneybuy-2"]')
        .as('moneybuy2');

      cy.get('@sliderOne')
        .find('[data-testid="impact-slider--moneybuy-3"]')
        .as('moneybuy3');

      cy.get('@sliderOne')
        .find('[data-testid="impact-slider--moneybuy-4"]')
        .as('moneybuy4');

      cy.get('@sliderOne')
        .find('.range-slider__thumb[data-upper="true"]')
        .as('sliderThumb');
    });

    it('All moneybuys are present with default values', () => {
      cy.get('@moneybuy1').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '5');
      cy.get('@moneybuy2').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      cy.get('@moneybuy3').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      cy.get('@moneybuy4').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
    });
  });
});
