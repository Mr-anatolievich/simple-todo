/// <reference types="cypress" />

import { newTodoTask } from "../support/PageObject/TodoTask"

// First test case: Create one task and complete this

// Expected Result: The task is created. When you click on the flag, the task is cancelled

describe('First test case:', () => {
 
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  const newItem = 'Finish presentation for work'

  it('Create one item in to-do app', () => {

    cy.get('.App-inputs').type(`${newItem}{enter}`)

    cy.get('li span')
    .contains(newItem)         // this point verify if our task crearted correctly 
    .should('have.length', 1)
  })

  it('Complete created task', () => {
    cy.get('.App-tick').click()

    cy.get('ol').should('not.have.text', newItem)
  })

  // context('with a checked task', () => {
  //   beforeEach(() => {
  //     // We'll take the command we used above to check off an element
  //     // Since we want to perform multiple tests that start with checking
  //     // one element, we put it in the beforeEach hook
  //     // so that it runs at the start of every test.
  //     cy.contains('Pay electric bill')
  //       .parent()
  //       .find('input[type=checkbox]')
  //       .check()
  //   })

  //   it('can filter for uncompleted tasks', () => {
  //     // We'll click on the "active" button in order to
  //     // display only incomplete items
  //     cy.contains('Active').click()

  //     // After filtering, we can assert that there is only the one
  //     // incomplete item in the list.
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Walk the dog')

  //     // For good measure, let's also assert that the task we checked off
  //     // does not exist on the page.
  //     cy.contains('Pay electric bill').should('not.exist')
  //   })

  //   it('can filter for completed tasks', () => {
  //     // We can perform similar steps as the test above to ensure
  //     // that only completed tasks are shown
  //     cy.contains('Completed').click()

  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .first()
  //       .should('have.text', 'Pay electric bill')

  //     cy.contains('Walk the dog').should('not.exist')
  //   })

  //   it('can delete all completed tasks', () => {
  //     // First, let's click the "Clear completed" button
  //     // `contains` is actually serving two purposes here.
  //     // First, it's ensuring that the button exists within the dom.
  //     // This button only appears when at least one task is checked
  //     // so this command is implicitly verifying that it does exist.
  //     // Second, it selects the button so we can click it.
  //     cy.contains('Clear completed').click()

  //     // Then we can make sure that there is only one element
  //     // in the list and our element does not exist
  //     cy.get('.todo-list li')
  //       .should('have.length', 1)
  //       .should('not.have.text', 'Pay electric bill')

  //     // Finally, make sure that the clear button no longer exists.
  //     cy.contains('Clear completed').should('not.exist')
  //   })
  // })
})

// Second test case: Create 5 items.

// Text shoukd be longer than 50 characters
// Complete just first and last tasks

// Expected Result: The 5 tasks are set in line with the other elements. 
// When you click on the flag of the first and the last element, they collapse.

describe('Second test case', () => {
  
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Create 5 items', () => {
    
    newTodoTask.createItem('Send the test documentation for the new art project to the mentor for review')
    newTodoTask.createItem('Create a table to analyse the activity of the competition with visual diagrams')
    newTodoTask.createItem('Send the letter of rescheduling the meeting to all conference participants')
    newTodoTask.createItem("Meet the board members at the company's offices in London")
    newTodoTask.createItem('Give a lecture to university students on financial literacy')

    cy.get('li span').should('have.length', 5)
  })

  it('Complete first and last items', () => {

    cy.get('.App-tick').first().click()
    cy.get('.App-tick').last().click()

    cy.get('ol').should('not.have.text', 'Send the test documentation for the new art project to the mentor for review')
    cy.get('ol').should('not.have.text', 'Give a lecture to university students on financial literacy')
  })
})

// Third test case: Verify the behaviour of the application when user put different data types in field

// Text with huge amount characters
// Data includes special elements

// Expected Result: 
// If a large amount of text is entered, the system will work correctly. 
// Special characters are displayed in the field and are visible. 

describe('Third test case: Verify the behaviour of the application when user put different data types in field', () => {
  
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Enter a text more than 150 characters', () => {

  })
})
