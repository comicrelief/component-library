describe('ArticleTeaser component', () => {
    before(() => {
        // go to articleteaser component
        cy.visit('/#articleteaser');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="ArticleTeaser-container"] button[name="rsg-usage"]')
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

    describe('Article Teaser section', () => {
        beforeEach(() => {
            cy.get('[data-testid="ArticleTeaser-example-1"]')
                .as('container')
                .find('[data-preview="ArticleTeaser"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        //ArticleTeaser 1
        it('renders article teaser', () => {
            cy.get('@container')
                .find('span')
                .should('exist')
                .contains(' 01 July 2019');
            cy.get('@container')
                .find('h3')
                .should('exist')
                .contains('News article');
            cy.get('@container')
                .find('span')
                .should('exist')
                .contains('4 min read');

            //article teaser 2
            cy.get('@container')
                .find('div:nth-child(2) > article > a')
                .as('container2')
                .should('exist')
                .contains('01 July 2019');
            cy.get('@container2')
                .find('h3')
                .should('exist')
                .contains('News article News article');
            cy.get('@container2')
                .find('span')
                .should('exist')
                .contains('4 min read');

        });

        //ArticleTeaser: Press Release
        it('renders article teaser : press release', () => {
            cy.get('[data-testid="ArticleTeaser-example-3"]')
                .find('span')
                .should('exist')
                .contains('01 July 2019');
            cy.get('[data-testid="ArticleTeaser-example-3"]')
                .find('h3')
                .should('exist')
                .contains('Press Release');
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
