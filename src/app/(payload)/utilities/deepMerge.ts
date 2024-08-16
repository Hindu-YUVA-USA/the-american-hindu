// @ts-nocheck

/**
 * Simple object check
 * @param item
 * @returns {boolean}
 */

export function isObject(item: unknown):boolean{
    //check to see if item is of the type object and that it is not an array
    return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * Function to take two objects and merge them into one
 * For more details on deepMerge in Typescript, visit https://www.geeksforgeeks.org/how-to-deep-merge-two-objects-in-typescript
 * @param target
 * @param ...sources
 */
export default function deepMerge<T, R>(target: T, source: R): T{
    const output = { ...target } //define output to be same as target
    if(isObject(target) && isObject(source)){ //run only if both target and source are objects
        Object.keys(source).forEach((key)=>{ //iterate over each key in source obj
            if(isObject(source[key])){ //if this value of this key is an object
                if(!(key in target)){ //and if this key is not already present in target
                    Object.assign(output, {[key]: source[key]}) //add this new key value pair to output
                }
                else{ //if key is already present in target,
                    output[key] = deepMerge(target[key], source[key]) //recurse deepMerge on target[key] and source[key]
                }
            }
            else{
                Object.assign(output, {[key]: source[key]}) //if value is not an object simple assign key value pari to output
            }
        })
    }

    return output //return output which is the deepMerged object of target and source.
}