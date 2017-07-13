import {ITransaction} from "./transaction";
import {IConsole} from "./console";
/**
 * Created by alex on 6/24/17.
 */

export interface IStatementPrinter {
    print: (transactions: Array<ITransaction>) => void;
}

export class StatementPrinter implements IStatementPrinter {

    protected _console: IConsole;
    private readonly HEADER: string = "date || credit || debit || balance";
    private _totalAmount: number;

    constructor(console: IConsole) {
        this._console = console;
    }

    private createTextLine(transaction: ITransaction): string {
        var lineText = transaction.date + " || ";
        if (transaction.amount < 0) {
            lineText += " || " + (-transaction.amount);
        } else {
            lineText += transaction.amount + " || ";
        }
        this._totalAmount += transaction.amount;
        lineText += " || " + this._totalAmount;
        return lineText;
    }

    public print(transactions: Array<ITransaction>) {
        this._console.print(this.HEADER);

        this._totalAmount = 0;
        transactions.map(
            transaction => this.createTextLine(transaction))
            .reverse()
            .forEach(text => this._console.print(text));
    }
}