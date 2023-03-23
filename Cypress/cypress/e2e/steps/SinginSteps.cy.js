import SignInPage from "../pages/SignInPage"

const signInPage = new SignInPage()

describe('empty spec', () => {
  it('Acessar pagina ITERA', () => {
    signInPage.navegar()
    signInPage.digitarFirstName('Gustavo');
    signInPage.digitarSurname('Escoto')
    signInPage.digitarEPost('91170300')
    signInPage.digitarMobile('51986283033')
    signInPage.digitarUsername('Gaystavo123')
    signInPage.digitarPassword('gustavo123@')
    signInPage.digitarConfirmPassword('gustavo123@')
    signInPage.clicarSubmit()
    signInPage.validaTextoCadastroSucesso()
  })
})