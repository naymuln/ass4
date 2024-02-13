function calculateMoney(ticketSale) {
    const totalSale = 120 * ticketSale;
    const expense = 500 + (50 * 8);
    const remainingMoney = totalSale - expense;
    return remainingMoney;
}

function checkName(name) {
    const dumbJS = name.toLowerCase();
    if (dumbJS.includes('a') || 
        dumbJS.includes('y') || 
        dumbJS.includes('i') || 
        dumbJS.includes('e') || 
        dumbJS.includes('o') || 
        dumbJS.includes('u') || 
        dumbJS.includes('w')) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

function deleteInvalids(array) {
    return array.filter(input => !isNaN(input));
}

function password(){
////////////partesina///////////////
}

function monthlySavings(payments, livingCost) {
    let totalIncome = 0;
    for (let payment of payments) {
        if (payment >= 3000) {
            totalIncome += payment - (payment * 0.20);
        } else {
            totalIncome += payment;
        }
    }
    let savings = totalIncome - livingCost;
    if (savings <= 0) {
        return "earn more";
    } else {
        return savings;
    }
}