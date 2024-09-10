// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: 

// Output:

// 'TomTimTinTik'

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let number="";
for(num of numbers)
{
    number+=num;
}
console.log(number);