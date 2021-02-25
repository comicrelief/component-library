describe('MarketingPreferencesDSForm component', () => {
  before(() => {
    cy.visit('/#!/MarketingPreferencesDSForm/1');
  });

  beforeEach(() => {
    cy.window().then(win => {
      cy.spy(win.console, 'log').as('consoleLog');
    });
    cy.get('[data-testid="MarketingPreferencesDSForm-container"]')
      .as('container');
    cy.get('@container')
      .find('#marketing-preferences--default')
      .as('default');
    cy.get('@container')
      .find('#marketing-preferences--custom')
      .as('customised');
    cy.get('@default')
      .parent('form')
      .find('input[type=submit]').as('default-submit');
    cy.get('@customised')
      .parent('form')
      .find('input[type=submit]').as('customised-submit');
  });

  describe('Check render', () => {
    it('should render Default example', () => {
      cy.get('@default')
        .should('exist')
        .find('h3')
        .contains('How can we contact you?');
    });

    it('should render correct Default example options', () => {
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

    it('should render Customised example', () => {
      cy.get('@customised')
        .should('exist')
        .find('h3')
        .contains('How can we contact you?');
    });

    it('should render correct Customised example options', () => {
      cy.get('@customised')
        .find('.field-email')
        .should('exist');

      cy.get('@customised')
        .find('.field-phone')
        .should('exist');

      cy.get('@customised')
        .find('.field-post')
        .should('exist');

      // SMS Field is not rendered in the custom example
      cy.get('@customised')
        .find('.field-sms')
        .should('not.exist');
    });
  });

  describe('Check "no-interaction" submission', () => {
    it('should complete "no-interaction" submission with Default example', () => {
      cy.get('@default-submit').click()
        .get('@consoleLog')
        .should('be.calledWith', 'Successful submission');
    });
    it('should complete "no-interaction" submission with Customised example', () => {
      cy.get('@customised-submit').click()
        .get('@consoleLog')
        .should('be.calledWith', 'Successful submission');
    });
  });

  describe('Check validation', () => {
    it('Check Default example with invalid values', () => {
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
      cy.get('@default-submit').click();

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

    it('check Default example with empty values', () => {
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
      cy.get('@default-submit').click();

      // Check for all expected 'empty' errors:
      // Email
      cy.get('@default')
        .find('.field-email span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your email address');

      // Mobile
      cy.get('@default')
        .find('.field-sms span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your mobile number');

      // Phone
      cy.get('@default')
        .find('.field-phone span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your phone number');

      // Address1
      cy.get('@default')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter the first line of your address');

      // Address2
      cy.get('@default')
        .find('.field-post label[for="mp_address2"] span[data-test=error-message] span')
        .should('not.exist'); // non-required, so no error

      // Address3
      cy.get('@default')
        .find('.field-post label[for="mp_address3"] span[data-test=error-message] span')
        .should('not.exist'); // non-required, so no error

      // Town
      cy.get('@default')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your town');

      // Postcode
      cy.get('@default')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your postcode');

      // Country
      cy.get('@default')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your country');
    });

    it('Check Default example with valid values', () => {
      // Fill email field with an valid value
      cy.get('@default')
        .find(' #mp_email')
        .type('a-valid@email.com');

      // Fill SMS field with a valid value
      cy.get('@default')
        .find(' #mp_mobile')
        .type('07777 123123');

      // Fill Phone field with a valid value
      cy.get('@default')
        .find(' #mp_phone')
        .type('020 7820 2000');

      // Fill Post fields with valid values
      // Address 1
      cy.get('@default')
        .find(' #mp_address1')
        .type('10 King Road');
      // Address 2
      cy.get('@default')
        .find(' #mp_address2')
        .type('Some Area');
      // Address 3
      cy.get('@default')
        .find('#mp_address3')
        .type('Some wider area');
      // Town
      cy.get('@default')
        .find('#mp_town')
        .type('London');
      // Postcode
      cy.get('@default')
        .find('#mp_postcode')
        .type('SE1 7TP');
      // Country
      cy.get('@default')
        .find('#mp_country')
        .type('UK');

      // Submit
      cy.get('@default-submit').click();

      // Check that all errors have been remove:
      // Email
      cy.get('@default')
        .find('.field-email span[data-test=error-message] span')
        .should('not.exist');

      // Mobile
      cy.get('@default')
        .find('.field-sms span[data-test=error-message] span')
        .should('not.exist');

      // Phone
      cy.get('@default')
        .find('.field-phone span[data-test=error-message] span')
        .should('not.exist');

      // Address1
      cy.get('@default')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('not.exist');

      // Town
      cy.get('@default')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('not.exist');

      // Postcode
      cy.get('@default')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('not.exist');

      // Country
      cy.get('@default')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('not.exist');

      cy.get('@default-submit').click()
        .get('@consoleLog')
        .should('be.calledWith', 'Successful submission');
    });

    it('Check Customised example with invalid values', () => {
      // Fill email field with an invalid value
      cy.get('@customised')
        .find('#mp_permissionEmail-yes').click();
      cy.get('@customised')
        .find('#mp_email')
        .type('@an-invalid@email.com');

      // Fill Phone field with an invalid value
      cy.get('@customised')
        .find('#mp_permissionPhone-yes').click();
      cy.get('@customised')
        .find(' #mp_phone')
        .type('0208');

      // Fill Post fields with invalid values
      cy.get('@customised')
        .find('#mp_permissionPost-yes').click();
      // Address 1
      cy.get('@customised')
        .find(' #mp_address1')
        .type('@');
      // Address 2
      cy.get('@customised')
        .find(' #mp_address2')
        .type('@');
      // Address 3
      cy.get('@customised')
        .find('#mp_address3')
        .type('@');
      // Town
      cy.get('@customised')
        .find('#mp_town')
        .type('@');
      // Postcode
      cy.get('@customised')
        .find('#mp_postcode')
        .type('@');
      // Country
      cy.get('@customised')
        .find('#mp_country')
        .type('@');

      // Submit
      cy.get('@customised-submit').click();

      // Check for all expected 'invalid' errors:
      // Email
      cy.get('@customised')
        .find('.field-email span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid email address');

      // Phone
      cy.get('@customised')
        .find('.field-phone span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid phone number');

      // Address1
      cy.get('@customised')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // Town
      cy.get('@customised')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');

      // Postcode
      cy.get('@customised')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter a valid postcode');

      // Country
      cy.get('@customised')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('exist')
        .contains('This field only accepts alphanumeric characters and , . ( ) / & \' - and must start with an alphanumeric character');
    });

    it('check Customised example with empty values', () => {
      // Clear email field
      cy.get('@customised')
        .find('#mp_email')
        .clear();

      // Clear Phone field
      cy.get('@customised')
        .find(' #mp_phone')
        .clear();

      // Clear Post fields
      // Address 1
      cy.get('@customised')
        .find(' #mp_address1')
        .clear();
      // Address 2
      cy.get('@customised')
        .find(' #mp_address2')
        .clear();

      // Address 3
      cy.get('@customised')
        .find('#mp_address3')
        .clear();

      // Town
      cy.get('@customised')
        .find('#mp_town')
        .clear();

      // Postcode
      cy.get('@customised')
        .find('#mp_postcode')
        .clear();

      // Country
      cy.get('@customised')
        .find('#mp_country')
        .clear();

      // Submit
      cy.get('@customised-submit').click();

      // Check for all expected errors:
      // Email
      cy.get('@customised')
        .find('.field-email span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your email address');

      // Phone
      cy.get('@customised')
        .find('.field-phone span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your phone number');

      // Address1
      cy.get('@customised')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter the first line of your address');

      // Address2
      cy.get('@customised')
        .find('.field-post label[for="mp_address2"] span[data-test=error-message] span')
        .should('not.exist'); // non-required, so no error

      // Address3
      cy.get('@customised')
        .find('.field-post label[for="mp_address3"] span[data-test=error-message] span')
        .should('not.exist'); // non-required, so no error

      // Town
      cy.get('@customised')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your town');

      // Postcode
      cy.get('@customised')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your postcode');

      // Country
      cy.get('@customised')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('exist')
        .contains('Please enter your country');
    });

    it('Check Customised example with valid values', () => {
      // Fill email field with an valid value
      cy.get('@customised')
        .find(' #mp_email')
        .type('a-valid@email.com');

      // Fill Phone field with a valid value
      cy.get('@customised')
        .find(' #mp_phone')
        .type('020 7820 2000');

      // Fill Post fields with valid values
      // Address 1
      cy.get('@customised')
        .find(' #mp_address1')
        .type('10 King Road');
      // Address 2
      cy.get('@customised')
        .find(' #mp_address2')
        .type('Some Area');
      // Address 3
      cy.get('@customised')
        .find('#mp_address3')
        .type('Some wider area');
      // Town
      cy.get('@customised')
        .find('#mp_town')
        .type('London');
      // Postcode
      cy.get('@customised')
        .find('#mp_postcode')
        .type('SE1 7TP');
      // Country
      cy.get('@customised')
        .find('#mp_country')
        .type('UK');

      // Submit
      cy.get('@customised-submit').click();

      // Check that all errors have been remove:
      // Email
      cy.get('@customised')
        .find('.field-email span[data-test=error-message] span')
        .should('not.exist');

      // Phone
      cy.get('@customised')
        .find('.field-phone span[data-test=error-message] span')
        .should('not.exist');

      // Address1
      cy.get('@customised')
        .find('.field-post label[for="mp_address1"] span[data-test=error-message] span')
        .should('not.exist');

      // Town
      cy.get('@customised')
        .find('.field-post label[for="mp_town"] span[data-test=error-message] span')
        .should('not.exist');

      // Postcode
      cy.get('@customised')
        .find('.field-post label[for="mp_postcode"] span[data-test=error-message] span')
        .should('not.exist');

      // Country
      cy.get('@customised')
        .find('.field-post label[for="mp_country"] span[data-test=error-message] span')
        .should('not.exist');

      cy.get('@customised-submit').click()
        .get('@consoleLog')
        .should('be.calledWith', 'Successful submission');
    });
  });
});
