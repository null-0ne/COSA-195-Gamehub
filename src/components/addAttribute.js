/**
 * helper method for quickly adding attributes
 * 
 * @param {} elem 
 * @param {*} name 
 * @param {*} val 
 * @returns 
 */
export function addAttribute(elem, name, val) {
    let currentVal = elem.getAttribute(name);
    if (currentVal === null) {
        elem.setAttribute(name, val);
        return;
    }
    elem.setAttribute(name, currentVal + " " + val);
}