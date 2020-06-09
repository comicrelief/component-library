describe('Picture component', () => {
    before(() => {
        // go to picture component
        cy.visit('/#picture');
        cy.wait(2500)
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Picture-container"] button[name="rsg-usage"]')
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

    describe('Picture section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Picture-example-1"]')
                .as('container')
                .find('[data-preview="Picture"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('render picture section', () => {
            cy.get('@container')
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
            cy.get('@container')
                .find('textarea')
                .should('not.exist');
        });
    });

    describe('custom size picture section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Picture-example-3"]')
                .as('container')
                .find('[data-preview="Picture"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check custom size section', () => {
            cy.get('@container')
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
            cy.get('@container')
                .find('textarea')
                .should('not.exist');
        });
    });

    describe('Single image section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Picture-example-5"]')
                .as('container')
                .find('[data-preview="Picture"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('should check custom size picture section', () => {
            cy.get('@container')
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
            cy.get('@container')
                .find('textarea')
                .should('not.exist');
        });
    });
});
