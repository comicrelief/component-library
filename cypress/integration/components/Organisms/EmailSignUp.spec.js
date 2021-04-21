describe('Email Sign Up component', () => {
    before(() => {
        // go to Email Sign Up component
        cy.visit('/#emailsignup');
        cy.wait(2500)
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="EmailSignUp-container"] button[name="rsg-usage"]')
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

    describe('Email Sign Up section', () => {
        beforeEach(() => {
            cy.get('[data-testid="EmailSignUp-example-1"]')
                .as('container')
                .find('[data-preview="EmailSignUp"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders Email Sign Up preview', () => {
            cy.get('@container')
                .find('h2')
                .should('exist')
                .contains('Stay in the know!');
            cy.get('@container')
                .find('p')
                .contains('Get regular email updates and info on what we\'re up to!');
            cy.get('[data-test="subscribe-button"]')
                .click();
            cy.get('[data-test="error-message"]')
                .should('contain', 'invalid email!');
            cy.get('@container')
                .find('input[id="email"]')
                .type('test@comicrelief.com');
            cy.get('[data-test="subscribe-button"]')
                .click();
            cy.get('@container')
                .contains('Thanks! Your first email will be with you shortly')
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

    describe('Email Sign Up Schools section', () => {
        beforeEach(() => {
            cy.get('[data-testid="EmailSignUp-example-3"]')
                .as('container')
                .find('[data-preview="EmailSignUp"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders Email Sign Up Schools preview', () => {
            cy.get('@container')
                .find('h2')
                .should('exist')
                .contains('Stay in the know!');
            cy.get('@container')
                .find('p')
                .contains('Get regular email updates and info on what we\'re up to!');
            cy.get('[data-test="subscribe-button-school"]')
                .click();
            cy.get('[data-test="error-message"]')
                .should('contain', 'invalid email!');
            cy.get('@container')
                .find('input[id="email"]')
                .type('test@comicrelief.com');
            cy.get('[data-test="subscribe-button-school"]')
                .click();
            cy.get('@container')
                .find('select')
                .select('The first option')
                .first();
            cy.get('[data-test="subscribe-button-school"]')
                .click();
            cy.get('@container')
                .contains('Thanks! Your first email will be with you shortly')
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
