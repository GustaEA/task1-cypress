import LoginPage from "../pages/LoginPage";
const loginPage = new LoginPage()

describe('empty spec', () => {
    it('Acessar pagina ITERA', () => {
      loginPage.navegar()
      loginPage.digitarUsername('GustaEA')
      loginPage.digitarPassword('yohasakura1')
      loginPage.clicarBtnLogin()
    })
  })