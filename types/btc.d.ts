import { Bitcoin } from "../defined/btc";
import { RPCResponse } from "../defined/rpc";
import Client from "./client";
export default class BitcoinClient extends Client {
    constructor(user: string, pass: string, ip: string, port?: number);
    getInfo(): Promise<RPCResponse<Bitcoin.WalletInfo>>;
    getBlockCount(): Promise<RPCResponse<number>>;
    getBlockHash(height: number): Promise<RPCResponse<string>>;
    getBlockInfo(id: string): Promise<RPCResponse<Bitcoin.BlockInfo>>;
    getTxInfo(id: string, decode?: boolean): Promise<RPCResponse<Bitcoin.TxInfo>>;
    sendRawTx(raw: string, highFee?: boolean): Promise<RPCResponse<string>>;
    getBlockchainInfo(): Promise<RPCResponse<Bitcoin.BlockchainInfo>>;
    getRawMemPool(verbose?: boolean): Promise<RPCResponse<string[] | Bitcoin.verboseMemPool>>;
    getEstimateFee(target?: number, mode?: "ECONOMICAL" | "CONSERVATIVE"): Promise<RPCResponse<Bitcoin.fee>>;
    decodeRawTx(tx: string, isWitness?: boolean): Promise<RPCResponse<Bitcoin.TxInfo>>;
    getMemoryInfo(): Promise<RPCResponse<Bitcoin.memoryInfo>>;
}
