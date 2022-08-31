
// single dimenioanl array
class ArrayRegSearch{

    main_array: readonly [];
    mapped_array: String | undefined;
    key: string | undefined;
    count: number | undefined;
    

    constructor(main_array: [], key: string | undefined = undefined){
        // Iniallizing main array 
        this.main_array = main_array; 
        this.key = key;
        this.init();       
    }

    private init(): void{
        if (this.main_array == null || this.main_array.length <= 0) {
            return;
        }

        // map array content into string format
        // e.g. => "{0,<ele-0>}{1,<ele-1>}{2,<ele-2>}{3,<ele-3>}"
        // => { (array index) , (array element, key for search) }

        let _temp_mapped: String = '';
        this.main_array.forEach((value,index) => {
            _temp_mapped = `${_temp_mapped}{${index},${this.key == undefined ? value : value[this.key] }}`
        });
        this.mapped_array = _temp_mapped;
    }

    public findIndex(find: String): number | boolean{

        if (this.mapped_array == undefined) {
            return false;
        }

        const rExp : RegExp = new RegExp(`(?!{)(?:[[0-9]+)(?=,${find}})`);

        let found: RegExpMatchArray | null = this.mapped_array.match(rExp);

        this.count = found == null || found.length <= 0 ? 0 : found.length;

        let index_found: number | boolean = found == null || found.length <= 0 ? false : parseInt(found[0]);

        return index_found;
    }

    public getMappedString(): String | undefined{
        return this.mapped_array;
    }

    public getMatchCount(): number | undefined{
        return this.count;
    }
}
