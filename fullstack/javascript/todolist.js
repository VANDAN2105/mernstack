// basic todo list app

/*
user defined actions
> quit app
>print list
>add task
>delete task
*/ 

let todo =[];
let choice = prompt("enter your choice");
//always use while loop when loop iteration depends on user actions

while(true){
    if(choice == "quit"){
        console.log("you quit");
        break;
    }
    else if(choice=="add"){
        let task=prompt("enter the task");
        todo.push(task);
        console.log("task added");
        
        
    }
    
    
    else if(choice=="list"){
        if(todo.length==0){
            console.log("list is empty");
            }
        else{
        console.log("---------")
        console.log(todo);
        console.log("---------")
        }
    }



    else if(choice=="delete"){
        let dlt = prompt("enter the task that you want to delete");
        if(todo.includes(dlt)==false){
            console.log("not found");
        }
        else{
            let idx = todo.indexOf(dlt);
            todo.splice(idx, 1);

            console.log("task deleted");
            console.log("new list -------");
            console.log(todo);
        }
       
    }



    else{
        console.log("wrong choice");
        
    }
   choice = prompt("enter your choice");
}
