import { Page1 } from "./services";

const p1 = new Page1()
describe('Demo Page',()=>{
    beforeEach(()=>{
      cy.viewport(1320, 768);
      cy.visit('https://www.telerik.com/')
      cy.wait(3000)
      p1.clickservices()
    })

    it('Talk to a Consultant',()=>{
        p1.clicktalktoconsultbutton()
        p1.contact_us('Renewal','interest','Mehwish','Liaqat')
        
    })

})