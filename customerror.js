class customError extends Error{
    constructor(message){
        super(message);
        this.name = "Custom error";
    }
}
function checkError(){
    throw new Error("This is error");
}
try{
    checkError();
}catch(err){
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}