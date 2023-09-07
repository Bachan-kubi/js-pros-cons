let range = {
    f:1,
    t:10
}
// [Symbol.iterator]
range[Symbol.iterator] = function(){
    // 1. it returns the iterator objects
    // 2. Onward... for...of will works only with the iterator object below, asking it for next values.
    // 3. next() is called by each iteration by for of loop
    // 4. it should return the value of an object {done: ..., value:...}
    return{
        current: this.f,
        last: this.t,
        next(){
            if(this.current<=this.last){
                return {
                    done: false, 
                    value:this.current++,
                }
            }else{
                return {done: true};
            }
        }
    }
}
for(let nums of range){
    console.log(nums);
}
