module.exports = function check(str, bracketsConfig) {
    let valueCheck = true
    let arrayStr = str.split('')
    for (j = 0; j < bracketsConfig.length; j++) {
        let itr = 0
        while (itr < arrayStr.length) {
            if (arrayStr[itr] === bracketsConfig[j][0]) {
                if (arrayStr[itr + 1] === bracketsConfig[j][1]) {
                    arrayStr.splice(itr, 2)
                    if (arrayStr.length !== 0) {
                        itr = 0
                        j = 0
                    } else if (itr === arrayStr.length - 1) itr = arrayStr.length + 1
                } else {
                    itr += 1
                }
            } else {
                itr += 1
            }
        }

    }
    if (arrayStr.length !== 0) {
        valueCheck = false
    }
    return valueCheck
}
