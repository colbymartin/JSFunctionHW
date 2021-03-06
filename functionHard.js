console.log('<---------------HARD_Problem #1: Weave------------------->')

// Inputs: String and a Number
// Output: return string with every xth number replaced with an x. 

// Look at each xth letter, replace that letter with the letter 'x'

function replaceX(string, number) {
    let stringsplit = string.split("");
    for (let count = number - 1; count < stringsplit.length; count = count + number) {
        stringsplit[count] = 'x';
    }
    stringsplit = stringsplit.join("");
    return stringsplit;
}   

console.log(replaceX('hooray for soup', 3));

console.log('<---------------HARD_Problem #2: Bonus------------------->')

function Bonus(meal) {
    let totalWtip = (meal * .20) + meal;
    totalWtip = Math.ceil(totalWtip);
    return totalWtip
}

console.log(Bonus(25.79));

console.log('<---------------HARD_Problem #3: Multiples------------------->')

function Multiples(a, b) {
    let divisibleArray = [];
    for (let d = 1; d < 101; d++) {
        if (d % a === 0 && d % b === 0) {
            divisibleArray.push(d);
        }
    }
    return divisibleArray
}

console.log(Multiples(5, 10));

console.log('<---------------HARD_Problem #4: Blackjack------------------->')

function Blackjack(cards) {
    let total = 0;
    let bust = false;
    for (let nums = 0; nums < cards.length; nums++) {
        if (cards[nums] === 'J' || cards[nums]  === 'K' || cards[nums] === 'Q') {
            cards[nums] = 10;
        }
        if (cards[nums] === 'A') {
            cards[nums] = 11;
        }
        total = total + cards[nums];
        }
    if (total > 21) {
        total = 0
        for (let nums = 0; nums < cards.length; nums++) {
            if (cards[nums] === 11) {
                    cards[nums] = 1;
                }
                total = total + cards[nums];
                }
            }   
        if (total > 21) {
            bust = true;
        } 
        return bust      
    }

console.log(Blackjack([3, 9, 'A', 'K']))



console.log('<---------------HARD_Problem #5: Division------------------->')

function Divisors(num) {
    let DivArray = [];
    for (let e = 1; e < num; e++) {
        if (num % e === 0) {
            DivArray.push(e);   
        }
    }
    return DivArray
}

console.log(Divisors(96));

console.log('<---------------HARD_Problem #6: Hamming------------------->')

function Hamming(string1, string2) {
    let stringnums = 0;
    if (string1.length !== string2.length) {
        stringnums = 0;
    } else {
        for (let f = 0; f < string1.length; f++) {
            if (string1[f] === string2[f]) {
                stringnums = stringnums + 1;
            }
        }
    }
    return stringnums
}

console.log(Hamming('table', 'cable'));

console.log('<---------------HARD_Problem #7: Pokemon------------------->')

function Pokemon(numcaught) {
    let totalcaught = 0;
    let pokeArray = [];
    for (let pokeball = 0; pokeball < numcaught.length; pokeball++) {
        totalcaught = totalcaught + numcaught[pokeball];
        pokeArray.push(totalcaught);
    }
    return pokeArray;
}

console.log(Pokemon([1, 2, 5, 1, 3]));


console.log('<---------------HARD_Problem #8: Find------------------->')

function find(array, index) {
    let found = 0;
    for (let g = 0; g < array.length; g++) {
        if (array[g] === index) {
            found = g;
        }
    }
    return found
}


console.log(find([8, 7, 6, 5, 4, 3, 2, 1], 1));