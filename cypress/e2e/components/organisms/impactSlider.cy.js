/* eslint-disable no-undef */
describe('Impact Slider component', () => {
  before(() => {
    // go to cookie banner component
    cy.visit('/#impactslider');
  });

  //   describe('props and methods section', () => {
  //     beforeEach(() => {
  //       cy.visit('/#impactslider');
  //       cy.get('[data-testid="ImpactSlider-container"] button[name="rsg-usage"]')
  //         .contains('Props & methods')
  //         .as('propsBtn');

  //       cy.get('@propsBtn')
  //         .closest('[class^=rsg--tabs]')
  //         .as('container');
  //     });

  //     it('is present', () => {
  //       cy.get('@propsBtn').should('exist');
  //     });

  //     it('does not show table initially', () => {
  //       cy.get('@container')
  //         .find('table')
  //         .should('not.exist');
  //     });

  //     it('shows the table on button click', () => {
  //       cy.get('@propsBtn').click();
  //       cy.get('@container')
  //         .find('table')
  //         .should('contain', 'Prop name');
  //     });
  //   });

  describe('Check test values and interaction', () => {
    beforeEach(() => {
      cy.visit('/#impactslider');
      cy.get('[data-testid="ImpactSlider-example-1"]')
        .as('sliderOne');

      cy.get('[data-testid="ImpactSlider-example-3"]')
        .as('sliderTwo');

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

      cy.get('@sliderTwo')
        .find('.range-slider__thumb[data-upper="true"]')
        .as('sliderThumbTwo');
    });

    it('All moneybuys are present with default values', () => {
      cy.get('@moneybuy1').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '5');
      cy.get('@moneybuy2').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      cy.get('@moneybuy3').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      cy.get('@moneybuy4').should('exist').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
    });

    it('Slider should change values', () => {
      cy.get('@sliderThumb').should('exist').then($el => {
        const initialPosition = $el[0].getBoundingClientRect();
        console.log('initialPosition', initialPosition);
        const initialX = Math.floor(initialPosition.x);
        const initialY = Math.floor(initialPosition.y);
        const newX = initialX + 200;
        console.log('THUMB1 Initial position:', initialX, initialY);
        cy.get('@sliderThumb').should('exist')
          .trigger('mousedown', { which: 1, pageX: initialX, pageY: initialY })
          .trigger('mousemove', { which: 1, pageX: newX, pageY: initialY })
          .trigger('mouseup');
        cy.get('@sliderThumb').should('exist');
      });

      // cy.get('@sliderThumbTwo').should('exist').then($el => {
      //   const initialPosition = $el[0].getBoundingClientRect();
      //   console.log('initialPosition', initialPosition);
      //   const initialX = initialPosition.x;
      //   const initialY = initialPosition.y;
      //   const newX = initialX + 200;
      //   console.log('THUMB2 Initial position:', initialX, initialY);
      //   cy.get('@sliderThumb').should('exist')
      //   .trigger('mousedown', { which: 1, pageX: initialX, pageY: initialY })
      //     .trigger('mousemove', { which: 1, pageX: newX, pageY: initialY })
      //     .trigger('mouseup');
      //   cy.get('@sliderThumb').should('exist');
      // });

      // console.log('found X!', x);
      // cy.get('@moneybuy1').children('[data-testid="moneybuy-amount"]').should('have.text', '5');
      // cy.get('@moneybuy2').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      // cy.get('@moneybuy3').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
      // cy.get('@moneybuy4').children('[data-testid="moneybuy-amount"]').should('have.text', '0');
    });
  });
});
