//function defination
function showMe(){
   let newElement = document.createElement("h2");
   newElement.textContent = "hi madhu";
    document.getElementById('btn').replaceWith(newElement) ;
}

// map function : used to return a new array by changing each element of that array
// let usd = [12,20,45];
// console.log(usd.map(convert));
// function convert(x){
//     return x+2;
// }
 
// const input = [
//     {name:'karthik', age:22},
//     {name:'madhu', age : 23},
//     {name:'maha',age:2},
//     {name:'siddhu',age:4}
// ]
// console.log(input.map(x => x.name))
// console.log(input.map(x=>x.age)) 


 // filter function : also returns new array but it will not return all the array , only filtered eleemnt will be rreturnd
//  const price = [234,128,40,67,25,10,2];
//  const filtered = price.filter(x=> x> 100);
//  console.log(filtered)


//reduce function : reduce function returns new element by cumulating the elements together and returns a new single value
 
// const list = [12,24,85,45]
// console.log(list.reduce((total,ele)=>total-ele))

  