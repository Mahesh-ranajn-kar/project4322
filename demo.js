var data = {
    name: "mahesh",
    age: 23,
    roll: "ui",
    town: 'kdp',
    class: "MCA"
}

var datatable = []

var keys = Object.keys(data)

var useKey = ['name', 'age', 'town']

for(var i=0; i < keys.length; i++){
    if(useKey.indexOf(keys[i]) !== -1)
    datatable.push({parameter: keys[i], value: data[keys[i]]})
}

console.log(datatable)