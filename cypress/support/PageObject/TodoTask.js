export class TodoTask {

    createItem(text){
        
        cy.get('.App-inputs').type(`${text} {enter}`)
    }
}

export const newTodoTask = new TodoTask()