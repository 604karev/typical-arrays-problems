const getArrayMax = (array) => Math.max(...array);
const getArrayMin = (array) => Math.min(...array);
const getArraySum = (prev, current) => prev + current;

exports.min = min = (array = []) => array.length > 0 ? getArrayMin(array) : 0;
exports.max = max = (array = []) => array.length > 0 ? getArrayMax(array) : 0;
exports.avg = avg = (array = []) => array.length > 0 ? array.reduce(getArraySum) / array.length : 0;
