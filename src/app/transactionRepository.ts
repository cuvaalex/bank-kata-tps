import {ITransaction, Transaction} from "./transaction";
import {IClock} from "./clock";
/**
 * Created by alex on 6/22/17.
 */

export interface ITransactionRepository {
    depositTransaction: (amount: number) => void;
    withdrawTransaction: (amount: number) => void;
    allTransactions: () => Array<ITransaction>;
}

export class TransactionRepository implements ITransactionRepository {
    private transactions = new Array<ITransaction>();
    private clock: IClock;

    constructor(clock: IClock) {
        this.clock = clock;
    }

    public depositTransaction(amount: number) {
        this.transactions.push(new Transaction(this.clock.TODAY, amount));
    };
    public withdrawTransaction(amount: number) {
        this.transactions.push(new Transaction(this.clock.TODAY, -amount));
    };
    public allTransactions(): ITransaction[] {
        return this.transactions;
    };

}