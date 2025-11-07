//Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit in the console

let fruits = ["Apple", "Banana", "Cherry"];

document.body.innerHTML = "<h1>Fruits List</h1>";

for (let i = 0; i <fruits.length; i++){
    console.log(fruits[i]);
    document.querySelector("h1").innerHTML += `<p>${fruits[i]}</p>`;

}


//Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to a paragraph with the ID output using document.querySelector.


let colors = ["Red", "Green", "Blue"];
document.body.innerHTML = `<p id="output"></p>`;

for(let i = 0; i< colors.length; i++){
    console.log(colors[i]);
    document.querySelector('#output').innerHTML += `${colors[i]} `;
}


//Use a for loop to print numbers from 1 to 10 in the browser console.

document.body.innerHTML = "<h1 id=output></h1>"

for( let i = 1; i <=10; i++){
    console.log(i);
    document.querySelector('#output').innerHTML +=`${i}`;
}


//Use a while loop to print numbers from 5 to 1 in the console.

let i = 1;

while(i <= 5 ){
    console.log(i);
    document.querySelector('#output').innerHTML += i + "<br>";
     i++ 

}


let output = ["Ali" , 'Sara' , 'Ahmed' ]

for (let i = 0; i<output.length; i++){
    console.log(output[i]);
    document.querySelector('#output').innerHTML += `${output[i ]} , `
}


//Change the text of a paragraph with ID status to "Loading..." using

document.querySelector('#screen').innerHTML = 'Loading...'


//Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in a paragraph with ID sum.

let numbers2 = [5, 10, 15];
let total = 0;
for (let i = 0; i< numbers2.length; i++){
    total += numbers2[i];
    document.querySelector('#sum').innerHTML = `Total: ${total}`;
} 

//8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a single string in a div with ID cities.

let cities = ["Karachi", "Lahore", "Quetta"];
for (let i = 0; i < cities.length; i++){
    document.querySelector('#cities').innerHTML += `${cities[i]}  `;
}

//9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.

for (let i = 1 ; i<=20; i++){
    if(i%2===0){
        console.log(i);
        document.querySelector("#output").innerHTML += i + "<br>"
        
    }
}

//Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
//largest number in a paragraph with ID max.

let numbers1 = [45, 22, 89, 100];
let maxNum1 = numbers1[0];
for (let i = 1; i<numbers1.length;i++){
    if(numbers1[i]>maxNum1){
        maxNum1 = numbers1[i];
        document.querySelector('#max').innerHTML = `Largest number is: ${maxNum1}`;
    }
}


//Use document.querySelector to select a div with ID result and change its text to "Task
//Complete"

document.querySelector("#result").innerHTML = "Task completed";


//12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
//display it inside an element with ID averageTemp.

let temperatures = [30, 35, 32, 40];
let tempSum = 0;

for (let i = 0; i<temperatures.length;i++){
    tempSum += temperatures[i];
    let average = tempSum / temperatures.length;
    document.querySelector('#averagetemp').innerHTML = `Average Temperature is: ${average}`;
}


 //Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
//paragraph with ID totalSum.

let totalSum = 0;
for (let i = 1;i<=100;i++){
    totalSum+=i;
    document.querySelector('#totalsum').innerHTML = `Total Sum is: ${totalSum}`;
}

//Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
//ID animals.

    let animal = ["dog", "cat", "bird"]

    for (let i=0; i<animal.length;i++){
        document.querySelector('#animals').innerHTML += `${animal[i]}  `;   
    
        if(i < animal.length -1){//if it’s not the last animal, add a comma.
            document.querySelector("#animals").innerHTML +=","
        }
    
    
    }

//Use document.querySelector to select a heading with ID title and change its text to
//"Welcome to JavaScript!".

document.querySelector('#title').innerHTML= "Welcome to JavaScript!";

//Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
//them to the console.

for (let i = 1; i<=50;i++){
    if (i%5===0){
        console.log(i);
        document.querySelector('#output').innerHTML += i + "<br>";
    }
}

//Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
//display the count in a div with ID highScores.

