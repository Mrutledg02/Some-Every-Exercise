/*Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.
Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false*/

function hasOddNumber(arr) {
    //Use the some method to check if at least one element is an off number
    return arr.some(function(val) {
        return val % 2 !== 0;
    });
}

/*Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false
Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false*/

function hasAZero(num) {
    //Convert the number to a string to make it easier to check for zeros
    const numAsString = num.toString();
    //Use the includes method to check if the string contains '0'
    return numAsString.includes('0');
}

/*Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 
Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false*/

function hasOnlyOddNumbers(arr) {
    //Use the every method to check if every element is an odd number
    return arr.every(function(val){
        return val % 2 !== 0;
    })
}

/*Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.
Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true*/

function hasNoDuplicates(arr) {
    //Use the some method to check if any element has duplicates
    return !arr.some(function(val, i) {  //Execute the arr.some() method to check if there's at least one element in the array that satisfied the condition in the provided function.  If it returns true, then the condition is met for at least one element indicating there are duplicates in the array.  But, we make it false to indicate there are duplicates.
        return arr.indexOf(val) !== i; //This method of the array finds the index of the first occurrence of the element val in the array.  Then it checks it he value on the left side is not equal to the value on the right side.  It returns true if the values are diffferent and false if they are the same.  If the current element val is not in its first occurrence in the array. In other words, it's a duplicate element because it has been found at a different position in the array than in the first occurence.
    })
}

/*Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false*/

function hasCertainKey(arr, key) {
    //Use the every method to check if every object in the array has the specified key.
    return arr.every(function(obj){
        return obj.hasOwnProperty(key);  //Checks whether the object has a property with the name specified in the variable key.  This is a built-in method in Javascript that can be called on objects.  
    });
}

/*Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.
Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false*/

function hasCertainValue(arr, key, searchValue) {
    //Use the every method to check if every object in the array has the specified value for the specified key
    return arr.every(function(obj){
        return obj[key] === searchValue;
    });
}
