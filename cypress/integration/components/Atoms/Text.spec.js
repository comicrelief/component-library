describe('Text component', () => {
    before(() => {
        // go to text component
        cy.visit('/#text');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Text-container"] button[name="rsg-usage"]')
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

    describe('Text section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Text-example-0"]')
                .as('container')
                .find('[data-preview="Text"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders text section', () => {
            //H1
            cy.get('@container')
                .find('h1')
                .should('exist')
                .contains('family: Anton weight: Regular size: 80px / 5rem / super');
            //H2
            cy.get('@container')
                .find('h2')
                .should('exist')
                .contains('family: Anton weight: Regular size: 64px / 4rem / big');
            //H3
            cy.get('@container')
                .find('h3')
                .should('exist')
                .contains('family: Anton weight: Regular size: 48px / 3rem / xxl');
            //H4
            cy.get('@container')
                .find('h4')
                .should('exist')
                .contains('family: Anton weight: Regular size: 32px / 2rem / xl');
            //H5
            cy.get('@container')
                .find('h4')
                .should('exist')
                .contains('family: Anton weight: Regular size: 24px / 1.5rem / l');
            //Body1
            cy.get('@container')
                .find('p')
                .should('exist')
                .contains('family: Montserrat weight: Regular size: 20px / 1.25rem / m');
            //Body2
            cy.get('@container')
                .find('p')
                .should('exist')
                .contains('family: Montserrat weight: Regular size: 16px / 1rem / s');
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

    describe('Text section', () => {
        beforeEach(() => {
            cy.get('[data-testid="Text-example-2"]')
                .as('container')
                .find('[data-preview="Text"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders Sport Relief text section', () => {
            //H1
            cy.get('@container')
                .find('h1')
                .should('exist')
                .contains('Heading 1');
            //H2
            cy.get('@container')
                .find('h2')
                .should('exist')
                .contains('Heading 2');
            //H3
            cy.get('@container')
                .find('h3')
                .should('exist')
                .contains('Heading 3');
            //H4
            cy.get('@container')
                .find('h4')
                .should('exist')
                .contains('Heading 4');
            //H5
            cy.get('@container')
                .find('h4')
                .should('exist')
                .contains('Heading 5');
            //Body1
            cy.get('@container')
                .find('p')
                .should('exist')
                .contains('Body 1');
            //Body2
            cy.get('@container')
                .find('p')
                .should('exist')
                .contains('Body 2');
            //Bold and uppercase
            cy.get('@container')
                .find('p')
                .should('exist')
                .contains('Bold and Uppercase');
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
