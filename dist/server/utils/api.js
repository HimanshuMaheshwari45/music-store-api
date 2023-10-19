"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = exports.APIResponse = void 0;
class APIResponse {
    constructor(res, data, message, statusCode = 200) {
        this.data = data;
        this.message = message;
        this.res = res;
        this.statusCode = statusCode;
    }
    json() {
        this.res
            .status(this.statusCode)
            .json({ data: this.data, message: this.message });
    }
}
exports.APIResponse = APIResponse;
class APIError {
    constructor(res, data, message, statusCode = 500) {
        this.data = data;
        this.message = message;
        this.res = res;
        this.statusCode = statusCode;
    }
    json() {
        this.res
            .status(this.statusCode)
            .json({ data: this.data, message: this.message });
    }
}
exports.APIError = APIError;
