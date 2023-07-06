import { User } from "./userApi";

const user = new User()

describe('Get User Api Tests',()=>{
    it('get user another site',()=>{
        let res = user.getallUsers()
        cy.log(res)

    })
})
/*
 let bearer_token ='6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693'

describe('Get User Api Tests',()=>{
    it('get user another site',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            header : {
                //'autherization' : "Bearer 6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693"
                'authorization' : "Bearer" + bearer_token
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })

    })

    it('get specific user',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users?id=3406188',
            header : {
                'authorization' : "Bearer 6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            //expect(res.body.data.name).to.eq("Adinath Shah")   //Not working this assertion
        })
    })

    it('get user',()=>{
        cy.request({
            method : 'GET',
            url : 'https://automationexercise.com/api/productsList',
            header : {
                'authorization' : "Bearer"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })

})
*/

