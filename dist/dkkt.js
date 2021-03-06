"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const methods_1 = require("./methods");
class DKKTClient extends client_1.default {
    constructor(user, pass, ip, port = 28880) {
        super(user, pass, ip, port);
    }
    getInfo() {
        return this.RpcCall(methods_1.BtcMtd.getInfo);
    }
    getBlockCount() {
        return this.RpcCall(methods_1.BtcMtd.getBlockCount);
    }
    getBlockHash(height) {
        return this.RpcCall(methods_1.BtcMtd.getBlockHash, [height]);
    }
    getBlockInfo(id) {
        return this.RpcCall(methods_1.BtcMtd.getBlock, [id]);
    }
    getTxInfo(id) {
        const param = [id, 1];
        const method = methods_1.BtcMtd.getTransaction;
        return this.RpcCall(method, param);
    }
    sendRawTx(raw) {
        return this.RpcCall(methods_1.BtcMtd.sendRawTransaction, [raw]);
    }
    getRawMemPool(verbose = false) {
        const method = methods_1.BtcMtd.getRawMemPool;
        const params = [verbose];
        return this.RpcCall(method, params);
    }
}
exports.default = DKKTClient;
