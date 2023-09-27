describe('Footer component', () => {
  before(() => {
    // go to footer component
    cy.visit('/#footer');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.visit('/#footer');
      cy.get('[data-testid="Footer-container"] button[name="rsg-usage"]')
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

  describe('Footer section', () => {
    beforeEach(() => {
      cy.visit('/#footer');
      cy.get('[data-testid="Footer-example-1"]')
        .as('container')
        .find('[data-preview="Footer"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders footer preview', () => {
      //Hear from us
      cy.get('@container')
        .find('ul > li:nth-child(1) > span')
        .contains('Hear from us');
      cy.get('@container')
        .find('ul > li:nth-child(1) > ul > li:nth-child(1) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/#')
        .contains('Get the newsletter');
      cy.get('@container')
        .find('ul > li:nth-child(1) > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/update-your-preferences')
        .contains('How we contact you');

      //Get in touch
      cy.get('@container')
        .find('ul > li:nth-child(2) > span')
        .contains('Get in touch');
      cy.get('@container')
        .find('ul > li:nth-child(2) > ul > li:nth-child(1) > a')
        .should('have.attr', 'href', '/contact-us')
        .contains('Contact us');
      cy.get('@container')
        .find('ul > li:nth-child(2) > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://giftaid.comicrelief.com/update')
        .contains('Your Gift Aid');
      cy.get('@container')
        .find('ul > li:nth-child(2) > ul > li:nth-child(3) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/frequently-asked-questions')
        .contains('FAQs');
      cy.get('@container')
        .find('ul > li:nth-child(2) > ul > li:nth-child(4) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/red-nose-days-frequently-asked-questions')
        .contains('Red Nose Day 2019 FAQs');

      //About us
      cy.get('@container')
        .find('ul > li:nth-child(3) > span')
        .contains('About us');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(1) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/about-comic-relief')
        .contains('Mission');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/about-comic-relief/history')
        .contains('Our history');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(3) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/about-comic-relief/finances')
        .contains('Finances');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(4) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/working-with-us')
        .contains('Partners');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(5) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/about-comic-relief/meet-the-team')
        .contains('Meet the team');
      cy.get('@container')
        .find('ul > li:nth-child(3) > ul > li:nth-child(6) > a')
        .should('have.attr', 'href', 'https://www.sportrelief.com/')
        .contains('Sport Relief');

      //Careers
      cy.get('@container')
        .find('ul > li:nth-child(4) > span')
        .contains('Careers');
      cy.get('@container')
        .find('ul > li:nth-child(4) > ul > li:nth-child(1) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/careers')
        .contains('Working at Comic Relief');
      cy.get('@container')
        .find('ul > li:nth-child(4) > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://app.beapplied.com/org/comic-relief')
        .contains('Open roles');

      //News
      cy.get('@container')
        .find('ul > li:nth-child(5) > span')
        .contains('News');
      cy.get('@container')
        .find('ul > li:nth-child(5) > ul > li:nth-child(1) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/news')
        .contains('News');
      cy.get('@container')
        .find('ul > li:nth-child(5) > ul > li:nth-child(2) > a')
        .should('have.attr', 'href', 'https://www.comicrelief.com/press-releases')
        .contains('Press area');

      //Legal
      cy.get('@container')
        .find('ul > li:nth-child(6) > span')
        .contains('Legal');

      //copyright
      cy.get('@container')
        .find('p')
        .should('exist');

      //logo
      cy.get('@container')
        .find('a[title="Go to Comic Relief homepage"]')
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
  });
});
