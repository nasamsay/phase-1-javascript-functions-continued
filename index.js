function saturdayFun(arg ='roller-skate'){
    return `This Saturday, I want to ${arg}!` ;
}

console.log(saturdayFun('reading'))

function mondayWork(arg='go to the office'){
    return `This Monday, I will ${arg}.`;
}

mondayWork('code')


function wrapAdjective(visual='*'){
    return function (adj='special'){
        return `You are ${visual}${adj}${visual}!`
    }
}

console.log(wrapAdjective('%')('a dedicated programmer'))