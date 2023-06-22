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
    cart_items = '#cart_items > :nth-child(1)'

    productQuantity ='#quantity'
    addToCartBtn = ':nth-child(5) > .btn'


    
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


    
}