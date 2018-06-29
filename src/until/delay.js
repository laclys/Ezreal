/**
 * delay
 * @param {*} ms 
 */
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))