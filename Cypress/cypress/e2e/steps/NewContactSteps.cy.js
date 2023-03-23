import LoginPage from "../pages/LoginPage";
import NewContactPage from "../pages/NewContactPage";

const loginPage = new LoginPage()
const newContactPage = new NewContactPage()


describe('Cadastrar Contatos', () => {

    beforeEach(() => {
        cy.visit('https://itera-qa.azurewebsites.net/Login')
        loginPage.digitarUsername('GustaEA')
        loginPage.digitarPassword('yohasakura1')
        loginPage.clicarBtnLogin()
    })
    it('Validar cadastro de contato com dados validos', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany('Trabzoba')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
    });

    it('Validar cadastro sem sucesso nome em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName(' ')
        newContactPage.digitarCompany('Trabzoba')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('name must not be blank')
    });

    it('Validar cadastro sem sucesso company em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany(' ')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('company must not be blank')
    });

    it('Validar cadastro sem sucesso address em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany('Tranzoba')
        newContactPage.digitarAddress(' ')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('address must not be blank')
    });

    it('Validar cadastro sem sucesso city em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany('Tranzoba')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity(' ')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('city must not be blank')
    });

    it('Validar cadastro sem sucesso phone em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany('Tranzoba')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone(' ')
        newContactPage.digitarEmail('Gaystavo.purpurina@gmail.com')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('city must not be blank')
    });

    it('Validar cadastro sem sucesso email em branco', () => {
        newContactPage.clicarBtnCreateNew()
        newContactPage.digitarName('Gustavo Assis')
        newContactPage.digitarCompany('Tranzoba')
        newContactPage.digitarAddress('Na Puta que pariu, esquina com a casa do caralho, 205')
        newContactPage.digitarCity('Gaylândia')
        newContactPage.digitarPhone('(69) 96969-6969')
        newContactPage.digitarEmail(' ')
        newContactPage.clicarBtnCreate()
        newContactPage.validaErro('city must not be blank')
    });
})