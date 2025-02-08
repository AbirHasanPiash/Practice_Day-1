function monthlySavings(earnings, livingCost){
    if (typeof(earnings) != "object" || typeof(livingCost) != "number"){
        return "invalid input"
    }

    let len = earnings.length;
    let savings = 0;
    for (let i = 0; i < len; i++){
        if (earnings[i] >= 3000){
            let savingsAfterTax = earnings[i] * 0.8;
            savings += savingsAfterTax;
        } else {
            savings += earnings[i];
        }
    }

    savings -= livingCost;
    if (savings < 0){
        return "earn more";
    }
    return savings;
}

console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(1000, [900, 2700, 3400]));