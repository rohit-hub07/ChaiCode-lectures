<<<<<<< HEAD
if(!Array.prototype.customShift){
  Array.prototype.customShift = function(){
    if(this.length == 0) return undefined;
    let firstElement = this[0];
    for(let i = 0; i< this.length; i++){
      this[i] = this[i+1];
    }
    this.length = this.length-1;
    return firstElement;
  }
}


const arr = ["batman", "spiderman", "superman", "ironman", "winter soldier"];
arr.customShift()
console.log(arr)
=======
if(!Array.prototype.customShift){
  Array.prototype.customShift = function(){
    if(this.length == 0) return undefined;
    let firstElement = this[0];
    for(let i = 0; i< this.length; i++){
      this[i] = this[i+1];
    }
    this.length = this.length-1;
    return firstElement;
  }
}


const arr = ["batman", "spiderman", "superman", "ironman", "winter soldier"];
arr.customShift()
console.log(arr)
>>>>>>> 9a8ac6c63169312b05665484361caa5884eb5bc7
