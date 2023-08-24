
const sum = (a,b)=>{
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar (euro) {
return euro*oneEuroIs.USD
}

function fromDollarToYen (dollar) {
let euro = dollar/oneEuroIs.USD
    return euro*oneEuroIs.JPY
}

function fromYenToPound (yen) {
    let euro = yen/oneEuroIs.JPY
    return euro*oneEuroIs.GBP
}



module.exports = { sum , fromEuroToDollar , fromDollarToYen , fromYenToPound}
