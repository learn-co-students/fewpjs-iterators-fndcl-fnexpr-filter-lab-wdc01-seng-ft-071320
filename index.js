// Code your solution here

function findMatching(drivers, name1){
    let capName = name1.charAt(0).toUpperCase() + name1.slice(1)
    let lowerName = name1.charAt(0).toLowerCase() + name1.slice(1)
    let matches = drivers.filter(name => {
        return name === capName || name === lowerName
    })
    return matches
}

function fuzzyMatch(drivers, string){
    let l = string.length 
    let filteredDrivers = drivers.filter(driver => {
        return driver.slice(0, l) === string 
    })

    return filteredDrivers
}

function matchName(drivers, string){
    let matches = drivers.filter(driver => {
        return driver.name === string
    })
    return matches
}