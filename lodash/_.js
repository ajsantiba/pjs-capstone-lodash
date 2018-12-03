const _ = {
  clamp : function(number,lower,upper){
    let lowerClampedValue = Math.max(number, lower);
    let ClampedValue = Math.min(lowerClampedValue,upper);
    return ClampedValue;
  } ,
  inRange : function(num, startv, endv){
    if ( ! endv ) {
      endv=startv;
      startv=0;
    };
    if (endv<startv) {
      let temp = startv;
      startv=endv;
      endv=temp;
    };
    if (num>=startv && num<endv) {
      return true;
    } else {return false}
  } ,
  words : function(string){
    let word = string.split(' ');
    return word;
  } ,
  pad : function(str, len){
    if (len <= str.length ){
      return str
    } else {
      let padding = Math.floor((len - str.length)/2);
      let padding2 = len - str.length - padding*2;
      let left = ' '.repeat(padding);
      let right = ' '.repeat(padding + padding2);
      return left.concat(str,right);
    }
  } ,
  has : function(object, key){
    let Keys = Object.keys(object);
    let hasKey = Keys.includes(key);
    if (hasKey && object.key){
      return true
    } else { return false};
  } ,
  invert : function(object){
    let invertedObject={};
    for (var key in object){
      let originalValue = object.key;
      invertedObject.originalValue = key;
    };
    return invertedObject;
  } ,
  findKey : function(object, predicate){
    for (var key in object){
      value = object.key;
      predicateReturnValue = predicate(value)
      if (predicateReturnValue){
        return key;
        break;
      }
    }
		return undefined;
  } ,
  drop : function(array, n){
    if (!n) {
      n=1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  } ,
  dropWhile : function(array, predicate){
    let dropNumber = array.findIndex((element, index) => !predicate(element, index, array));
    droppedArray = this.drop(array, dropNumber);
    return droppedArray;
    } ,
  chunk : function(array, size){
     if (!size) {
      size=1;
    }
    let part = Math.floor(array.length/size);
    let remain = array.length - part*size;
    let output = [];
    for (i=0;i<part;i++){
      output[i]=array.slice(i*size,(i+1)*size);
    }
    if (remain>0) {
      output[part]=array.slice(part*size);
    }
    return output;
}
};





// Do not write or modify code below this line.
module.exports = _;
