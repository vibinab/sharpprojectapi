

function savelocal(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.useremail.value;

    let obj={

        username:username,
        email:email
    }
    
    axios.post('https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/student' ,obj)
    .then((res)=>{
    console.log(res)
})
    .catch((err)=>console.log(err))

}


window.addEventListener('DOMContentLoaded', ()=> {
    axios.get('https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/student')
    .then((res)=>{
        console.log(res.data)
        for (var i=0;i<res.data.length;i++){
            show(res.data[i])
        }
    })
    .catch((err)=>console.log(" fech error"))
})




function show(user){

    const parent=document.getElementById('listofuser')
    const child=`<li id="${user._id}">${user.username}${user.email}
    <button onclick="deletestudent('${user._id}')">delete</button>
    <button onclick="editstudent('${user._id}','${user.username}','${user.email}')">edit</button></li>`
    parent.innerHTML=parent.innerHTML+child
}


function deletestudent(userid){

    console.log(userid)
    axios.delete(`https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/student/${userid}`)
    .then((res)=> {
        // console.log("dleted",res)
        removefromscreen(res)
    })
    .catch((err)=> console.log(err))

}


function removefromscreen(userid){

    const parent=document.getElementById('listofuser')
    const deletenode=document.getElementById(userid)
    if(deletenode){
        parent.removeChild(deletenode)
      }
}


// function editstudent(username, useremail, userid){
//    document.getElementById('name').value=username
//    document.getElementById('email').value=useremail
//    deletestudent(userid)


// }


function editstudent(userid, username,useremail){
    console.log(userid,username,useremail)

    const username1=document.getElementById('name').value=username
    const useremail1=document.getElementById('email').value=useremail
    let obj1={
        username:username1,
        useremail:useremail1
    }

    axios.put(`https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/student/${userid}`, obj1)
    .then((res)=>console.log(res)) 
    .then((err)=>console.log(err))


    
}