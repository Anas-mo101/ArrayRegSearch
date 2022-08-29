"use strict";
// single dimenioanl array
class ArrayRegSearch {
    constructor(main_array, key = undefined) {
        // Iniallizing main array 
        this.main_array = main_array;
        this.key = key;
        this.init();
    }
    init() {
        if (this.main_array == null || this.main_array.length <= 0) {
            return;
        }
        // map array content into string format
        // e.g. => "{0,<ele-0>}{1,<ele-1>}{2,<ele-2>}{3,<ele-3>}"
        // => { (array index) , (array element, key for search) }
        let _temp_mapped = '';
        this.main_array.forEach((value, index) => {
            _temp_mapped = `${_temp_mapped}{${index},${this.key == undefined ? value : value[this.key]}}`;
        });
        this.mapped_array = _temp_mapped;
    }
    search(find) {
        if (this.mapped_array == undefined) {
            return false;
        }
        const rExp = new RegExp(`(?!{)(?:[[0-9]+)(?=,${find}})`);
        let found = this.mapped_array.match(rExp);
        let index_found = found == null || found.length <= 0 ? false : parseInt(found[0]);
        return index_found;
    }
}
