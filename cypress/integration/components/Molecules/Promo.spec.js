describe('Promo component', () => {
    before(() => {
        // go to promo component
        cy.visit('/#promo');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Promo-container"] button[name="rsg-usage"]')
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

    describe('Promo section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Promo-example-1"]')
                .as('container')
                .find('[data-preview="Promo"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders Promo preview', () => {
            cy.get('@container')
                .find('h1')
                .should('exist');
            cy.get('@container')
                .find('p')
                .should('exist');
            cy.get('@container')
                .find('span')
                .should('exist')
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
