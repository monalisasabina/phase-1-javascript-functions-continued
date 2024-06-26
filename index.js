//defines saturdayFun function declaration as specified
function saturdayFun(defaultActivity='roller-skate'){
    return `This Saturday, I want to ${defaultActivity}!`;
};
console.log(saturdayFun());


//defines mondayWork function expression as specified
function mondayWork(defaultActivity1='go to the office'){
    return `This Monday, I will ${defaultActivity1}.`;
};
console.log(mondayWork());


function wrapAdjective( wraps='*'){
    return function (emphatic='a hard worker'){ 
        return `You are ${wraps}${emphatic}${wraps}!`
    }
}







