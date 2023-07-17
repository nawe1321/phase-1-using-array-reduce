const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
// function totalBatteries(batteryBatches) {
//     let batteryCount = 0;
//     for (const batteryBatch of batteryBatches) {
//         batteryCount += batteryBatch;
//     }
//     return batteryCount;
// }

function totalBatteries(batteryBatches) {
    return batteryBatches.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    }, 0);
  }
  
console.log(totalBatteries(batteryBatches));