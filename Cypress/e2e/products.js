export class products{

    //Home Subscription
    subscription_box = '#susbscribe_email'
    subscriptionBtn = '#subscribe'
    cartBtn = '.shop-menu > .nav > :nth-child(3) > a'

    //Cart page
    addToCartProduct = ':nth-child(7) > .product-image-wrapper > .single-products > .productinfo > .btn'
    continueShopping = '.modal-footer > .btn'
    viewcartBtn = 'u'
    addToCartProduct2 = ':nth-child(13) > .product-image-wrapper > .single-products > .productinfo > .btn'
    addToCartProduct3=':nth-child(8) > .product-image-wrapper > .single-products > .productinfo > .btn'
    addToCartProduct4 = ':nth-child(19) > .product-image-wrapper > .single-products > .productinfo > .btn'
    cart_items = '#cart_items > :nth-child(1)'
    productQuantity ='#quantity'

    //order Placement
    addToCartBtn = ':nth-child(5) > .btn'
    clickToProceed = '.col-sm-6 > .btn'
    CheckoutLogin_RegisterBtn = '.modal-body > :nth-child(2) > a > u'
    commentText= '.form-control'
    placeorderbtn = ':nth-child(7) > .btn'

    //payment
    payment_text='.heading'
    nameOnCard = '[data-qa="name-on-card"]'
    card_number = '[data-qa="card-number"]'
    cvc_number = '[data-qa="cvc"]'
    Expirymonth = '[data-qa="expiry-month"]'
    ExpiryYear ='[data-qa="expiry-year"]'
    ConfirmPaymentBtn = '[data-qa="pay-button"]'
    OrderPlaced_text ='[data-qa="order-placed"] > b'
    ContinueBtn ='[data-qa="continue-button"]'

    // Invoice Download
    downloadinvoiceBtn = '.col-sm-9 > .btn-default'

    //remove product
    removeProductBtn = '#product-5 > .cart_delete > .cart_quantity_delete > .fa'
    removeProductBtn2 = '#product-6 > .cart_delete > .cart_quantity_delete'

    //View Category
    categorySidebar ='.left-sidebar > :nth-child(1)'
    ClickWomen = ':nth-child(1) > .panel-heading > .panel-title > a'
    ClickTops = '#Women > .panel-body > ul > :nth-child(2) > a'
    CategoryProducts_Text = '.title'
    ClickMen = ':nth-child(2) > .panel-heading > .panel-title > a'
    clickShirts = '#Men > .panel-body > ul > :nth-child(1) > a'

    //View Brand Products
    BrandsSidebar = '.brands_products > h2'
    clickpolo = '.brands-name > .nav > :nth-child(1) > a'
    clickBiba = '.brands-name > .nav > :nth-child(8) > a'

    //Add Searched Products to the cart
    searchedProdct1=':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn'
    searchedProdct2= ':nth-child(15) > .product-image-wrapper > .single-products > .productinfo > .btn'
    
    //Product Review
    name = '#name'
    email = '#email'
    review = '#review'
    submitBtn = '#button-review'

    //Scroll Up
    subscriptionBoxFooter='.footer-widget > .container > .row'
    scrollUpBtn = '#scrollUp'
    HomepageBanner = '#slider'





    scrollToBottom(){
        cy.scrollTo('bottom',{ duration: 4000 })

    }
    
    Subscription(subscribe){
        cy.get(this.subscription_box).type(subscribe)
        cy.get(this.subscriptionBtn).click()

    }  

    ClickCart_Btn(){
        cy.get(this.cartBtn).click()
    }

    ProductAddToCart(){
        cy.get(this.addToCartProduct).click()
        cy.wait(2000)
        cy.get(this.continueShopping).click()
        cy.get(this.addToCartProduct2).click()
        cy.wait(2000)
        cy.get(this.continueShopping).click()
        cy.get(this.addToCartProduct3).click()
        cy.get(this.continueShopping).click()
        cy.get(this.addToCartProduct4).click()
        cy.get(this.viewcartBtn).click()
        cy.get(this.cart_items).should('be.visible')

    }

    product_quantity(quantity){
        cy.get(this.productQuantity).clear().type(quantity)

    }

    addToCart(){
        cy.get(this.addToCartBtn).click()
        cy.get(this.continueShopping).click()

    }

    paymentProceedBtn(){
        cy.get(this.clickToProceed).click()
        
    }

    paymentProceed(){
        cy.get(this.CheckoutLogin_RegisterBtn).click().should('be.visible')  //popup
        
    }

    AddCommentAndpaymentProceed(comment){
        cy.get(this.commentText).type(comment)
        cy.get(this.placeorderbtn).click().should('be.visible')

    }

    payment(name,number,cvc,month,year){
        cy.get(this.payment_text).should('be.visible')
        cy.get(this.nameOnCard).type(name)
        cy.get(this.card_number).type(number)
        cy.get(this.cvc_number).type(cvc)
        cy.get(this.Expirymonth).type(month)
        cy.get(this.ExpiryYear).type(year)
        cy.get(this.ConfirmPaymentBtn).click()
        cy.get(this.OrderPlaced_text).should('be.visible')
        //cy.get(this.ContinueBtn).click()

    }

    invoiceDownload(name,number,cvc,month,year){
            cy.get(this.payment_text).should('be.visible')
            cy.get(this.nameOnCard).type(name)
            cy.get(this.card_number).type(number)
            cy.get(this.cvc_number).type(cvc)
            cy.get(this.Expirymonth).type(month)
            cy.get(this.ExpiryYear).type(year)
            cy.get(this.ConfirmPaymentBtn).click()
            cy.get(this.OrderPlaced_text).should('be.visible')
            cy.get(this.downloadinvoiceBtn).click()
            cy.get(this.ContinueBtn).click()

    }

    removeProductFromCart(){
        cy.get(this.removeProductBtn).click()
        cy.get(this.removeProductBtn2).click()

    }
    
    ViewCategory(){
        cy.get(this.categorySidebar).should('be.visible')
        cy.get(this.ClickWomen).click()
        cy.get(this.ClickTops).click()
        cy.get(this.CategoryProducts_Text).should('be.visible')
        
    }

    ViewCategory2(){
        cy.get(this.ClickMen).click()
        cy.get(this.clickShirts).click()
        cy.get(this.CategoryProducts_Text).should('be.visible')

    }

    ViewBrands(){
        cy.get(this.BrandsSidebar).should('be.visible')
        cy.get(this.clickpolo).click()
        cy.get(this.CategoryProducts_Text).should('be.visible')
        cy.get(this.clickBiba).click()
        cy.get(this.CategoryProducts_Text).should('be.visible')
    }

    AddSearchedProductsToCart(){
        cy.get(this.searchedProdct1).click()
        cy.get(this.continueShopping).click()
        cy.get(this.searchedProdct2).click()
        cy.get(this.viewcartBtn).click()
    }

    reviewProduct(name,email,review){
        cy.get(this.name).type(name)
        cy.get(this.email).type(email)
        cy.get(this.review).type(review)
        cy.get(this.submitBtn).click()
    }

    scrollwithArrow(){
        cy.get(this.subscriptionBoxFooter).should('be.visible')
        cy.get(this.scrollUpBtn).click()           // Scroll Up Arrow button
        cy.get(this.HomepageBanner).should('be.visible')
        
    }

    scrollwithoutArrow(){
        cy.get(this.subscriptionBoxFooter).should('be.visible')
        cy.scrollTo('top',{ duration: 4000 })
        cy.get(this.HomepageBanner).should('be.visible')
        
    }


    
}