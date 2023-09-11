function changeDateFormat(dateString) {
    const monthMapping = {
        "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06",
        "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12"
    };

    const parts = dateString.split(" ");
    const day = parts[0].slice(0, -2).padStart(2, '0');
    const month = monthMapping[parts[1]];
    const year = parts[2];

    return `${year}-${month}-${day}`;
}


const input1 = "16th Mar 2068";
const input2 = "6th Jun 1933";

const output1 = changeDateFormat(input1);
const output2 = changeDateFormat(input2);

console.log(output1); // Output: "2068-03-16"
console.log(output2); // Output: "1933-06-06"
// Problem Description
// Given a date string in the format Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", ..., "29th", "30th", "31th"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the inclusive range [1900, 9000].

// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.

// For example:

// 1st Mar 1984 → 1984-03-01
// 2nd Feb 2013 → 2013-02-02 4th Apr 1900 → 1900-04-04


// Problem Constraints
// The values of Day, Month, and Year are restricted to the value ranges specified above.
// The given dates are guaranteed to be valid, so no error handling is necessary.


// Input Format
// The only argument given is a String, a date in the above-mentioned format.


// Output Format
// Return a String, i.e date in YYYY-MM-DD format.


// Example Input
// Input 1: A = "16th Mar 2068"

// Input 2: A = "6th Jun 1933"



// Example Output
// Output 1: 2068-03-16

// Output 2: 1933-06-06




// Expected Output
// Provide sample input and click run to see the correct output for the provided input. Use this to improve your problem understanding and test edge cases