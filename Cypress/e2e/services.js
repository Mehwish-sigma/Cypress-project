export class Page1 {

    servicesbtn =':nth-child(2) > .TK-Menu-Item-Link'
    talktoconsultatntbtn ='#ContentPlaceholder1_C182_Col00 > .sfContentBlock > .Btn'
    help ='#Dropdown-1'
    productinterest= '#Dropdown-2'
    firstname = '#Textbox-1'
    lastname = '#Textbox-2'
    



    clickservices(){
        cy.get(this.servicesbtn).click()
    }
    
    clicktalktoconsultbutton(){
        cy.get(this.talktoconsultatntbtn).click()
    }
    contact_us(question,interest){
        cy.get(this.help).select(question)
        cy.get(this.productinterest).select(interest)
        cy.get(this.firstname).select(fname)
        cy.get(this.lastname).select(lname)


    }


}