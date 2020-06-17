describe('Cookie Banner component', () => {
    before(() => {
        // go to cookie banner component
        cy.visit('/#cookiebanner');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="CookieBanner-container"] button[name="rsg-usage"]')
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

    describe('Cookie Banner section', () => {
        beforeEach(() => {
            cy.get('[data-testid="CookieBanner-example-1"]')
                .as('container')
                .find('[data-preview="CookieBanner"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders cookie banner preview', () => {
            cy.get('@container')
                .find('p')
                .contains('Hello! Comic Relief uses cookies to help make this website better and improve our services. You can learn more about');
            cy.get('@container')
                .find('a')
                .should('have.attr', 'href', 'https://www.comicrelief.com/cookies-policy')
                .contains('our use of cookies');
            cy.get('@container')
                .find('p:nth-child(2) > a:nth-child(1)')
                .should('have', 'button', 'Accept')
                .click();
            cy.get('@container')
                .find('p:nth-child(2) > a:nth-child(2)')
                .should('exist')
                .contains('here');
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