let scores = [80, 60, 90, 70];
let countGreaterThan4 = 0;
for (let i = 0;i<scores.length;i++){
    if (scores[i]>75)
        countGreaterThan4++;
    document.querySelector('#highscore').innerHTML = `Number of scores above 75: ${countGreaterThan4}`;
}

//Select an element with ID message and change its text to "Updated successfully" using
//document.querySelector.

document.querySelector("#message").innerHTML = "Updated successfully";

//Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
//them in a paragraph with ID subjectsList.

    let subjectList = ["Math", "Science", "English"];

    for (let i = 0; i<subjectList.length;i++){
        document.querySelector('#sublist').innerHTML += `${subjectList[i]}  `;
        if (i < subjectList.length -1){
        document.querySelector('#sublist').innerHTML += ","
    }
    } 

  //  20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
//an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
//elements.


for (let i = 10; i>=1; i--){
    console.log(i);
    document.querySelector('#output').innerHTML += i + "<br>";
}


let numbers3 = [5, 10, 15, 20];
let sum2 = 0;
for (let i = 0; i<numbers3.length;i++){
    sum2 += numbers3[i];
    document.querySelector('#sum').innerHTML = `Sum of all elements is: ${sum2}`;
}


//Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

let numbers4 = [45, 67, 12, 89, 34];
let max = numbers[0];
for (let i = 1 ; i<numbers4.length; i++ ){
    if (numbers4[i]>max){
        max = numbers4[i];
        console.log("Largest number is: " + max);
        document.querySelector('#max').innerHTML = `Largest number is: ${max}`;
    }
} 


//22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

let numbers = [3, 8, 6, 1, 9, 2];
let evenCount = 0;
for (let i = 0; i<numbers.length;i++){
    if (numbers[i]%2 === 0){
        evenCount++;
        console.log("Count of even numbers is: " + evenCount);
        document.querySelector('#highscore').innerHTML = `Count of even numbers is: ${evenCount}`;
    }
}


//23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

let nums = [20, 30, 40, 50];
let numsSum = 0;
for (let i = 0; i< nums.length;i++){
    numsSum += nums[i];
    let average = numsSum / nums.length;
    console.log("average is " + average );
    document.querySelector('#max').innerHTML= `Average is: ${average}`;
}
//Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
//multiplied by 3.

let numb = [2,4,6,8,10];
let newarr = [];
for (let i = 0; i<numb.length; i++){
    newarr.push(numb[i]*3);
    console.log(newarr);
    document.querySelector('#mult').innerHTML = newarr;
    
}



//25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.

let number5 = [1,3,5,7,9];
let count1 = 0

for (i = 0; i < number5.length; i++){
    if(number5[i] > 4){
        count1++;
    }
}

console.log(count1);
document.querySelector('#greatercount').innerHTML = count1;


//26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.

let num = [10, 15, 20, 25, 30];
let sum1 = 0;
for (i = 0 ; i < num.length; i++){
    if(num[i]%5 === 0){
        sum1+=num[i]
    }
}

console.log(sum1);
document.querySelector('#sum').innerHTML = sum1;

//Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].
let arry1 = [10, 20, 30, 40, 25, 35];
let found = false

for (i = 0; i < arry1.length; i++){
    if(arry1[i] === 25){
        found = true
        break;
    }
}

console.log(found);
document.querySelector('#check').innerHTML = found;


//28. Given two arrays [1, 2, 3] and [4, 5, 6], use a loop to create a third array containing the
//sum of corresponding elements.

let a = [1,2,3];
let b = [4,5,6];
let result1 = []

for (let i = 0; i< a.length; i++){
    result1.push(a[i] + b[i]);
}

console.log(result1);
document.querySelector ('#sum').innerHTML = result1;

//29. Use a loop to find the second-largest number in an array [10, 99, 23, 87, 56].
let arr2 = [10, 99, 23, 87, 56];
let max1 = [0]; // largets
let max2 = [0]; // Second largest

for(let i = 0; i < arr2.length; i ++){
    if(arr2[i] > max1){
        max2 = max1   // old largest becomes second largest
        max1 = arr2[i] // update largest
    } else if (arr2[i] > max2 && arr2[i] !==max1){
        max2= arr2[i];
    }
}

