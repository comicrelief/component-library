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

    it('Check with invalid values', () => {
      // Fill email field with an invalid value
      cy.get('@default')
        .find('#mp_permissionEmail-yes').click();
      cy.get('@default')
        .find(' #mp_email')
        .type('@an-invalid@email.com');

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

      // Fill Post fields with invalid values
      cy.get('@default')
        .find('#mp_permissionPost-yes').click();
      // Address 1
      cy.get('@default')
        .find(' #mp_address1')
        .type('@');
      // Address 2
      cy.get('@default')
        .find(' #mp_address2')
        .type('@');
      // Address 3
      cy.get('@default')
        .find('#mp_address3')
        .type('@');
      // Town
      cy.get('@default')
        .find('#mp_town')
        .type('@');
      // Postcode
      cy.get('@default')
        .find('#mp_postcode')
        .type('@');
      // Country
      cy.get('@default')
        .find('#mp_country')
        .type('@');

      // Submit
      cy.get('@default')
        .parent('form')
        .find('input[type=submit]').click();

      // Check for all expected 'invalid' errors:
      // Email
      cy.get('@default')
        .find('.field-email span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid email address');

      // Mobile
      cy.get('@default')
        .find('.field-sms span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid mobile number');

      // Phone
      cy.get('@default')
        .find('.field-phone span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid phone number');

      // Address1
      cy.get('@default')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // Address2
      // cy.get('@default')
      //   .find('.field-post label[for="mp_address2"] span[data-test=error-message] span')
      //   .should('exist')
      //   .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // // Address3
      // cy.get('@default')
      //   .find('.field-post label[for="mp_address3"] span[data-test=error-message] span')
      //   .should('exist')
      //   .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // Town
      cy.get('@default')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // Postcode
      cy.get('@default')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid postcode');

      // Country
      cy.get('@default')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');
    });

    it('Check with empty values', () => {
      // Clear email field
      cy.get('@default')
        .find('#mp_email')
        .clear();

      // Clear SMS field
      cy.get('@default')
        .find('#mp_mobile')
        .clear();

      // Clear Phone field
      cy.get('@default')
        .find(' #mp_phone')
        .clear();

      // Clear Post fields
      // Address 1
      cy.get('@default')
        .find(' #mp_address1')
        .clear();
      // Address 2
      cy.get('@default')
        .find(' #mp_address2')
        .clear();

      // Address 3
      cy.get('@default')
        .find('#mp_address3')
        .clear();

      // Town
      cy.get('@default')
        .find('#mp_town')
        .clear();

      // Postcode
      cy.get('@default')
        .find('#mp_postcode')
        .clear();

      // Country
      cy.get('@default')
        .find('#mp_country')
        .clear();

      // Submit
      cy.get('@default')
        .parent('form')
        .find('input[type=submit]').click();

      // Check for all expected 'empty' errors:
      // Email
      cy.get('@default')
        .find('.field-email span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your email address');

      // // Mobile
      cy.get('@default')
        .find('.field-sms span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your mobile number');

      // // Phone
      cy.get('@default')
        .find('.field-phone span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your phone number');

      // // Address1
      cy.get('@default')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter the first line of your address');

      // Address2 - non-required, so no error
      cy.get('@default')
        .find('.field-post label[for="mp_address2"] span[data-test=error-message] span')
        .should('not.exist');

      // Address3 - non-required, so no error
      cy.get('@default')
        .find('.field-post label[for="mp_address3"] span[data-test=error-message] span')
        .should('not.exist');

      // // Town
      cy.get('@default')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your town');

      // // Postcode
      cy.get('@default')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your postcode');

      // // Country
      cy.get('@default')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your country');
    });
  });
});
