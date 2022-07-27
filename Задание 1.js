const obj = {
    value1:15,
    value2:25
}

const obj1 = Object.create(obj)

obj1.value3 = 3

function searchOwnValue(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key,obj[key])
        }
    }
    
}

searchOwnValue(obj1)