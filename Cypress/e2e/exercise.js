export class exercise {
    
    //Signup
    HomepageSlider = '#slider'
    signup_loginbtn ='.shop-menu > .nav > :nth-child(4) > a'
    signupname = '[data-qa="signup-name"]'
    signupemail = '[data-qa="signup-email"]'
    signupbtn1 = '[data-qa="signup-button"]'
    EnterAccountInfo = ':nth-child(1) > b'
    radiobtn ='input[type="radio"]'
    signup_password ='[data-qa="password"]'
    birth_day = '[data-qa="days"]'
    birth_month = '[data-qa="months"]'
    birth_year ='[data-qa="years"]'
    checkmark = '#optin'
    NewsletterCheckmarks = '#optin'
    firstname ='[data-qa="first_name"]'
    lastname ='[data-qa="last_name"]'
    companyname = '[data-qa="last_name"]'
    address1 = '[data-qa="address"]'
    address2 = '[data-qa="address2"]'
    country = '[data-qa="country"]'
    state = '[data-qa="state"]'
    city = '[data-qa="city"]'
    zipcode = '[data-qa="zipcode"]'
    mobile_number = '[data-qa="mobile_number"]'
    CreateAccount = '[data-qa="create-account"]'
    accountCreatedMsg = 'b'
    Continuebtn = '[data-qa="continue-button"]'
    
    //Delete Account Button
    LoggedinAs = ':nth-child(10) > a'
    DeleteAccBtn = '.shop-menu > .nav > :nth-child(5) > a'

    //Login
    loginToYourAccount = '.login-form > h2'
    Login_email = '[data-qa="login-email"]'
    Login_pass  = '[data-qa="login-password"]'
    Loginbtn = '[data-qa="login-button"]'

    //Logout 
    Logoutbtn = '.shop-menu > .nav > :nth-child(4) > a'

    //Login and SignUp validations
    emailValidation ='.signup-form > form > p'
    incorrectEmailorPassword ='.login-form > form > p'

    //Contact Us Form
    ContactUsBtn = '.shop-menu > .nav > :nth-child(8) > a'
    GetInTouch_Text= 'div.contact-form > .title'
    ContactForm_name  = '[data-qa="name"]'
    ContactForm_Email = '[data-qa="email"]'
    Contact_subject = '[data-qa="subject"]'
    Contact_Message = '[data-qa="message"]'
    chooseFile = ':nth-child(6) > .form-control'
    Submit = '[data-qa="submit-button"]'
    SuccessMsg = '.status'

    //Product page 
    ProductButton = '.shop-menu > .nav > :nth-child(2) > a'
    allProducts_Text = '.title'
    viewProduct_First = ':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
    product_Info = '.product-information'

    ProductSearch_bar = '#search_product'
    submitSearchBtn = '#submit_search'
    Sreach_Products = '.title'

    
visit_website(){
    cy.viewport(1320, 768);
    cy.visit('https://www.automationexercise.com')
    cy.wait(3000)
    cy.get(this.HomepageSlider).should('be.visible')

}

clicksignup_login(){
    cy.get(this.signup_loginbtn).click()
}

EnterSignup_info(name,email){
    cy.get(this.signupname).type(name)
    cy.get(this.signupemail).type(email)
    cy.get(this.signupbtn1).click()
}

Signup_ExistingEmail(name,email){
    cy.get(this.signupname).type(name)
    cy.get(this.signupemail).type(email)
    cy.get(this.signupbtn1).click()
    cy.get(this.emailValidation).should('be.visible')
}

Signup_moredetails(value,password,day,month,year){
    cy.get(this.EnterAccountInfo).should('be.visible')
    cy.get(this.radiobtn).check(value)
    cy.get(this.signup_password).type(password)
    cy.get(this.birth_day).select(day).should('have.value','9')
    cy.get(this.birth_month).select(month)
    cy.get(this.birth_year).select(year).should('not.have.value', '2024')
    cy.get(this.checkmark).check()
    cy.get(this.NewsletterCheckmarks).check()
    
}

address_info(fname,lname,company,add1,add2,cont,state,city,zip,mobile){
    cy.get(this.firstname).type(fname)
    cy.get(this.lastname).type(lname)
    cy.get(this.companyname).type(company)
    cy.get(this.address1).type(add1)
    cy.get(this.address2).type(add2)
    cy.get(this.country).select(cont)
    cy.get(this.state).type(state)
    cy.get(this.city).type(city)
    cy.get(this.zipcode).type(zip)
    cy.get(this.mobile_number).type(mobile)
    cy.get(this.CreateAccount).click()
    cy.get (this.accountCreatedMsg).should('be.visible')
    cy.get(this.Continuebtn).click()
    cy.get(this.LoggedinAs).should('be.visible')

}

deleteAccount(){
    cy.get(this.DeleteAccBtn).click()
    cy.get(this.accountCreatedMsg).should('be.visible')
    cy.get(this.Continuebtn).click()
}

login(email,password){
    cy.get(this.loginToYourAccount).should('be.visible')
    cy.get(this.Login_email).type(email)
    cy.get(this.Login_pass).type(password)
    cy.get(this.Loginbtn).click()
    cy.get(this.LoggedinAs).should('be.visible')
}

loginWithIncorrectCredentials(email,password){
    cy.get(this.loginToYourAccount).should('be.visible')
    cy.get(this.Login_email).type(email)
    cy.get(this.Login_pass).type(password)
    cy.get(this.Loginbtn).click()
    cy.get(this.incorrectEmailorPassword).should('be.visible')

}

logout(){
    cy.get(this.Logoutbtn).should('have.attr', 'href').and('equal', '/logout')
    cy.get(this.Logoutbtn).click().should('exist')

}

contactUs_Form(name,email,subject,message){
    cy.get(this.ContactUsBtn).click()
    cy.get(this.GetInTouch_Text).should('be.visible')
    cy.get(this.ContactForm_name).type(name)
    cy.get(this.ContactForm_Email).type(email)
    cy.get(this.Contact_subject).type(subject)
    cy.get(this.Contact_Message).type(message)
    cy.get(this.chooseFile).selectFile('package.json')
    cy.get(this.Submit).click()
    cy.get(this.SuccessMsg).should('be.visible')

}

productPage_landing(){
    cy.get(this.ProductButton).click()
    cy.get(this.allProducts_Text).should('be.visible')

}

productDetails(){
    cy.get(this.viewProduct_First).click()
    cy.get(this.product_Info).should('be.visible')

}

productSearch(keyword){
    cy.get(this.ProductSearch_bar).type(keyword)
    cy.get(this.submitSearchBtn).click()
    cy.get(this.Sreach_Products).should('be.visible')

}

}