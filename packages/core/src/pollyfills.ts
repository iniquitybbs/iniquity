export const setTimeout = function (fn: { (): void; (): void; (): void }, delay: number) {
    // Here you would have to create your own mechanism to
    // delay the execution. This is just a hypothetical example.
    // var start = new Date().getTime();
    // while (new Date().getTime() < start + delay) {
    //     sleep(100)
    // }
    sleep(delay)
    fn()
}

export const setInterval = function (callback: () => void, delay: any) {
    /**
     *
     */
    function loop() {
        callback()
        setTimeout(loop, delay)
    }

    setTimeout(loop, delay)
    // In this polyfill, we're not returning an identifier for the interval.
    // So there's no way to clear this interval once it's set.
}

export const Promise = function (
    this: any,
    executor: {
        (resolve: any, reject: any): void
        (resolve: any, reject: any): void
        (resolve: any, reject: any): void
        (arg0: (value: any) => void, arg1: (reason: any) => void): void
    }
) {
    const _this = this

    this.callbacks = []
    this.state = "pending" // 'pending', 'resolved', 'rejected'
    this.value = null

    /**
     *
     * @param value
     */
    function resolve(value: any) {
        if (_this.state !== "pending") return

        _this.state = "resolved"
        _this.value = value

        for (let i = 0; i < _this.callbacks.length; i++) _this.callbacks[i].resolved(value)
    }

    /**
     *
     * @param reason
     */
    function reject(reason: any) {
        if (_this.state !== "pending") return

        _this.state = "rejected"
        _this.value = reason

        for (let i = 0; i < _this.callbacks.length; i++) _this.callbacks[i].rejected(reason)
    }

    this.then = function (onFulfilled: (arg0: any) => any, onRejected: (arg0: any) => any) {
        // @ts-expect-error
        return new Promise(function (resolve: (arg0: any) => void, reject: (arg0: any) => void) {
            /**
             *
             * @param value
             */
            function handleValue(value: any) {
                const ret = onFulfilled ? onFulfilled(value) : value
                resolve(ret)
            }

            /**
             *
             * @param reason
             */
            function handleReason(reason: any) {
                const ret = onRejected ? onRejected(reason) : reason
                reject(ret)
            }

            if (_this.state === "pending") {
                _this.callbacks.push({
                    resolved: handleValue,
                    rejected: handleReason
                })
            } else if (_this.state === "resolved") {
                handleValue(_this.value)
            } else {
                handleReason(_this.value)
            }
        })
    }

    this.catch = function (onRejected: any) {
        return _this.then(null, onRejected)
    }

    this.finally = function (callback: () => void) {
        return _this.then(
            function (value: any) {
                callback()
                return value
            },
            function (reason: any) {
                callback()
                throw reason
            }
        )
    }

    executor(resolve, reject)
}

Promise.all = function (promises: any[]) {
    // @ts-expect-error
    return new Promise(function (resolve: (arg0: any[]) => void, reject: any) {
        const results: never[] = []
        let remaining = promises.length

        /**
         *
         * @param index
         * @param value
         */
        function processResult(index: number, value: any) {
            // @ts-expect-error
            results[index] = value
            remaining--
            if (remaining === 0) resolve(results)
        }

        for (let i = 0; i < promises.length; i++) {
            ;(function (i) {
                if (promises[i] !== undefined) {
                    promises[i].then(function (value: any) {
                        processResult(i, value)
                    }, reject)
                }
            })(i)
        }
    })
}

Promise.race = function (promises: string | any[]) {
    // @ts-expect-error
    return new Promise(function (resolve: any, reject: any) {
        for (let i = 0; i < promises.length; i++) if (promises[i] !== undefined) promises[i].then(resolve, reject)
    })
}
