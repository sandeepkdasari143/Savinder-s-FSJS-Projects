const list = [29, 15, 89, 100, 12, 7, 8]
function compareFn(a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

const ascendingOrder = list.sort(compareFn);
// console.log(ascendingOrder)
const descendingOrder = list.sort((a, b) => {
    if (a < b) {
        return 1
    } else if (a > b) {
        return -1
    } else {
        return 0
    }
})
// console.log(descendingOrder)

// [100, 89, 29, 15, 12,  8,  7]
// console.log("0".charCodeAt())
// console.log("1".charCodeAt())
// console.log("2".charCodeAt())
// console.log("3".charCodeAt())
// console.log("4".charCodeAt())
// console.log("5".charCodeAt())
// console.log("6".charCodeAt())
// console.log("7".charCodeAt())
// console.log("8".charCodeAt())
// console.log("9".charCodeAt())

const products = [
    {
        name: "laptop",
        price: 80000
    },
    {
        name: "mobile",
        price: 70000
    },
    {
        name: "bike",
        price: 150000
    },
    {
        name: "tv",
        price: 85000
    },
    {
        name: "car",
        price: 1000000
    }
]

function productPriceInAscendingOrder (a,b){
    if(a.price<b.price){
        return -1
    }else if(a.price>b.price){
        return 1
    }else{
        return 0
    }
}
const price = products.sort(productPriceInAscendingOrder)
console.log(price)

const productName = products.sort((a,b)=>{
    if(a.name.length<b.name.length){
        return -1
    }  else if(a.name.length>b.name.length){
        return 1
    }else{
        return 0
    }
})
console.log(productName)

function compareGDP(a,b){
    var countries = ["United States", "China","Japan","	Germany","United Kingdom","India","France","Italy","Canada","South Korea"]
    if(countries.indexOf(a)<countries.indexOf(b)){
        return -1
    }else if(countries.indexOf(a)>countries.indexOf(b)){
        return 1
    }else{
        return 0
    }
}
const countryList = ["India","Canada","United States","South Korea"]
countryList.sort(compareGDP);
console.log(countryList)