export class telerik {
    
    downloaddevcraftfile ='#ContentPlaceholder1_C457_Col00 > .Btn'
      emailfordownload= '#email'
      showpassword='.show-hide-password'
      nextbutton= '.btn'
      changeEmail ='.u-mwfc > a'
      changeloginemail = '.u-mwfc > .link'
    signuppassword = '#password'
      firstname = '#fist-name'
      lastname ='#last-name'
      companyname ='#company'
      phonenumber ='#phone'
      teritory ='#country > .k-input-button > .k-button-icon'
      Createacc_btn ='.btn'
    homepagebox1= '#ContentPlaceholder1_C352_Col00 > .Box'
    Downloadbtn ='#ContentPlaceholder1_C433_Col00 > .Btn'
    homepagebox2= '#ContentPlaceholder1_C352_Col01 > .Box'
    secondoption = ':nth-child(1) > .List > :nth-child(2) > .track--productLink > .icon-arrow'
    secondboxoption = '#ContentPlaceholder1_C352_Col01 > .Box > .Box-content > .u-mb2 > :nth-child(2)'
    challenge = '.StoryTabs-item--1 > .u-ff-sans1 > .u-tint-white'
       exploreportfoliobtn1 ='#ContentPlaceholder1_C383_Col00 > .Btn'
       seepricing1 = '#ContentPlaceholder1_C383_Col01 > .Btn'
       mobile ='[href="#mobile"]'
       mobileoption= '#ContentPlaceholder1_C266_Col01 > .List > li > .u-db'
       listview=':nth-child(3) > .Accordion-toggle'
       listview_learnmore ='.is-active > .Accordion-inner > .Btn'
       DocumentationXmarin =':nth-child(3) > .u-ff-sans > .u-fs24 > :nth-child(2) > a'
       demos = '#page-tree_tv_active > :nth-child(1) > .k-in'
    Partnership ='.StoryTabs-item--2 > .u-ff-sans1 > .u-tint-white'
       pricing = '#ContentPlaceholder1_C383_Col01 > .Btn'
       seedetails ='.Overlay > .Btn'
       buynow= '.Overlay > .Btn'
    testimonial ='.Testimonials-prev'
    Blogsbtn = '#ContentPlaceholder1_C416_Col00 > .Btn'
       modern_ai =':nth-child(4) > .BlogPost > .Info > .h2 > a'

       subscriptionboxemail=' #Email-1 '
       subscriptionboxcountry ='#Country-1'
       subscriptionsubmit =':nth-child(6) > .Btn'
       // tryuibtn =':nth-child(6) > .Btn'
    

    click_devcraftfile(){
        cy.get(this.downloaddevcraftfile).click()
    }
    emailforSignup(email){
        cy.get(this.emailfordownload).type(email)
        cy.get(this.nextbutton).click()
        
    }
    changeemailbtn(){
        cy.get(this.changeEmail).click()
    }
    Selctdownloadbtn(){
        cy.get(this.Downloadbtn).click()
    }
    signup_password(password){
        cy.get(this.signuppassword).type(password)
        cy.get(this.showpassword).click()
    }
    signupname(fname,lname,cname,phonenum,country){
        cy.get(this.firstname).type(fname)
        cy.get(this.lastname).type(lname)
        cy.get(this.companyname).type(cname)
        cy.get(this.phonenumber).type(phonenum)
        cy.get(this.teritory).type(country,'{Enter}')
    }
    createAccountbtn(){
        cy.get(this.Createacc_btn).click()
    }
    selectbox1(){
        cy.get(this.homepagebox1).click()
        cy.get(this.secondoption).click()
       // cy.get(this.Downloadbtn).click()
     // cy.get('#ContentPlaceholder1_C433_Col00 > .Btn').click()
    }
    selectbox2(){
        cy.get(this.homepagebox2).click()
        cy.get(this.secondboxoption).click()
        cy.get(this.Downloadbtn).click()
     // cy.get('#ContentPlaceholder1_C433_Col00 > .Btn').click()
        
    }
    successbox1(){
        cy.get(this.challenge).click()
        cy.get(this.exploreportfoliobtn1).click()
        cy.get(this.mobile).click()
        cy.get(this.mobileoption).click()
        cy.get(this.listview).click()
        cy.get(this.listview_learnmore).click()
        cy.get(this.DocumentationXmarin).click()
        cy.get(this.demos).click()
        cy.get(this.DocumentationXmarin).click()
        cy.go(-1)
    }
    successbox2(){
        cy.get(this.Partnership).click()
        cy.get(this.pricing).click()
        cy.get(this.seedetails).click()
        cy.get(this.buynow).click()
    }

    Developerstestimonials(){
        cy.get(this.testimonial).click() // reviews slider
    }
    
    Blogs(email,country){
        cy.get(this.Blogsbtn).click()
        cy.get(this.modern_ai).click()
        cy.get(this.subscriptionboxemail).type(email)
        cy.get(this.subscriptionboxcountry).select(country,'{Enter}')
        cy.get(this.subscriptionsubmit).click()

    }
    


    
}