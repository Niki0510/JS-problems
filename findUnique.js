//to find unique letters in string

let str = "rtgsfetrdvnhuyetgfvgscewrfgewvvawetgoioifebhc"
var obj = {};
for(i=0;i<str.length;i++){
    let char = str.charAt(i);
    if(!obj[char]){
        obj[char] = true;
        
    }
}
  console.log(Object.values(obj)) //Important Object not object and of - () not []

//to find unique letters in string without CharAt

let str1 = "ggffrfydjkfkorwpiiryytutiowp[oihgtfrewsdxfcgvhjklmnjbhgfd"
 var strObj1 = {}
for(let i = 0; i < str1.length;i++){
        var char1 = str1[i];
       
        if(!strObj1[char1]){
            console.log(strObj1[char1])
            strObj1[char1]=true;
            console.log(strObj1[char1])
        }

         
}
console.log(Object.keys(strObj1).join(""))