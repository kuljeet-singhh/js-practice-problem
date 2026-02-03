// let arr = [1, 2, 3, 4, 5, 6];
// console.log("array = " +arr);
// document.getElementById("demo1").innerHTML = "array = " + arr;
// const sol = arr.reverse();


let arr = [1, 2, 3, 4, 5, 6];
console.log("array = " +arr);
document.getElementById("demo1").innerHTML = "array = " + arr;
let n= arr.length-1;
let s=0;
let e=n;
let temp;

while(s<e){
    temp = arr[s];
    arr[s] =arr[e];
    arr[e] = temp;
    s++;
    e--;
}

console.log("Reverse array = "+arr);


document.getElementById("demo").innerHTML = arr;
