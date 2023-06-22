import { exercise } from "./exercise";
import { products } from "./products";

const ex = new exercise()
const pro = new products()

describe('User Signup',()=>{
    beforeEach(()=>{
      ex.visit_website()
      ex.clicksignup_login()
    })

    it('Signup with Existing Email',()=>{
      ex.Signup_ExistingEmail('Mehwish','mehwish@gmail.com')
      ex.Signup_moredetails('Mrs','123456',9,'June','1999')
      ex.address_info('Mehwish','Liaqat','newCompany','street 10, main residence','House 24b,street 4','India','kerela','Hydrabad',765487,'+91747746347483')

    })

    it('Signup with non existing country in Dropdown',()=>{
        ex.EnterSignup_info('Mehwish','mehwish12@gmail.com')
        ex.Signup_moredetails('Mr','123456',9,'June','1999')
        ex.address_info('Mehwish','Liaqat','newCompany','street 10, main residence','House 24b,street 4','Pakistan','kerela','Hydrabad',765487,'+91747746347483')
      
    })

    it('Signup by selecting wrong day of birth',()=>{
      ex.EnterSignup_info('Mehwish','mehwish12@gmail.com')
      ex.Signup_moredetails('Mrs','123456',32,'June','1999')
      cy.wait(3000)
      ex.address_info('Mehwish','Liaqat','newCompany','House 24b,street 4','Pakistan','kerela','Hydrabad',765487,'+958846347483')
      
    })

    it('Signup with Right Credentials',()=>{
      ex.EnterSignup_info('Mehwish','mehwish16@gmail.com')
      ex.Signup_moredetails('Mrs','123456',9,'June','1999')
      ex.address_info('Mehwish','Liaqat','newCompany','street 10, main residence','House 24b,street 4','India','kerela','Hydrabad',765487,'+91747746347483')
      ex.deleteAccount()
    })

})


describe('User Login',()=>{
    beforeEach(()=>{
      ex.visit_website()
      ex.clicksignup_login()
    })

    it('Login with invalid email',()=>{
      ex.login('mehwis@gmail.com','123456')
    })

    it('Login with invalid password',()=>{
      ex.login('mehwish4@gmail.com','12345678')
    })

    it('Login with invalid email and password',()=>{
      ex.loginWithIncorrectCredentials('mehwi@gmail.com','134564578')
    })
  
    it('Login with Right Credentials and Logout',()=>{
      ex.login('mehwish4@gmail.com','123456')
      ex.logout()      //Logout
    })

    it('Login with Right Credentials and Delete account',()=>{
      ex.login('mehwish4@gmail.com','123456')
      ex.deleteAccount()      //Delete Account
    })

})

describe('Contact Us Form',()=>{
    beforeEach(()=>{
      ex.visit_website()
  
    })

    it('Contact Us Form With 1 missing field',()=>{
      ex.contactUs_Form('Mehwish','mehwish5@gmail.com','My Project')
    })

    it('Contact Us form with no name',()=>{
      ex.contactUs_Form('','mehwish5@gmail.com','My Project','This is a test')
    })

    it('Contact Us form with Valid Credentials',()=>{
      ex.contactUs_Form('Mehwish','mehwish5@gmail.com','My Project','This is a test','package.json')
    })

})

describe('Products Page',()=>{
  beforeEach(()=>{
    ex.visit_website()

  })

  it('Product and Product details',()=>{
    ex.productPage_landing()
    ex.productDetails()
    
  })

  it('Product Search',()=>{
    ex.productPage_landing()
    ex.productSearch('top')
    
  })

})

describe('Verify subscription',()=>{
  beforeEach(()=>{
    ex.visit_website()

  })

  it('Verify subscription on Home page',()=>{
    pro.scrollToBottom()
    pro.Subscription('mehwish@gmail.com')
    
  })

  it('Verify subscription on Cart Page',()=>{
    pro.ClickCart_Btn()
    pro.Subscription('mehwish@gmail.com')
    
  })

  it('Add Products in the cart',()=>{
    ex.productPage_landing()
    pro.ProductAddToCart()
    
  })

  it('Verify Products quantity in the cart ',()=>{
    ex.productPage_landing()
    ex.productDetails()
    pro.product_quantity(4)
    pro.addToCart()
    
  })

  it.only('Place Order: Register while Checkout',()=>{
    ex.productPage_landing()
    ex.ProductAddToCart()
    
    

  })

})
