import Util from "../utils/util"
const util = new Util()

export default class LoginPage{
    url = 'https://itera-qa.azurewebsites.net/Login'
    username = '#Username'
    password = '#Password'
    btnLogin = '.btn-primary'
    btnClear = ':nth-child(7) > :nth-child(2) > .btn-secondary'

    navegar(){
        cy.visit(this.url)
    }

    digitarUsername(str){
        util.preencherInput(this.username, str)
    }

    digitarPassword(str){
        util.preencherInput(this.password, str)
    }

    clicarBtnLogin(){
        util.click(this.btnLogin)
    }
}