console.log("Second Largest:", max2);
document.querySelector("#check").innerHTML = max2;


//Given an array Given an array [1, 2, 3, 4, 5], reverse the array manually using a loop (don’t use
//.reverse()).

let arry = [1, 2, 3, 4, 5];
let reverse = [];

for(let i = arry.length - 1; i>=0; i--){
    reverse.push(arry[i]);
}


console.log(reverse);
document.querySelector('#sum').innerHTML = reverse

//31. Write a loop that finds and prints all the prime numbers between 1 and 50.

for (let num = 2; num <= 50; num++) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
        document.querySelector("#output").innerHTML += num + "<br>";
    }
}


//32. Create a loop that finds the difference between the largest and smallest numbers in an
//array [11, 4, 99, 2, 47].

let numList = [11, 4, 99, 2, 47];
let maxValue = numList[0];
let minValue = numList[0];

for(let i = 1; i<numList.length; i++){
    if(numList[i] > maxValue){
        maxValue = numList[i];
    } 
    if(numList[i] < minValue){
        minValue = numList[i];
    }
}

let diff = maxValue - minValue;
console.log("Difference is", diff);


//33. Given an array [0, -1, -5, 6, 8, -3], count how many negative numbers are in the array.

let nui = [0, -1, -5, 6, 8, -3];
let count2 = 0;
for(let i  = 0; i < nui.length; i++){
    if(nui[i] < 0){
        count2++;
    }
}

console.log("Negative numbers:", count2);
document.querySelector("#check").innerHTML = count2;


//34. Loop through an array of numbers and create a new array that only contains odd
//numbers.
let oddNumsArray = [1, 2, 3, 4, 5, 6, 7];
let oddnum = [];
for(let i = 0; i<oddNumsArray.length; i++){
    if(oddNumsArray[i]%2 === 0){
        oddnum.push(oddNumsArray[i]);
    }
}

console.log(oddnum);
document.querySelector("#check").innerHTML = oddnum;

//Use a loop to remove all zeroes from an array [0, 1, 0, 3, 0, 5] and store the non-zero
//elements in a new array.

let arr3 = [0, 1, 0, 3, 0, 5];
let result = []

for (let i = 0; i < arr3.length; i++){
    if(arr3[i] !==0){
        result.push(arr3[i]);
    }
}


console.log(result);
document.querySelector("#check").innerHTML = result;

//36. Given an array [1, 2, 3, 4, 5, 6], use a loop to swap the first and last elements.

let arr4 = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr4.length; i++) {
    if (i === 0) {
        let temp = arr4[0];
        arr4[0] = arr4[arr4.length - 1];
        arr4[arr4.length - 1] = temp;
        break; // stop the loop so it doesn't keep swapping back
    }
}

console.log(arr4);
document.querySelector("#check").innerHTML = arr4;

//37. Write a loop that checks whether all numbers in an array [2, 4, 6, 8] are even.

let arr5 = [2, 4, 6, 8];
let allEven = true;

for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] % 2 !== 0) {
        allEven = false;
        break;
    }
}

console.log(allEven);
document.querySelector("#output").innerHTML = allEven;

let aryy5 = [5, 10, 15, 20, 25];
let sum = 0;

// Find sum
for (let i = 0; i < aryy5.length; i++) {
    sum += arr5[i];
}

// Find average
let avg = sum / aryy5.length;

// Count numbers >= average
let aboveAverageCount = 0;
for (let i = 0; i < aryy5.length; i++) {
    if (aryy5[i] >= avg) {
        aboveAverageCount++;
    }
}

console.log("Average:", avg);
console.log("Count:", aboveAverageCount);
document.querySelector("#check").innerHTML = "Average: " + avg + "<br>" + "Count: " + aboveAverageCount;

//Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.

let arr = [2, 2, 2, 2, 2];
let allEqual = true;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
        allEqual = false;
        break;
    }
}

console.log(allEqual);
document.querySelector("#check").innerHTML = allEqual;
