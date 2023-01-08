import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;

while(loop){
    const answers: {
        TODO: string;
        addmore: boolean;
    } = await inquirer.prompt([
        {
            type:"input",
            name:"TODO",
            message:"What do u want to add in your todo?"
        },
        {
            type:"confirm",
            name:"addmore",
            message:"Do you want to add more ToDo?",
            default: false
        }
    ])
    const {TODO, addmore} = answers;
    console.log(answers);
    loop = addmore
    if(TODO){
        todos.push(TODO)
    }else{
        console.log("Kindly add valid input");
    }
}
    if(todos.length > 0){
        console.log("your ToDos list:");
todos.forEach(todo =>{
console.log(todo)
    });
}
else{
        console.log("No ToDo Found");
    }

    let myType: any={name: "Zia", id:1};
    myType={id:2, name:"tom"};
    myType={id:3, name:"cat",gender: false};
    myType={id:4, gender: false};
    

