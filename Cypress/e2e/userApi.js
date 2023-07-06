export class User {
    getallUsers(){
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            header : {
                'autherization' : "Bearer 6cb9afa33c14843ea4c7388c8fa6f0a7ad304efff55c8f7eedb79e2f1fbd5693"
                //'authorization' : "Bearer" + bearer_token
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    }

}