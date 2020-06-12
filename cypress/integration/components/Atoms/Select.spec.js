describe('SelectField component', () => {
    before(() => {
        // go to selectfield text component
        cy.visit('/#selectfield');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Select-container"] button[name="rsg-usage"]')
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

    describe('Select Field section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Select-example-1"]')
                .as('container')
                .find('[data-preview="Select"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check select field functionality', () => {
            //first dropdown
            cy.get('@container')
                .find('h4')
                .should('exist')
                .contains('DROPDOWN MENU');
            cy.get('@container')
                .find('label:nth-child(2)')
                .first()
                .click();

            //second dropdown
            cy.get('@container')
                .find('label:nth-child(4) > span')
                .should('exist')
                .contains('This is an error message');
            cy.get('@container')
                .find('label:nth-child(4)')
                .first()
                .click();
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
