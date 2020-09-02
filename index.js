// Code your solution here
function findMatching(drivers, string){
   return drivers.filter(driver => driver.toLowerCase()===string.toLowerCase())
}

function fuzzyMatch(drivers, string){
    let length = string.length
    return drivers.filter(driver => driver.slice(0,length) === string)
}

function matchName(drivers, string){
   return drivers.filter(driverObj => driverObj.name === string)
}