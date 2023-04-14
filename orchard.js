///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0 // The total number of acres than was harvested in the week

for (i = 0; i < 7; i++){ // This for loop iterates through each day of the week, that is why the conditional is set to i < 7, since there are 7 days in a week
    totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i] // Add the acres from each orchard that were harvested on day i to the total acres
}

console.log(totalAcres)


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 7 // The average daily acers will be 1/7 of the total acres because there are 7 days in a week

console.log(averageDailyAcres)

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while(acresLeft > 0){ // Loop until there are no acres left
    acresLeft -= averageDailyAcres // Subtract the average daily acres from the acres left
    days ++ // Add one day
}

console.log(days)

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// Create empty arrays to be populated
let fujiTons = []
let galaTons = []
let pinkTons = []

for (i = 0; i < 7; i++){ // Loop through each day of the week
    fujiTons[i] = fujiAcres[i] * 6.5 // populate the indexes in fujiTons with the values from fujiAcres multiplied by 6.5
    galaTons[i] = galaAcres[i] * 6.5 // populate the indexes in galaTons with the values from galaAcres multiplied by 6.5
    pinkTons[i] = pinkAcres[i] * 6.5 // populate the indexes in pinkTons with the values from pinkAcres multiplied by 6.5
}

console.log(fujiTons)
console.log(galaTons)
console.log(pinkTons)

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

// Create empty arrays to be populated
let fujiPounds = []
let galaPounds = []
let pinkPounds = []

for (i = 0; i < 7; i++){ // Loop through each day of the week
    fujiPounds[i] = fujiTons[i] * 2000 // populate the indexes in fujiPounds with the values from fujiTons multiplied by 2000
    galaPounds[i] = galaTons[i] * 2000 // populate the indexes in galaPounds with the values from galaTons multiplied by 2000
    pinkPounds[i] = pinkTons[i] * 2000 // populate the indexes in pinkPounds with the values from pinkTons multiplied by 2000
}

console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)




// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = 0
let galaProfit = 0
let pinkProfit = 0

for (i = 0; i < 7; i++){ // Loop through each day of the week. Find the the profit for each day's harvest of each apple type, and add it to the respective profit variable
    fujiProfit += fujiPounds[i] * fujiPrice 
    galaProfit += galaPounds[i] * galaPrice
    pinkProfit += pinkPounds[i] * pinkPrice
}

console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit // Add all the profits into totalProfit

console.log(totalProfit)