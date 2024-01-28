class DynamicArray {

  constructor( defaultSize = 4) {
    this.length = 0;
    this.capacity = defaultSize;
    this.data = new Array(this.capacity);
    
  }
  
  
  read(index) {
    return this.data[index]
    
  }

  push(val) {
    if (this.length === this.capacity) this.resize();
    this.data[this.length] = val;
    this.length++
    // console.log(this.data);
    // Your code here 
  }


  pop() {
    if (this.length > 0) {
      let vari = this.data[this.length - 1]
      delete this.data[this.length - 1];

      this.length--
      return vari;
    }
    // Your code here 
  }

  shift() {
    if (this.length > 0) {

      let value = this.data[0]
      for (let i = 0; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
  
      return value;
    }

    // Your code here 
  }

  unshift(val) {
    if (this.length === this.capacity) this.resize();
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.length++;
    this.data[0] = val;
    
  }

  indexOf(val) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === val) return i;
    }
    return -1;
    
  }

  resize() {
    debugger
    let arr =  new Array(this.capacity *= 2)
    
    for (let i = 0; i < this.length; i++) {
      arr[i] = this.data[i];
      
    }
   
    this.data = arr;
    debugger
    return this.data;
  }

}


module.exports = DynamicArray;
