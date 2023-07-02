function sum(a:number,b:number):number {
    return a+b
}



function calcultePrice(unitPrice:number,year?:number){
    if(year==23)
    return unitPrice*.23
    else return unitPrice
}



console.log(calcultePrice(34,23));
console.log(calcultePrice(34,22));
