//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function distinctEle(arr){
    let ans=[];
for(let i=0;i<arr.length;i++){
    let temp= false;
    for(let j =0; j<ans.length;j++){
       if(arr[i]===ans
        [j]){
        temp=true;
      
       }
    }
    if(!temp){
        ans.push(arr[i])
    }
   
}
return ans;
}
let arr = [2, 2, 3, 3, 7, 5,5]
let ans = distinctEle(arr)
console.log(`arrayyyy = ${arr}`)
console.log(`distinct elements = ${ans}`)




document.getElementById("demo1").innerHTML=`array = ${arr}`;
document.getElementById("demo2").innerHTML=`distinct elements = ${ans}`;



