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
})

// Second test case: Create 5 items.

// Text should be longer than 50 characters
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

// Text with a massive amount of characters 
// Data includes special elements

// Expected Result: 
// If a large amount of text is entered, the system will work correctly. 
// Special characters are displayed in the field and are visible. 

describe('Third test case: Verify the behaviour of the application when user put different data types in field', () => {
  
  before(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Enter a text more than 150 characters', () => {
      cy.fixture("data").then( details =>{
        cy.get('.App-inputs').type(details.text)
        cy.get('button').click()
      })
  })

  it('Enter a text more than 150 characters', () => {
    cy.fixture("data").then( details =>{
      cy.get('.App-inputs').type(details.special)
      cy.get('button').first().click()
    })
  })
})
