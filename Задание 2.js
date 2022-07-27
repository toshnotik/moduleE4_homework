function checkAttr(str, obj){
    return obj[str] != undefined
}

const obj = {
    value1: 'alex',
    value2: 8
}
console.log(checkAttr('value1', obj))
console.log(checkAttr('value3', obj))