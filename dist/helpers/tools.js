"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resStatus = exports.getRandomElement = exports.randomFloatUpTo = exports.randomIntUpTo = void 0;
const randomIntUpTo = (nMax) => {
    return Math.floor(Math.random() * nMax);
};
exports.randomIntUpTo = randomIntUpTo;
const randomFloatUpTo = (nMax) => {
    return Math.round((Math.random() * nMax) * 100) / 100;
};
exports.randomFloatUpTo = randomFloatUpTo;
const getRandomElement = (array) => {
    return array[(0, exports.randomIntUpTo)(array.length)];
};
exports.getRandomElement = getRandomElement;
const resStatus = (status, response) => {
    let msg;
    if (status === 200) {
        msg = { response };
    }
    else {
        msg = { statuscode: status, response };
    }
    return msg;
};
exports.resStatus = resStatus;
//# sourceMappingURL=tools.js.map