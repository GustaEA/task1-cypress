export default class Util{
    click(elemet){ 
        cy.get(elemet).click() 
     }
    
     clickForce(elemet){ 
        cy.get(elemet).click({force:true}) 
     }
    
     preencherInput(element, text){ 
        cy.get(element).type(text)
     }
    
     preencherCampoEnviandoTecla(element, text, tecla){
        cy.get(element).type(text).type('{tecla}');
     }
    
     preencherInputForce(element, text){ 
        cy.get(element).type(text, {force:true})
     }
     
     tempo(tempo){ 
        cy.wait(tempo) 
     }
    
     select(element, value){ 
        cy.get(element).select(value) 
     }
    
     validarText(element, text){ 
        cy.get(element).should('contain', text) 
     }
    
     validarQuantItemNaLista(element, quant){
        cy.get(element).should('have.length', quant)
     }
}