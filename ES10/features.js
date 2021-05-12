// features of ES10
// Array.prototype.flat()
// Array.prototype.flatMap()

const arr = [
    ['zone_1','zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6'],
    ['zone_7','zone_8'],
    ['zone_9','zone_10'],
    ['zone_11',['zone_11','zone-12']]
];
//console.log(arr.flat());
//console.log(arr.flat(1));
console.log(arr.flat(Infinity));