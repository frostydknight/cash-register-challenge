function checkCashRegister(price, cash, cid) {
  const change = []
  change.push(getCashRem(cash - price))
  change.unshift(getChangeRem(cash - price))
  console.log(change)
  return;
}

function getCashRem(val) {
  const dolRem = val.toString().split('.')[0].split('')
  const retArr = []
  for (let i = 0; i < dolRem.length; i++) {
    if (dolRem.length === 2) {
      if (i === 0) {
        if (dolRem % 2 != 0) {
          retArr.push (
            ["TEN", 10],
            ["TWENTY", (dolRem[0] - 1) * 10],
            ["ONE HUNDRED", 0]
          )
        } else {
            retArr.push(
              ["TEN", 0],
              ["TWENTY", (dolRem[0]* 10)],
              ["ONE HUNDRED", 0]
            )
        }
      } else {
        if (dolRem[1] > 5) {
        retArr.unshift(
          ["ONE", dolRem[0] - 5],
          ["FIVE", 5]
        )
      } else {
        retArr.unshift(
          ["ONE", dolRem[1]],
          ["FIVE", 0]
        )
      }
      }
    } else if (dolRem.length === 1) {
      if (dolRem[0] > 5) {
        retArr.push(
          ["ONE", dolRem[0] - 5],
          ["FIVE", 5],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0]
        )
      } else {
        retArr.push(
          ["ONE", dolRem[0]],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0]
        )
      }
    } else {
      return [
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0]
      ]
    }
  }
  return retArr
}

function getChangeRem(val) {
  const coinRem = val.toString().split('.')[1].split('')
  console.log(coinRem)
  for (let i = 0; i < coinRem.length; i++){
    if (coinRem.length === 2) {
      if (i === 0){
        switch (coinRem[0]) {
          case 1:
            retArr.push(["DIME", .1])
            break
          case 2:
            if (coinRem[1] >= 5) {
              retArr.push(
                ["DIME", 0]
                ["QUARTER", .25]
                )
            } else {

            }
            break
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          default
        }
      } else {
        switch (coinRem[1]) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
          default:
        }
      }
    } else if (coinRem.length === 1) {

    } else {
      retArr.push(
        ["PENNY", 0],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0]
      )
    }
  }
  const retArr = []
}

function compareCidToChange(cid, change) {

}
// function calcChange(rem) {
//   const remBills = rem.toString().split('.')[0]
//   const remCoin = rem.toString().split('.')[1]
//   const changeArr = [
//   ["PENNY", 0],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0]
// ]
//   const retBills = getBills(remBills.split(''))
  
//   console.log(changeArr)
// }
// function getBills(numArr) {
//   if (numArr.length == 2) {
//     if (numArr % 2 != 0) {
//       return [
//         ["TEN", 10],
//         ["TWENTY", (numArr[0] - 1) * 10],
//         ["ONE HUNDRED", 0]
//       ]
//     }
//   } else if (numArr.length == 1 && numArr[0] != 0) {
//     return [
//         ["TEN", 0],
//         ["TWENTY", (numArr[0] - 1) * 10],
//         ["ONE HUNDRED", 0]
//       ]
//   }
// }

checkCashRegister(5.5, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
