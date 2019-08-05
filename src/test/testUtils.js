/**
 * @description returns test with a given data-test attribute
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper
 * @param {string} value value of data-test attribute
 * @return {ShallowWrapper}
 */
export const findTestByAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`);
