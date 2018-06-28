describe('The app', () => {

  it('Should visit the app', () => {
    cy.visit('/');
  });

  it('Focuses on the filter input field', () => {
    cy.visit('/');
    cy.focused()
      .should('have.class', 'filter__element');
  });

  it('Filter accepts input', () => {
    const text = 'inferno';
    cy.visit('/');
    cy.get('.filter__element').type(text)
      .should('have.value', text);
  });

  it('Toggles results view from table to grid and back to table', () => {
    cy.visit('/');
    cy.get('.toggle').click();
    cy.get('.movie-grid').should('be.visible');
    cy.get('.toggle').click();
    cy.get('.movie-table').should('be.visible');
  });

  it('Filters movies based on input', () => {
    const text = 'inferno';
    cy.visit('/');
    cy.get('.filter__element').type(text);
    cy.get('.movie-table')
      .find('td').first()
      .should('contain', 'Guardians of the Galaxy: Inferno');
  });

  it('Filter reset button should appear when filter gets input', () => {
    const text = 'inferno';
    cy.visit('/');
    cy.get('.filter__element').type(text);
    cy.get('.filter__cancel-icon').should('be.visible');
  });

  it('Filter reset button should clear filter', () => {
    const text = 'inferno';
    cy.visit('/');
    cy.get('.filter__element').type(text);
    cy.get('.filter__cancel-icon').click();
    cy.get('.filter__element')
      .should('not.have.value', text);
  });

});