describe('Single Message component', () => {
  before(() => {
    // go to single message component
    cy.visit('/#singlemessage');
  });

  describe('props and methods section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-container"] button[name="rsg-usage"]')
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

  describe('Single message section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-1"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message preview', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .contains('title');
      cy.get('@container')
        .find('p')
        .contains('description');
      cy.get('@container')
        .find('a')
        .contains('CTA');
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

  describe('Single Message fullImage section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-3"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message full image preview', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .contains('title');
      cy.get('@container')
        .find('p')
        .contains('description');
      cy.get('@container')
        .find('a')
        .contains('CTA');
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

  describe('Single Message fullImage no copy section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-5"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message full image no copy preview', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
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

  describe('Single Message fullImage no image section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-7"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message full image no copy preview', () => {
      cy.get('@container')
        .find('img')
        .should('not.exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
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
    });
  });

  describe('Single Message vertical height 100% section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-9"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message vertical height preview', () => {
      cy.get('@container')
        .find('img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
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
    });
  });

  describe('Single Message double image section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-11"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message double image preview', () => {
      cy.get('@container')
        .find('div:nth-child(1) > div > img')
        .should('exist');
      cy.get('@container')
        .find('div:nth-child(2) > div > img')
        .should('exist');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
        .contains('The creativity that goes into helping people have a better life is extraordinary.')
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
    });
  });

  describe('Single Message with 16:9 video section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-13"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with 16:9 video preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
        .contains('Single Message with 16:9 video, copy first')
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
    });
  });

  describe('Single Message with 16:9 video left section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-14"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with 16:9 video left preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
        .contains('Single Message with 16:9 video')
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
    });
  });

  describe('Single Message with portrait video section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-16"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with portrait video preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('h1')
        .should('not.exist');
      cy.get('@container')
        .find('p')
        .contains('Single Message with portrait video')
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
    });
  });

  describe('Single Message with portrait video, 100VH section', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-18"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with portrait video, 100VH preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('p')
        .contains('Single Message with portrait video, 100VH');
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

  describe('Single Message with landscape video, 100VH, fullwidth image', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-20"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with landscape video, 100VH, fullwidth image preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('img')
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

  describe('Single Message with landscape video, 50VH, fullwidth image', () => {
    beforeEach(() => {
      cy.get('[data-testid="SingleMessage-example-22"]')
        .as('container')
        .find('[data-preview="SingleMessage"]')
        .as('preview');

      cy.get('@container')
        .find('button')
        .contains('View Code')
        .as('viewCodeBtn');
    });

    it('renders single message with landscape video, 50VH, fullwidth image preview', () => {
      cy.get('@container')
        .find('button')
        .should('exist')
        .contains('Play video');
      cy.get('@container')
        .find('img')
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
