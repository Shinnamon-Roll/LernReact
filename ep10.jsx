// push , pop , shift , unshift

const data = [10, 20, 30]

data.push(200)
data.push(...[1000, 2000, 3000]) 

data.pop()      //remove the last element
data.shift()    //remove the first element

data.unshift(999)    //add element to first element

console.log(data)