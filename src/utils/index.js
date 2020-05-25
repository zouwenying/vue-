//防抖(短时间内大量触发同一事件，只会执行一次函数)
function debounce(fn, delay, ...arguments) {
    let timer = null
    let args = [...arguments]
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...args)
        }, delay)
    }
}

/*节流（如果短时间内大量触发同一事件，那么在函数执行一次后，
该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效）*/
function throttle(fn, delay, ...arguments) {
    let prev = Date.now()
    let args = [...arguments]
    return function () {
        let cur = Date.now()
        if (cur - prev >= delay) {
            fn.call(this, ...args)
            prev = Date.now();
        }
    }
}