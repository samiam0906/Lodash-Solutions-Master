var _ = {};

/**************************************
 *************** ARRAYS ***************
 **************************************/

 // Returns the first element of an array.
_.first = function(array) {
  return array ? array[0] : [];
};

 // Returns the first n number of elements in an array.
_.take = function(array, n) {
  n = n || 1;

  return array.slice(0, n);
};

// Returns the last element of an array.
_.last = function(array) {  
  return array[array.length - 1];
};

// Returns the last n number of elements in an array.
_.takeRight = function(array, n) {
  var startIndex,
      len = array.length;
  
  n = n || 1;
  
  if ((len - n) < 0) {
    n = 0;
  }

  
  if (array.length - n < 0) {
    startIndex =  0;
  } else {
    startIndex = array.length - n;
  }

  return array.slice(startIndex);
};

// Returns a new array with all falsey values removed. 
// falsy values: false, null, 0, "", undefined, and NaN.
// Example:
// _.compact([0, 1, false, 2, '', 3]);
// → [1, 2, 3]
_.compact = function(array) {
  var result = [];

  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
  }

  return result;
};

// Returns a new array of elements in the first argument, but 
// excludes any element found in the second argument.
// Example:
// _.difference([1, 2, 3], [4, 2]);
// → [1, 3]
_.difference = function(arrayOne, arrayTwo) {
  var obj    = {},
      result = [];
  
  for (var i = 0; i < arrayTwo.length; i++) {
    obj[arrayTwo[i]] = true;
  }
  
  
  for (var j = 0; j < arrayOne.length; j++) {
    if (!obj[arrayOne[j]]) {
      result.push(arrayOne[j]);
    }
  }

  return result;
};

// Returns element with minimum
// value in an array.
_.min = function(array) {
  var currentValue = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < currentValue) {
      currentValue = array[i];  
    }
  }

  return currentValue;
};

// Returns element with maximum
// value in an array.
_.max = function(array) {
  var currentValue = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] > currentValue) {
      currentValue = array[i];  
    }
  }
  
  return currentValue;
};

// Returns either index of matched element or
// -1.
_.indexOf = function(array, el) {
  var index = -1;
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === el) {
      index = i;
    }
  }

  return index;
};

/*************** BONUS ***************/
// Retuns a new array with elements in shuffled order.
_.shuffle = function(array) {
  var shuffledArray = array.slice(),
      len           = shuffledArray.length - 1,
      result        = [],
      randomInt,
      temp;

  while (len > 0) {     
    randomInt = Math.floor(Math.random() * len);

    temp                     = shuffledArray[len];
    shuffledArray[len]       = shuffledArray[randomInt];
    shuffledArray[randomInt] = temp;

    len--;
  }
  
  return shuffledArray;
};

/**************************************
************* COLLECTIONS *************
**************************************/
// Returns the length of a collection.
_.size = function(collection) {
  var size;

  if (collection.constructor === Array) {
    size = collection.length
  } else {
    size = Object.keys(collection).length;
  }

  return size;
};

// Iterates on each element of a collection and 
// then returns the original collection.
_.forEach = function(collection, callback) {

  if (collection.constructor === Array || collection.constructor === String) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      callback(collection[key], key, collection);
    }
  }

  return collection;
};

// Iterates on each element of a collection and 
// then returns a new array.
_.map = function(collection, callback) {
  var newArray = [];

  if (collection.constructor === Array || collection.constructor === String) {
    for (var i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i], i, collection));
    }
  } else {
    for (var key in collection) {
      newArray.push(callback(collection[key], key, collection));
    }
  }

  return newArray;
};

// Returns a new collection with filtered elements.
_.filter = function(collection, callback) {
  var result = [],
      currentValue;
  
  if (collection.constructor == Array || collection.constructor == String) {
    for (var i = 0; i < collection.length; i++) {
      currentValue = callback(collection[i], i, collection);      
      
      if (currentValue) {
        result.push(collection[i]);
      }

    }
  } else {
    for (var key in collection) {
      currentValue = callback(collection[key], key, collection);
      
      if (currentValue) {
        result.push(collection[key]); 
      }

    }
  }

  return result;
};

// Returns a new collection with unfiltered elements.
_.reject = function(collection, callback) {
  var result = [],
      currentValue;
  
  if (collection.constructor == Array || collection.constructor == String) {
    for (var i = 0; i < collection.length; i++) {
      currentValue = callback(collection[i], i, collection);      
      
      if (!currentValue) {
        result.push(collection[i]);
      }

    }
  } else {
    for (var key in collection) {
      currentValue = callback(collection[key], key, collection);
      
      if (!currentValue) {
        result.push(collection[key]); 
      }

    }
  }

  return result;
};

/*************** BONUS ***************/
 // Returns n number of elements in a collection.
_.sample = function(collection, n) {
  var result = [],
      copy   = null,
      num;

  n = n || 1;
  
  if (collection.constructor === Array) {
    copy = collection.slice();
  } else {
    copy = Object.keys(collection);
  }

  for (var i = copy.length, times = i - n; i > times; i--) {
    randomIndex = Math.floor(Math.random() * i);
    result.push(copy[randomIndex]);
  }
  
  return result;
};

module.exports = _;
