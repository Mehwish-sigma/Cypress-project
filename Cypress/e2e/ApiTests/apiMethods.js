const url = Cypress.env("baseUrl")
const token = Cypress.env("token")

class User {

 getallusers(){
    return cy.request({
        method : 'GET',
        url : url + '/users',
    })
 }  

 getbyid(userId){
    return cy.request({
        method : 'GET',
        url : url + '/users' + userId,
        failOnStatusCode: false
    })

 }

 postaUser(postUser){
    return cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {
                'Authorization' : token
            },
            body: postUser,
            failOnStatusCode: false,
            
        })
  } 

  updateUser(userId, updatedData) {
   return cy.request({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v2/users/' + userId,
      failOnStatusCode: false,
      headers : {
        'Authorization' : token
    },
      body: updatedData,
    });
    
  }

  Delete(userId) {
    return cy.request({
       method: 'DELETE',
       url: 'https://gorest.co.in/public/v2/users/' + userId,
       failOnStatusCode: false,
       headers : {
         'Authorization' : token
     },
    
     }); 
   }


//Posts
    getallPosts(){
        return cy.request({
            method : 'GET',
            url : url + '/posts',
        })
    }

    getAPost(postId){
        return cy.request({
            method : 'GET',
            url : url + '/posts/' + postId ,
        });
    }

    CreateAPost(postData){
        return cy.request({
                method : 'POST',
                url : url + '/posts',
                headers : {
                    'Authorization' : token
                },
                body: postData,
                failOnStatusCode: false,
            })
      } 

    updatePost(postId, updatedData) {
        return cy.request({
           method: 'PUT',
           url: 'https://gorest.co.in/public/v2/users/' + postId,
           failOnStatusCode: false,
           headers : {
             'Authorization' : token
         },
           body: updatedData,
         });
         
       }

    DeletePost(postId) {
        return cy.request({
           method: 'DELETE',
           url: 'https://gorest.co.in/public/v2/users/' + postId,
           failOnStatusCode: false,
           headers : {
             'Authorization' : token
         },
        
         }); 
       }


//Comments
    getallcomments(){
        return cy.request({
            method : 'GET',
            url : url + '/comments',
        })
    }

    getAComment(id){
      return cy.request({
          method : 'GET',
          url : url + '/comments/' + id,
          headers : {
            'Authorization' : token
        },
      });
  }

    createComment(commentData) {
      return cy.request({
        method: 'POST',
        url: url + '/comments',
        headers : {
          'Authorization' : token
      },
        
        body: commentData,
      });
    }

    updateComment(Id,updatedData) {
      return cy.request({
         method: 'PUT',
         url: 'https://gorest.co.in/public/v2/users/' + Id,
         failOnStatusCode: false,
         headers : {
           'Authorization' : token
       },
         body: updatedData,
       });
       
     }

  DeleteComment(CommentId) {
      return cy.request({
         method: 'DELETE',
         url: 'https://gorest.co.in/public/v2/users/' + CommentId,
         failOnStatusCode: false,
         headers : {
           'Authorization' : token
       },
      
       }); 
     }

  //todos
  getalltodos(){
        return cy.request({
            method : 'GET',
            url : url + '/todos',
            headers : {
              'Authorization' : token
          },
        })
    } 

    getAtodo(Id){
      return cy.request({
          method : 'GET',
          url : url + '/todos/' + Id ,
          headers : {
            'Authorization' : token
        },
      });
  }

    createTodo(commentData) {
      return cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/todos',
        headers : {
          'Authorization' : token
      },
        body: commentData,
      });
    }

    updateTodo(Id,updatedData) {
      return cy.request({
         method: 'PUT',
         url: 'https://gorest.co.in/public/v2/users/' + Id,
         failOnStatusCode: false,
         headers : {
           'Authorization' : token
       },
         body: updatedData,
       });
       
     }

  deletetodo(Id) {
      return cy.request({
         method: 'DELETE',
         url: 'https://gorest.co.in/public/v2/users/' + Id,
         failOnStatusCode: false,
         headers : {
           'Authorization' : token
       },
      
       }); 
     }

  }

export default new User