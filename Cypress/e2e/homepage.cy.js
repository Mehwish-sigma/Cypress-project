import { telerik } from "./homepage";

const ue = new telerik()

describe('Signup for website',()=>{
    beforeEach(()=>{
      cy.viewport(1320, 768);
      cy.visit('https://www.telerik.com/')
      cy.wait(3000)
        
    })

    it('Homepage hero screen',()=>{
      cy.get('#onetrust-accept-btn-handler').click()
      ue.click_devcraftfile()
      ue.emailforSignup('foyeve6851@ratedane.com')
      cy.wait(3000)
      ue.changeemailbtn()
      ue.emailforSignup('foe6851@ratedane.com')  //wrong email
      ue.signup_password('12345678')
      ue.signupname('ali','Liaqat','New Company','+923567678456','Pakistan')
      cy.wait(15000)        //wait for manually capcha resolving
      ue.createAccountbtn()

    })

    it('Homepage hero screen',()=>{
      cy.get('#onetrust-accept-btn-handler').click()
      ue.click_devcraftfile()
      ue.emailforSignup('foyeve6851@ratedane.com')
      cy.wait(3000)
      ue.changeemailbtn()
      ue.emailforSignup('foe6851@foyeve6851.com')  //wrong email
      ue.signup_password('12345678')
      ue.signupname('ali','Liaqat','+923567678456','Pakistan')  //one parameter missing
      cy.wait(15000)        //wait for manually capcha resolving
      ue.createAccountbtn()

    })

    it('Homepage hero screen',()=>{
      cy.get('#onetrust-accept-btn-handler').click()
      ue.click_devcraftfile()
      ue.emailforSignup('foyeve6851@ratedane.com')
      cy.wait(3000)
      ue.changeemailbtn()
      ue.emailforSignup('foyeve6851@ratedane.com')
      ue.signup_password('12345678')
      ue.signupname('ali','Liaqat','New Company','+923567678456','Pakistan')
      cy.wait(15000)        //wait for manually capcha resolving
      ue.createAccountbtn()
    })

})

describe('Login for website',()=>{
  beforeEach(()=>{
    cy.viewport(1320, 768);
    cy.visit('https://www.telerik.com/')
    cy.wait(3000)
  })

  it('Login wrong password',()=>{
      ue.emailforSignup('foyeve6851@ratedane.com')
      ue.createAccountbtn()
      ue.signup_password('1234567') 
      cy.wait(10000)  //after filling captcha login will be done.
  })

  it('login valid',()=>{
    ue.emailforSignup('foyeve6851@ratedane.com')
    ue.createAccountbtn()
    ue.signup_password('12345678') 
    cy.wait(10000)  //after filling captcha login will be done.
  })
  
})

describe('Homepage blocks',()=>{
  beforeEach(()=>{
    cy.viewport(1320, 768);
    cy.visit('https://www.telerik.com/')
    cy.wait(3000)
  })

  it('Homepage 1',()=>{
    ue.selectbox1()
    cy.wait(15000)
    cy.scrollTo('bottom', { duration: 4000 })
  
  })
  it('Homepage 2',()=>{
    ue.selectbox2()
    cy.wait(4000)
    ue.emailforSignup('ayesha1234@gmail.com')
  })

  it('success block button 1',()=>{
    ue.successbox1()
  })

  it('success block button 2',()=>{
    ue.successbox2()
  })

  it('What Developers say ',()=>{
    ue.Developerstestimonials()
  })

  it('Blogs ans posts ',()=>{
    ue.Blogs('foyeve6851@ratedane.com','Pakistan')
  })
  
})

describe('Navigation Dropdown',()=>{
  beforeEach(()=>{
    cy.viewport(1320, 768);
    cy.visit('https://www.telerik.com/')
    cy.wait(3000)
  })

  it('select option from navigation ',()=>{

  })

})
