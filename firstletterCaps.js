//Take a string as input and all the first character of string should be capital

// My logic Initial
let str = "my name is nikita"
var strobj = str.split(" ")
let finStr = ""
for(i=0;i<strobj.length;i++)
{
    finStr +=  strobj[i].charAt(0).toUpperCase()+strobj[i].slice(1)+" ";
    //  console.log(strobj[i].charAt(0).toUpperCase()+strobj[i].slice(1))
}
console.log(finStr)


//modified logic
let str1 = "my name is nikita"
let arrStr = str1.split(" ")
for(i=0;i<arrStr.length;i++){
    arrStr[i] = arrStr[i].charAt(0).toUpperCase()+arrStr[i].slice(1);
}
console.log(arrStr.join(" "))