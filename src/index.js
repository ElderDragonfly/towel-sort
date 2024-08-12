'use strickt';
/*jshint esversion: 9 */

module.exports = function towelSort (matrix) {
  const result = [];
  if(!matrix) return [];
  matrix.forEach((element, index) => {
    if(index % 2 === 0) {
      result.push(...element);
    } else result.push(...element.reverse());
  });
  return result;
};