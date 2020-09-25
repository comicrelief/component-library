describe('Search Result component', () => {
    before(() => {
        // go to search input component
        cy.visit('/#searchresult');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="SearchResult-container"] button[name="rsg-usage"]')
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

    describe('Search Result Minimalist section', () => {
        beforeEach(() => {
            cy.get('[data-testid="SearchResult-example-1"]')
                .as('container')
                .find('[data-preview="SearchResult"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders minimalist preview', () => {
            cy.get('@container')
                .find('img')
                .should('exist');
            cy.get('@container')
                .find('h3')
                .contains('News article');
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

    describe('Search Result with copy section', () => {
        beforeEach(() => {
            cy.get('[data-testid="SearchResult-example-3"]')
                .as('container')
                .find('[data-preview="SearchResult"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders with copy preview', () => {
            cy.get('@container')
                .find('img')
                .should('exist');
            cy.get('@container')
                .find('h3')
                .contains('News article');
            cy.get('@container')
                .find('p')
                .contains('News article copy');
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

    describe('Search Result with date section', () => {
        beforeEach(() => {
            cy.get('[data-testid="SearchResult-example-5"]')
                .as('container')
                .find('[data-preview="SearchResult"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders with date preview', () => {
            cy.get('@container')
                .find('img')
                .should('exist');
            cy.get('@container')
                .find('span')
                .contains(' 01 July 2019');
            cy.get('@container')
                .find('h3')
                .contains('News article');
            cy.get('@container')
                .find('p')
                .should('not.exist');
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

    describe('Search Result with date and type section', () => {
        beforeEach(() => {
            cy.get('[data-testid="SearchResult-example-5"]')
                .as('container')
                .find('[data-preview="SearchResult"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders with date and type preview', () => {
            cy.get('@container')
                .find('img')
                .should('exist');
            cy.get('@container')
                .find('span')
                .contains(' 01 July 2019');
            cy.get('@container')
                .find('h3')
                .contains('News article');
            cy.get('@container')
                .find('p')
                .should('not.exist');
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
