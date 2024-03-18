class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.table = {}
  }
  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) ;
    }

    return hashCode % 37;
  }

  set(key, value) {
    if(key !== null && value !== null){
      const position =   this.hash(key);
      //linear probing
      if(this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hash(key)];
    const position = this.hashCode(key);

    if(this.table[position] != null) {
      if(this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined; 
  }

  has(key) {
    const valuePair = this.table[this.hash(key)];
    
    for(let index in this.table) {
      if(this.table[index].key == key) {
        return true;
      }
    }
    return false;
  }

  remove(key) { 
    const position = this.hash(key);

    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        delete this.table[position]
        //helper function
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        //helper function
        return true;
      }
    }
    return false;
  }

  length() {
    let count = 0
    for(let key in this.table) {
      count++
    }

    return count
  }

  clear() {
    for(let key in this.table) {
      delete this.table[key]
    }
  }

  keys() {
    let arr = [];
    for(let key in this.table){
      arr.push(this.table[key].key)
    }
    return arr;
  }

  values() {
    const arr = [];
    for(let key in this.table){
      arr.push(this.table[key].value)
    }
    return arr;
  }

  entries() {
    const arr = [];
    
    for(let key in this.table){
      const innerArr = [];
      
      for(let value of Object.values(this.table[key])) {
        innerArr.push(value)
      }

      arr.push(innerArr)
    }

    return arr
  }

}

let hashWork = new HashTable;
hashWork.set('pogba', 'CM');
hashWork.set('hojlund', 'ST');
hashWork.set('scott', "DM");
hashWork.set('onana', "GK");

// hashWork.remove('pogba')
console.log(hashWork)
// console.log(hashWork.get('pogba'))

console.log(hashWork.length())
console.log(hashWork.entries())