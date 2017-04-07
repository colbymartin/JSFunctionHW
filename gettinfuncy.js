console.log('<---------------Problem #1: Sum------------------->')

// Inputs: array of numbers
// Output: sum of numbers in the array

function SumOf(numbers) {
    let sum = 0
    for (let count = 0; count < numbers.length; count++) {
        sum = sum + numbers[count];
    }
    return sum
}

let answer1a = SumOf([5, 9]);
let answer1b = SumOf([5, 4]);

console.log(answer1a);
console.log(answer1b);


console.log('<---------------Problem #2: Avg------------------->')

// Inputs: an array of numbers
// Outputs: average of numbers in the array

function AvgOf(nums) {
    let avg = 0
    for (let count2 = 0; count2 < nums.length; count2++) {
        avg = (avg + nums[count2]);
    }
    return avg / nums.length
}

let answer2a = AvgOf([1, 5, 9]);
let answer2b = AvgOf([4, 4, 4]);
let answer2c = AvgOf([10, 4, 1]);

console.log(answer2a);
console.log(answer2b);
console.log(answer2c);


console.log('<---------------Problem #3: GreaterThan------------------->')

// Input: an array of two numbers
// Outputs: - true statement is second number is greater than the first number
//          - false statement if it is not greater than

function GreaterThan(nums3) {
    IsGreaterThan = false
    if (nums3[1] > nums3[0]) {
        IsGreaterThan = true;
    }
    return IsGreaterThan;
}

let answer3a = GreaterThan([5, 6]);
let answer3b = GreaterThan([4, 1]);

console.log(answer3a);
console.log(answer3b);


console.log('<---------------Problem #4: secondLargest------------------->')

function secondLargest(nums4) {
    let biggest = 0;
    for (let count4 = 0; count4 < nums4.length; count4++) {
            if (nums4[count4] > biggest) {
                biggest = count4;
            }    
        }
        nums4.splice(biggest, 1);
    for (let count4 = 0; count4 < nums4.length; count4++) {
            if (nums4[count4] > biggest) {
                biggest = nums4[count4];
            }    
        }
        return biggest
    }

let answer4a = secondLargest([1, 4, 5, 8]);
let answer4b = secondLargest([8, 3, 5, 1, 9, 10]);

console.log(answer4a);
console.log(answer4b);

console.log('<---------------Problem #5: containsVowel------------------->')

function containsVowel(word) {
    let vowelinside = false;
    for (let count5 = 0; count5 < word.length; count5++) {
        if (word[count5] === 'a' || word[count5] === 'e' || word[count5] === 'i' || word[count5] === 'o' || word[count5] === 'u') {
            vowelinside = true;
        }
    }
    return vowelinside;
}

let answer5a = containsVowel('alpha');
let answer5b = containsVowel('hmph');

console.log(answer5a);
console.log(answer5b);

console.log('<---------------Problem #6: PigLatin------------------->')

function PigLatin(oink) {
    let oinkArray = oink.split("");
    let oinkfirst = oinkArray[0];
    oinkArray.push(oinkfirst, "ay");
    oinkArray.splice(0, 1);
    oinkArray = oinkArray.join("");
    
    return oinkArray
}

function PigLatinSentence(sentence) {
    let splitSentence = sentence.split(" ");
    for (let count6 = 0; count6 < splitSentence.length; count6++) {
        splitSentence[count6] = PigLatin(splitSentence[count6]);
    }
    return splitSentence.join(" ");
}

let answer6a = PigLatinSentence('good day');
let answer6b = PigLatinSentence('come now');
console.log(answer6a);
console.log(answer6b);


console.log('<---------------Problem #7: LongestWord------------------->')

function LongestWord(find) {
    let findArray = find.split(" ");
    let wordLength = 0;
    let wordlong = 0;
    for (let count7 = 0; count7 < findArray.length; count7++) {
        if (findArray[count7].length > wordLength) {
            wordLength = findArray[count7].length;
            wordLong = findArray[count7];
        }   
    }
    return wordLong
}


let answer7a = LongestWord('have you ever seen a penguin go to tea?'); 
let answer7b = LongestWord('fool me once, shame on me. fool me twice, shame on heathcliff');

console.log(answer7a);
console.log(answer7b);



