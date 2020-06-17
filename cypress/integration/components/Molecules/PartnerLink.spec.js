describe('PartnerLink component', () => {
    before(() => {
        // go to partnerLink component
        cy.visit('/#partnerlink');
    });

    describe('props and methods section', () => {
        beforeEach(() => {
            cy.get('[data-testid="PartnerLink-container"] button[name="rsg-usage"]')
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

    describe('Partnerlink section', () => {
        beforeEach(() => {
            cy.get('[data-testid="PartnerLink-example-1"]')
                .as('container')
                .find('[data-preview="PartnerLink"]')
                .as('preview');

            cy.get('@container')
                .find('button')
                .contains('View Code')
                .as('viewCodeBtn');
        });

        it('renders Partnerlink preview', () => {
            cy.get('@container')
                .find('span')
                .contains('Find out more')
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
