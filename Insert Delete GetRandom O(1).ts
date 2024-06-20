/**
 * Implement the RandomizedSet class:
 * 
 * RandomizedSet() Initializes the RandomizedSet object.
 * 
 * bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
 * bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
 * int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
 * Each element must have the same probability of being returned.
 * 
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 */

class RandomizedSet {
    private numMap: Map<number, number>;
    private numArr: number[];

    constructor() {
       this.numMap = new Map();
       this.numArr = [];
    }

    insert(val: number): boolean {
        if(this.numMap.has(val)) {
            return false;
        } else {
            this.numMap.set(val, this.numArr.length);
            this.numArr.push(val)
            return true;
        }

    }

    remove(val: number): boolean {
        if (!this.numMap.has(val)) {
            return false;
        }
        const index = this.numMap.get(val)!;
        const lastElement = this.numArr[this.numArr.length - 1];
        this.numArr[index] = lastElement;
        this.numMap.set(lastElement, index);
        this.numArr.pop();
        this.numMap.delete(val);
        return true;
    }

    getRandom(): number {
        const randomIndex = Math.floor(Math.random() * this.numArr.length);
        return this.numArr[randomIndex];
    }
}
