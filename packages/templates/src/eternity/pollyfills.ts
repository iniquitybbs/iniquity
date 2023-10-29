
export const setTimeout = function(fn, delay) {
    // Here you would have to create your own mechanism to 
    // delay the execution. This is just a hypothetical example.
    // var start = new Date().getTime();
    // while (new Date().getTime() < start + delay) {
    //     sleep(100)
    // }
    sleep(delay)
    fn();
}

export const setInterval = function(callback, delay) {
    function loop() {
        callback();
        setTimeout(loop, delay);
    }
    setTimeout(loop, delay);
    // In this polyfill, we're not returning an identifier for the interval.
    // So there's no way to clear this interval once it's set.
}

export const Promise = function(executor) {
    var _this = this;

    this.callbacks = [];
    this.state = 'pending'; // 'pending', 'resolved', 'rejected'
    this.value = null;

    function resolve(value) {
        if (_this.state !== 'pending') return;

        _this.state = 'resolved';
        _this.value = value;

        for (var i = 0; i < _this.callbacks.length; i++) {
            _this.callbacks[i].resolved(value);
        }
    }

    function reject(reason) {
        if (_this.state !== 'pending') return;

        _this.state = 'rejected';
        _this.value = reason;

        for (var i = 0; i < _this.callbacks.length; i++) {
            _this.callbacks[i].rejected(reason);
        }
    }

    this.then = function(onFulfilled, onRejected) {
        return new Promise(function(resolve, reject) {
            function handleValue(value) {
                var ret = onFulfilled ? onFulfilled(value) : value;
                resolve(ret);
            }

            function handleReason(reason) {
                var ret = onRejected ? onRejected(reason) : reason;
                reject(ret);
            }

            if (_this.state === 'pending') {
                _this.callbacks.push({
                    resolved: handleValue,
                    rejected: handleReason
                });
            } else if (_this.state === 'resolved') {
                handleValue(_this.value);
            } else {
                handleReason(_this.value);
            }
        });
    };

    this.catch = function(onRejected) {
        return _this.then(null, onRejected);
    };

    this.finally = function(callback) {
        return _this.then(
            function(value) {
                callback();
                return value;
            },
            function(reason) {
                callback();
                throw reason;
            }
        );
    };

    executor(resolve, reject);
};

Promise.all = function(promises: any[]) {
    return new Promise(function(resolve, reject) {
        var results = [];
        var remaining = promises.length;

        function processResult(index, value) {
            // @ts-expect-error
            results[index] = value;
            remaining--;
            if (remaining === 0) {
                resolve(results);
            }
        }

        for (var i = 0; i < promises.length; i++) {
            (function(i) {

                if (promises[i] !== undefined) {

                    promises[i].then(
                        function(value) {
                            processResult(i, value);
                        },
                        reject
                    )

                }

            })(i)
        }
    });
};

Promise.race = function(promises) {
    return new Promise(function(resolve, reject) {
        for (var i = 0; i < promises.length; i++) {
            if (promises[i] !== undefined) {
                promises[i].then(resolve, reject);
            }
        }
    });
};