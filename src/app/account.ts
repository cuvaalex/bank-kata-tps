import {ITransactionRepository} from "./transactionRepository";
import {IStatementPrinter} from "./statementPrinter";
/**
 * Created by alex on 6/21/17.
 */

export interface IConsole {
    print: (text: string) => void;
}

export class Account {
    private transactionsRepository: ITransactionRepository;
    private statementPrinter: IStatementPrinter;


    public constructor(transactions: ITransactionRepository, statement: IStatementPrinter) {
        this.transactionsRepository = transactions;
        this.statementPrinter = statement;
    }

    public printStatement() {
        const transactions = this.transactionsRepository.allTransactions();
        this.statementPrinter.print(transactions);
    }

    public deposit(amount: number) {
        this.transactionsRepository.depositTransaction(amount);
    }

    public withdraw(amount: number) {
        this.transactionsRepository.withdrawTransaction(amount);
    }
}
