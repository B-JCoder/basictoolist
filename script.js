const todoLists = document.querySelector(".todoLists");//is me list bane gi                                                                   //First Step
const listValue = document.querySelector(".input");//is me value dalen gae                                                                   //SecondStep 
let todoListValue = [];

const getTodoListFromLS = () => {
    return JSON.parse(localStorage.getItem('todoData')) || []; //Local Storage se Data  ko get ker rha ha AND JSON.parse converts a JSON string back into a JavaScript object or array. 

}
// Create Funtion For localStorage
const addTodoListLocalStorage = (todo) => {

    return localStorage.setItem('todoData', JSON.stringify(todo)) //localStorage me data save karega AND JSON.stringify converts a JavaScript object or array into a JSON string.
}


const showTodoList = ()=> {
       todoListValue = getTodoListFromLS();
    todoListValue.forEach( (curTodo) =>{                             //forEach JavaScript array method har element par ek function ko run karta hai, jo array ke har item par individually operation perform karta hai, bina koi naya array banaye.

        const liElement = document.createElement("li");//list ko create kara ha                                                            FiveStep       

        liElement.innerHTML = curTodo;                                                                                                       //Six Step 
        todoLists.append(liElement);//add kerwane ke liye use hota ha                                                                                //Seven Step 

    })
}

const removeTodoList = (e) => {

    console.log(e.target.textContent);//Click kerne per console me show ho rha ha is se
    let currentTodo = e.target;
    console.log(todoListValue);

    updatedTodoList = todoListValue.filter((curTodoValue) =>curTodoValue !== currentTodo.textContent);

    addTodoListLocalStorage(updatedTodoList);
    currentTodo.remove();
    
    
    /* todoLists.innerHTML = "";
      showTodoList();*/                 //list ko delete karna ha to iske liye use karna ha chal rha ha mager pori list dobarah render ho rahi ha.


    console.log(updatedTodoList);


}

const addTodoList = (e) => {
    e.preventDefault();//preventDefault jo element ka behavior hota ha ose remove ker deta ha and (a) ki jagah koi bhi name  ho sakta ha         //Four Step
    

todoListValue = getTodoListFromLS();
    let newTodo = listValue.value.trim(); //Trim Space ko count nahi  karega
    console.log(newTodo)
    listValue.value = "";
    if (newTodo.length != 0 && !todoListValue.includes(newTodo)) {

        todoListValue.push(newTodo); 
        todoListValue = [... new Set(todoListValue)]//Same value Local storage per add nahi ho gi but value UI me ae gi 

        //----------------------Create LoCal Storage-----------------------


        addTodoListLocalStorage(todoListValue);//Call function



        const liElement = document.createElement("li");//list ko create kara ha                                                            FiveStep       

        liElement.innerHTML = newTodo;                                                                                                       //Six Step 
        todoLists.append(liElement);//add kerwane ke liye use hota ha                                                                                //Seven Step 
    }

};


showTodoList();

document.querySelector(".btn").addEventListener("click", (e) => {                                                                           //Third Step
    addTodoList(e);
});


todoLists.addEventListener('click' , (e)=> removeTodoList(e));
