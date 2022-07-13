
function saveapi(event){
    event.preventDefault();
    const expense= event.target.expense.value
    const  desc=event.target.desc.value
    const category=event.target.category.value

    let obj= {
        expense:expense,
        desc:desc,
        category:category
    }
    axios.post('https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/expense', obj)
    .then((res)=>console.log(res))
    .then((err)=>console.log(err))
}


window.addEventListener('DOMContentLoaded',()=> {
    axios.get('https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/expense')
    .then((res)=>{
        for(var i=0;i<res.data.length;i++){
            show(res.data[i])
        }
    }) 
    .catch((err)=>console.log(err))
})

function show(expensedetail){
    const parent=document.getElementById('listofuser')
    const child=`<li id="${expensedetail._id}">${expensedetail.expense} ${expensedetail.desc} ${expensedetail.category}
    <button onclick="deletedetail('${expensedetail._id}')">delete</button>
    <button onclick="editdetail('${expensedetail._id}','${expensedetail.expense}','${expensedetail.desc}' ,'${expensedetail.category}')">edit</button>
    </li>`
    parent.innerHTML=parent.innerHTML+child
}

function deletedetail(deleteid){
    console.log(deleteid)
    axios.delete(`https://crudcrud.com/api/32eaad3c9b4b4e2d9d87fa86e1e8db6b/expense/${deleteid}`)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

function editdetail(id,amount,desc, category){
    document.getElementById('amount').value=amount
    document.getElementById('details').value=desc;
    document.getElementById('cat').value=category
    deletedetail(id)
}

