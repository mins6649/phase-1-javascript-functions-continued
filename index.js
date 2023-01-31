// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}  
saturdayFun();

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(specialKey = '*'){
    return function(characteristic = "special"){
        return `You are ${specialKey}${characteristic}${specialKey}!`

    }
}