before(() => {
  const baseUrl = 'http://localhost:4200';
  cy.visit(baseUrl);
});

it('displays global stats', () => {
  cy.contains('Global');
  cy.contains('Total cases');
  cy.contains('New cases');
  cy.contains('Total deaths');
  cy.contains('New deaths');
  cy.contains('Total recovered');
  cy.contains('Critical');
  cy.contains('Cases / Million');
  cy.contains('Deaths / Million');
});

it('displays country stats when a country is selected', () => {
  cy.contains('Select country');
  cy.get('[data-test-id="country"]').type('Australia').type('{enter}');

  cy.contains('Australia');
});

it('back to global stat when country select is cleared', () => {
  cy.get('.ng-clear-wrapper') // vendor lib, couldn't add data-test-id as target
    .click();

  cy.contains('Global');
});

it('could switch to dark mode', () => {
  cy.get('[data-test-id="mode-knob"]').click();

  cy.get('body').should('have.class', 'theme-dark');
});

it('could switch back to light mode', () => {
  cy.get('[data-test-id="mode-knob"]').click();

  cy.get('body').should('not.have.class', 'theme-dark');
});
