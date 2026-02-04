// 35. Create a function to convert a CSV text into a two-dimensional array.
// Example:

// var data =
//     "John;Smith;954-080-0800\n" +
//     "Mich;Tiger;305-000-0000\n" +
//     "Monique;Vasquez;103-000-0000";

// Output:
// [
//   ["John", "Smith", "954-080-0800"],
//   ["Mich", "Tiger", "305-000-0000"],
//   ["Monique", "Vasquez", "103-000-0000"]
// ]


function csv (data){
 let string= JSON.stringify(data)
 
 let result=string.split("\\n")
 console.log(result)
 for(let i=0;i<result.length;i++){
   // console.log(result[i])
    result[i]=result[i].split(";")
    
 }
 return result
}

let data=  "John;Smith;954-080-0800\n" +
    "Mich;Tiger;305-000-0000\n" +
    "Monique;Vasquez;103-000-0000";
  
result =csv(data)
console.log(result)

document.getElementById("demo").innerHTML=result