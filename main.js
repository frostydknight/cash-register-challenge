function checkCashRegister(price, cash, cid) {
  let remChange = cash - price;
  const processCID = JSON.parse(JSON.stringify(cid))
  const beginCID = JSON.parse(JSON.stringify(cid))
  let isRunning = true
  let status = "OPEN";
  let change = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  while (isRunning) {
    remChange = remChange.toFixed(2)
    switch (true) {
      case remChange >= 100:
        if(processCID[8][1] >= 100) {
          change[8][1] += 100
          processCID[8][1] -= 100
          remChange -= 100
          break
        }
      case remChange >= 20:
        if(processCID[7][1] >= 20) {
          change[7][1] += 20
          processCID[7][1] -= 20
          remChange -= 20
          break
        }
      case remChange >= 10:
        if(processCID[6][1] >= 10) {
          change[6][1] += 10
          processCID[6][1] -= 10
          remChange -= 10
          break
        }
      case remChange >= 5:
        if(processCID[5][1] >= 5) {
          change[5][1] += 5
          processCID[5][1] -= 5
          remChange -= 5
          break
        }
      case remChange >= 1:
        if(processCID[4][1] >= 1) {
          change[4][1] += 1
          processCID[4][1] -= 1
          remChange -= 1
          break
        }
      case remChange >= .25:
        if(processCID[3][1] >= .25) {
          change[3][1] += .25
          processCID[3][1] -= .25
          remChange -= .25
          break
        }
      case remChange >= .10:
        if(processCID[2][1] >= .10) {
          change[2][1] += .10
          processCID[2][1] -= .10
          remChange -= .10
          break
        }
      case remChange >= .05:
        if(processCID[1][1] >= .05) {
          change[1][1] += .05
          processCID[1][1] -= .05
          remChange -= .05
          break
        }
      case remChange >= .01:
        processCID[0][1] = processCID[0][1].toFixed(2)
        if(processCID[0][1] >= .01) {
          change[0][1] += .01
          processCID[0][1] -= .01 
          remChange -= .01
          break
        } else {
          return {status: "INSUFFICIENT_FUNDS", change: []}
        }
      case remChange == 0:
        if(processCID.filter(currency => currency[1] != 0).length === 0){
          return {"status": "CLOSED", "change": beginCID}
        }
        isRunning = false
        
    }  
  }
  change = change.filter(currency => currency[1] != 0).reverse()
  return {"status": status, "change": change} 
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
