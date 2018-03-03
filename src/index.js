(function (name, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') { // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) { // requirejs - amd canon
        define(factory);
    } else if (window) { // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('arrayRemoveRepeat', function () {
    // 数组去重
    function arrayRemoveRepeat(array) {
        array = Object.prototype.toString.call(array).slice(8, -1).toLowerCase() === 'array' ? array : [];
        const newArray = [];
        array.forEach(function (v) {
            if (newArray.indexOf(v) === -1) {
                newArray.push(v);
            }
        });
        return newArray;
    }

    return arrayRemoveRepeat;
});
