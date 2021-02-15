describe('Header component', () => {
    before(() => {
        // go to header component
        cy.visit('/#header');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Header-container"] button[name="rsg-usage"]')
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

    describe('CR Header section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Header-example-1"]')
                .as('container')
                .find('[data-preview="Header"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders header preview', () => {
            //Logo
            cy.get('@container')
                .find('[title="Go to Comic Relief homepage"]')
                .should('exist');

            //fundraising
            cy.viewport('macbook-15');
            cy.reload();
            cy.get('@container')
                .find('nav > ul > li:nth-child(1) a')
                .should('have.attr', 'href', 'https://www.comicrelief.com/fundraising/pay-in-your-money');


            //Donate
            cy.get('@container')
                .find('header[role="banner"] a[href="/donation"]')
                .should('exist')
                .contains('Donate');
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

    describe('CR Header with search and ESU section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Header-example-5"]')
                .as('container')
                .find('[data-preview="Header"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders CR Header with search and ESU preview', () => {
            //Logo
            cy.get('@container')
                .find('[title="Go to Comic Relief homepage"]')
                .should('exist');

            //fundraising
            cy.viewport('iphone-6');
            cy.reload();
            cy.get('@container')
                .find('nav > ul > li:nth-child(1) a')
                .should('have.attr', 'href', '#');

            //Donate
            cy.get('@container')
                .find('header[role="banner"] a[href="/donation"]')
                .should('exist')
                .contains('Donate');

            //search
            cy.get('@container')
                .find('header[role="banner"] a[href="/search"]')
                .should('exist');

            //search
            cy.get('@container')
                .find('[data-test="header-esu-icon"]')
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
