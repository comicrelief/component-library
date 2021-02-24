describe('MarketingPreferencesDSForm component', () => {
  before(() => {
    cy.visit('/#marketingpreferencesdsform');
  });

  describe('Check render', () => {
    beforeEach(() => {
      cy.get('[data-testid="MarketingPreferencesDSForm-container"]')
        .as('container');
      cy.get('@container')
        .find('#marketing-preferences--default')
        .as('default');
      cy.get('@container')
        .find('#marketing-preferences--custom')
        .as('custom');
    });

    it('renders Default example', () => {
      cy.get('@default')
        .should('exist')
        .find('h3')
        .contains('How can we contact you?');
    });

    it('renders Customised example', () => {
      cy.get('@custom')
        .should('exist')
        .find('h3')
        .contains('How can we contact you?');
    });

    it('renders Default example options', () => {
      cy.get('@default')
        .find('.field-email')
        .should('exist');

      cy.get('@default')
        .find('.field-phone')
        .should('exist');

      cy.get('@default')
        .find('.field-post')
        .should('exist');

      cy.get('@default')
        .find('.field-sms')
        .should('exist');
    });

    it('renders correct Customised example options', () => {
      cy.get('@custom')
        .find('.field-email')
        .should('exist');

      cy.get('@custom')
        .find('.field-phone')
        .should('exist');

      cy.get('@custom')
        .find('.field-post')
        .should('exist');

      // SMS Field is not rendered in the custom example
      cy.get('@custom')
        .find('.field-sms')
        .should('not.exist');
    });
  });

  describe('Check validation', () => {
    beforeEach(() => {
      cy.get('[data-testid="MarketingPreferencesDSForm-container"]')
        .as('container');
      cy.get('@container')
        .find('#marketing-preferences--default')
        .as('default');
      cy.get('@container')
        .find('#marketing-preferences--custom')
        .as('custom');
    });

    it('Check email validation', () => {
      // Fill email field with an invalid value
      cy.get('@default')
        .find('#mp_permissionEmail-yes').click();
      cy.get('@default')
        .find(' #mp_email')
        .type('an?invalid@email.com');

      // Fill SMS field with an invalid value
      cy.get('@default')
        .find('#mp_permissionSMS-yes').click();
      cy.get('@default')
        .find(' #mp_mobile')
        .type('07777');

      // Fill Phone field with an invalid value
      cy.get('@default')
        .find('#mp_permissionPhone-yes').click();
      cy.get('@default')
        .find(' #mp_phone')
        .type('0208');

      // Fill SMS field with an invalid value
      cy.get('@default')
        .find('#mp_permissionPost-yes').click();
      cy.get('@default')
        .find(' #mp_address1')
        .type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa123');
      // Submit
      cy.get('@default')
        .parent('form')
        .find('input[type=submit]').click();

      // Check for all expected errors:
    });
  });
});
