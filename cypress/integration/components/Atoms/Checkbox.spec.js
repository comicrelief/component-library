describe('Checkbox component', () => {
    before(() => {
        // go to checkbox component
        cy.visit('/#checkbox');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Checkbox-container"] button[name="rsg-usage"]')
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

    describe('Checkbox section', () => {
        beforeEach(() => {
            cy.get('[data-preview="Checkbox"]')
                .as('preview');
        });

        it('should click checkboxes', () => {
            cy.get('[data-preview="Checkbox"] p').contains('List of checkboxes');
            cy.get('[data-testid="Checkbox-example-1"] div > label:nth-child(2)')
                .contains('Tenis')
                .click();
            cy.get('[data-testid="Checkbox-example-1"] div > label:nth-child(3)')
                .contains('Basketball')
                .click();
            cy.get('[data-testid="Checkbox-example-1"] div > label:nth-child(4)')
                .contains('Cycling')
                .click();
            cy.get('[data-testid="Checkbox-example-1"] div > label:nth-child(5)')
                .contains('Football')
                .click();
        });

        it('has view code button', () => {
            cy.get('[data-testid="Checkbox-examples"] [name="rsg-code-editor"]').should('exist');
        });

        it('shows code on click', () => {
            cy.get('[data-testid="Checkbox-examples"] [name="rsg-code-editor"]').contains('View Code')
                .click();
            cy.get('[data-testid="Checkbox-examples"] div > textarea').should('be.visible');
        });
    });
});
