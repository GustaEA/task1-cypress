export default class SignInPage{

    url = 'https://itera-qa.azurewebsites.net/UserRegister/NewUser';
    
    navegar(){
        cy.visit(this.url)
    }

    digitarFirstName(str){
        cy.get('#FirstName').type(str)
    }

    digitarSurname(str){
        cy.get('#Surname').type(str)
    }

    digitarEPost(str){
        cy.get('#E_post').type(str)
    }

    digitarMobile(str){
        cy.get('#Mobile').type(str)
    }

    digitarUsername(str){
        cy.get('#Username').type(str)
    }

    digitarPassword(str){
        cy.get('#Password').type(str)
    }

    digitarConfirmPassword(str){
        cy.get('#ConfirmPassword').type(str)
    }

    clicarSubmit(){
        cy.get('#submit').click()
    }

    validaTextoCadastroSucesso(){
        cy.get('.label-success').should('contain', 'Registration Successful')
    }
}