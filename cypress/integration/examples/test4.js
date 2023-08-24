    /// <reference types="Cypress" />
     
    describe('My First Test Suite', function() 
    {
     
    it('My Second case',function() {
     
     
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
//alerts
    cy.get('#alertbtn').click()
    cy.get('[value = "Confirm"]').click()
    cy.on('window:alert', (str) => 
    {
        //mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm', (str) => 
    {
        //mocha
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //fixture
     
    }  )
     
     
     
    }  )