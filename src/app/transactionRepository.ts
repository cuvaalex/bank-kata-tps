import {ITransaction} from "./transaction";
/**
 * Created by alex on 6/22/17.
 */

export interface ITransactionRepository {
    depositTransaction: (amount: number) => void;
    withdrawTransaction: (amount: number) => void;
    allTransactions: () => Array<ITransaction>;
}

