describe('Logo component', () => {
    before(() => {
        // go to logo component
        cy.visit('/#logo');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Logo-container"] button[name="rsg-usage"]')
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

    describe('CR logo section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Logo-example-1"]')
                .as('container')
                .find('[data-preview="Logo"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check CR logo', () => {
            cy.get('[data-testid="Logo-examples"] h1[id="comic-relief-logo"]')
                .should('exist')
                .contains('Comic Relief Logo')

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

    describe('SR logo section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Logo-example-3"]')
                .as('container')
                .find('[data-preview="Logo"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check SR logo', () => {
            cy.get('[data-testid="Logo-examples"] h1[id="sport-relief-logo"]')
                .should('exist')
                .contains('Sport Relief Logo')

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

    describe('SR game on logo section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Logo-example-5"]')
                .as('container')
                .find('[data-preview="Logo"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check SR game on logo', () => {
            cy.get('[data-testid="Logo-examples"] h1[id="sport-relief-game-on-logo"]')
                .should('exist')
                .contains('Sport Relief Game On Logo');
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
