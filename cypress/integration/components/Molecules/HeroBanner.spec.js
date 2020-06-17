describe('Herobanner component', () => {
    before(() => {
        // go to herobanner component
        cy.visit('/#herobanner');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="HeroBanner-container"] button[name="rsg-usage"]')
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

    describe('HeroBanner section', () => {
        beforeEach(() => {
            cy.get('[data-testid="HeroBanner-example-1"]')
                .as('container')
                .find('[data-preview="HeroBanner"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders HeroBanner preview', () => {
            cy.get('@container')
                .find('h1')
                .should('exist')
                .contains('Change Please')
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
