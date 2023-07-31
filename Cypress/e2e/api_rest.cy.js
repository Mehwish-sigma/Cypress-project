/// <reference types = "cypress"/>
import  User  from "./ApiTests/apiMethods.js"


let userName = 'john.doe';
//let userEmail = `${userName}@testing.com`;

//End point => Users
describe('Users',()=> {

    it('Get all users ',()=>{
        const allusers =  User.getallusers()
        allusers.then((res) => {
            expect(res.status).to.eq(204)
            expect(res.body.length).eq(10)       
            cy.log(res.body)

        })
    })    

    it('Get by id',()=>{
        const userId = '/3810856'
        const getbyid = User.getbyid(userId)
        getbyid.then((res) => {
            cy.log(res.body)
            expect(res.status).to.eq(200)
            expect(res.body.gender).eq("female")
            expect(res.body.name).eq("Chaturaanan Ahuja")   

        })
    })


    it('Get by missing path parameters',()=>{
        const getbyid = User.getbyid('Malati Kakkar')
        getbyid.then((res) => {
            cy.log(res.body)
            expect(res.status).to.eq(404)  

        })
    })

    it('Create a user',()=>{
        const userdata = {
            "name": userName,
            "email": 'inaya_iyer1@gmail.com',    //change every time
            "gender": "female",
            "status": "inactive"
        }
        const createUser = User.postaUser(userdata)
        createUser.then((res)=> {
            expect(res.status).to.eq(201)
            expect(res.body.gender).eq('female')
            expect(res.body.status).eq('inactive')
        });
    })

    it('Create user with exixting mail',()=>{
        const userdata = {
            "name": userName,
            "email": 'shubham@gmail.com',
            "gender": "female",
            "status": "inactive"
        }
        const createUser = User.postaUser(userdata)
        createUser.then((res)=> {
            expect(res.status).to.eq(422)
            
        })
    })  
})

    it('Update a user using PUT request', () => {
        const userId = 3826955; 
        const updatedData = {
            "name": 'John',
            "email": 'john1234@gmail.com',
             "gender": "female",
             "status": "inactive",
        };

        const updateUser = User.updateUser(userId,updatedData)
          updateUser.then((res)=> {
            expect(res.status).eq(204)
            expect(res.body.name).to.eq('John')

          })
        })

        it('PUT request with missing details', () => {
            const userId = 3826955; 
            const updatedData = {
                "name": 'John',
                "email": 'john123456@gmail.com',
            };
    
            const updateUser = User.updateUser(userId,updatedData)
              updateUser.then((res)=> {
                expect(res.status).eq(200)
                expect(res.body.name).to.eq('John')
    
              })
            })


        it('Delete user', () => {
            const userId = 3826955; 
            
            const deleteUser = User.Delete(userId)
             deleteUser.then((res)=> {
             expect(res.status).eq(200)
             expect(res.body.name).to.eq('John')
        
            })
 })


 //End Point => posts
