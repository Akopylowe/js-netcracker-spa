const utilfw = {
    delay(ms = 9000){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
                }, ms)
        })
    },

    isUndefined(d) {
        return typeof d === 'undefined'
    }
}

export {utilfw}