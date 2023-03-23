import Util from "../utils/util"
const util = new Util()

export default class NewContactPage{
    name = '#Name'
    company = '#Company'
    address = '#Address'
    city = '#City'
    phone = '#Phone'
    email = '#Email'
    btnCreate = '.col-md-offset-2 > .btn'

    //nessa pagina não tem alerta de erro, mas coloquei isso aqui pra sinalizar bug
    alert = '.alert-danger'

    newContact = ':nth-child(4) > .btn'

    clicarBtnCreateNew(){
        util.click(this.newContact)
    }

    digitarName(str){
        util.preencherInput(this.name, str)
    }

    digitarCompany(str){
        util.preencherInput(this.company, str)
    }

    digitarAddress(str){
        util.preencherInput(this.address, str)
    }

    digitarCity(str){
        util.preencherInput(this.city, str)
    }

    digitarPhone(str){
        util.preencherInput(this.phone, str)
    }

    digitarEmail(str){
        util.preencherInput(this.email, str)
    }

    clicarBtnCreate(){
        util.click(this.btnCreate)
    }

    validaErro(str){
        util.validarText(this.alert, str)
    }
}