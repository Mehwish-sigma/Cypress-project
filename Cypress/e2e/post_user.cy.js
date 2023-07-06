/// <reference types = "cypress"/>

describe('Post Api Tests',()=>{
    it('Post ',()=>{
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            header : {
                'Autherization' : "Bearer 6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693"
            },
            body: {
                "name" : "Ajay",
                "gender": "male",
                "email":  "ajay1@gmail.com",
                "status":  "active"
            }
        }).then((res)=> {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(201)
            expect(res.body.data).has.property('email','ajay1@gmail.com')
        })


    })
})