describe('Posts',()=> {
    it('Get all posts ',()=>{
        const allposts =  User.getallPosts()
        allposts.then((res) => {
            cy.log(res.body)
            expect(res.status).to.eq(200)
            expect(res.body.length).eq(10)       
            
            
        })
    }) 

    it('Get a single posts ',()=>{
        const postid = 55827;
        const singlepost =  User.getAPost(postid)
        singlepost.then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('id', postid)
            //expect(res.body.title).to.eq("Suasoria arbor cometes. Laboriosam pauper cerno. Capillus id conicio. Tum adinventitias sperno. Corona aureus civitas. Delinquo vomito cultura. Vulticulus corrigo demulceo. Umquam provident tricesimus. Adsuesco tempus deludo. Civitas et aegre. Somniculosus decretum corrumpo. Astrum et curso.")
        })
    }) 

    it('Create a post',()=>{
        const postData = {
            "title":"Test data",
            "body":"Desidero copiose qui. Uter voluptatem aliquam. Amplus quis sum. Aeneus curso vinum. Doloribus tametsi despecto. Bos audax pauci. Coniuratio deporto certo. Cursus vinum conicio. Consequatur et aut. Desolo consectetur tredecim. Est qui quisquam. Qui thema assentator. Eum culpa venio. Denuo cedo annus. Uredo non bellicus. Vespillo cohors voluptatibus. Curto decerno porro.",
            "user_id":3913651,
            }
        const createpost = User.CreateAPost(postData)
        createpost.then((res)=> {
            expect(res.status).to.eq(201)
            expect(res.body).to.have.property('title', postData.title);
            });
    }) 

    it('Update a post', () => {
        const postId = 3913646; 
        const updatedPostData = {
            "title":"Test data",
            "body":"Desidero copiose qui. Uter voluptatem aliquam. Amplus quis sum. Aeneus curso vinum. Doloribus tametsi despecto. Bos audax pauci. Coniuratio deporto certo. Cursus vinum conicio. Consequatur et aut. Desolo consectetur tredecim. Est qui quisquam. Qui thema assentator. Eum culpa venio. Denuo cedo annus. Uredo non bellicus. Vespillo cohors voluptatibus. Curto decerno porro.",            
        };
        const update_user = User.updatePost(postId,updatedPostData)
          update_user.then((res)=> {
            expect(res.status).to.eq(200)
            //expect(res.body).to.have.property('title', updatedPostData.title)
          });
        })

        it('Delete post', () => {
            const postId_Delete = 3913639; 
            
            const deleteUser = User.DeletePost(postId_Delete)
             deleteUser.then((res)=> {
             expect(res.status).eq(204)
             
            })
        })
 })

 //Comments 
 describe('Comments',()=> {
    it('Get all comments ',()=>{
        const allcomments =  User.getallcomments()
        allcomments.then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.length).eq(10)       
            cy.log(res.body)
            
        })
    })

    it('Get a single comment ',()=>{
        const id = 47001;
        const singlepost =  User.getAComment(id)
        singlepost.then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('id', postid)
            //expect(res.body.title).to.eq("Suasoria arbor cometes. Laboriosam pauper cerno. Capillus id conicio. Tum adinventitias sperno. Corona aureus civitas. Delinquo vomito cultura. Vulticulus corrigo demulceo. Umquam provident tricesimus. Adsuesco tempus deludo. Civitas et aegre. Somniculosus decretum corrumpo. Astrum et curso.")
        })
    }) 


    it('Create a comment',()=>{
        const commentData = {
        "post_id": 56561,
        "name": "Bishnu Bandopadhyay",
        "email": "bishnu_bandopadhyay@hodkiewicz-leffler.test",
        "body": "Incidunt magnam et. Ducimus aut deleniti. Et sapiente porro. Veniam asperiores est."
            }
        const createcomment = User.createComment(commentData)
        createcomment.then((res)=> {
            cy.log(res.body)
            expect(res.status).eq(201)
            expect(res.body.body).eq('Incidunt magnam et. Ducimus aut deleniti. Et sapiente porro. Veniam asperiores est.')
            expect(res.body.post_id).eq(56561)
            });
    }) 

    it('Update a comment', () => {
        const commentId = 46716; 
        const updatedCommentData = {
            name: 'John Doee',
            email: 'john.doe1@example.com',
            body: 'An updated comment body.',
            };
        const update_comment = User.updateComment(commentId,updatedCommentData)
          update_comment.then((res)=> {
            expect(res.status).to.eq(200)
            //expect(res.body).to.have.property('title', updatedCommentData.title)
          });
        })

        it('Delete comment', () => {
            const commentId_Delete = 47001; 
            const deleteCom = User.DeleteComment(commentId_Delete)
             deleteCom.then((res)=> {
             expect(res.status).eq(204)
             expect(res.body).to.be.empty
             
            })
        })
    
})    


//End Point => todos

describe('Todos',()=> {
    it('Get all todos ',()=>{
        const alltodos =  User.getalltodos()
        alltodos.then((res) => {
            cy.log(res.body)
            expect(res.status).to.eq(200)
            expect(res.body.length).eq(10)       
            
            
        })
    }) 

    it('Get a single todo ',()=>{
        const todoid = 21275;
        const singletodo =  User.getAtodo(todoid)
        singletodo.then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('id', todoid)
         })
    }) 

    it('Create a todo',()=>{
        const todoData = {
        //"user_id": 3630521,
        "title": "API testing",
        "due_on": "2023-07-14T12:12:12.000+05:30",
        "status": "completed"
    }
        const createtodo = User.createTodo(todoData)
        createtodo.then((res)=> {
            expect(res.status).to.eq(201)
            expect(res.body.title).to.eq("API testing");
            });
    }) 

    it('Update a comment', () => {
        const todoId = 46716; 
        const updatedtodoData = {
            name: 'John Doee',
            email: 'john.doe1@example.com',
            body: 'An updated comment body.',
            };
        const update_todo = User.updateTodo(todoId,updatedtodoData)
          update_todo.then((res)=> {
            expect(res.status).to.eq(200)
            expect(res.body).to.have.property('title', updatedtodoData.title)
          });
        })

        it('Delete Todo', () => {
            const todoId_Delete = 47001; 
            const deletetodo = User.deletetodo(todoId_Delete)
             deletetodo.then((res)=> {
             expect(res.status).eq(204)
             expect(res.body).to.be.empty
             
            })
        })
})