"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidFields = void 0;
const express_validator_1 = require("express-validator");
const http_status_codes_1 = require("http-status-codes");
const ValidFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json(errors);
    }
    next();
};
exports.ValidFields = ValidFields;
//# sourceMappingURL=valid-fields.middleware.js.map