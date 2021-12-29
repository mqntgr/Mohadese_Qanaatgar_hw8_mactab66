//challenge start
// function splitBill(amount , numPeople){
//     return `Each person needs to pay ${amount/ numPeople}`
// }
// console.log(splitBill(10,2))
// console.log(splitBill(10,4))

//with Arrow function

 let splitBill = (amount,numPeople) => `Each person needs to pay ${amount/ numPeople}`

console.log(splitBill(10,5))

//stretch goal start
// function countDown(startingNumber ,step){
//     let countFromNum = startingNumber + step
//     return function decrease(){
//         countFromNum =countFromNum-step;
//         return countFromNum;
//     }
// }
// const countingDown =countDown(20,2);
// console.log(countingDown());
// console.log(countingDown());
// console.log(countingDown());

//with Arrow function
let countDown = (startingNumber,step) => {
    let countFromNum = startingNumber + step
    return decrease = () =>{
        countFromNum =countFromNum-step;
        return countFromNum;
    }
}
const countingDown =countDown(20,2);
console.log(countingDown());
console.log(countingDown());
