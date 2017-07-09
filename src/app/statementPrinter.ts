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


    constructor(console: IConsole) {
        this._console = console;
    }

    //TODO: find a way to make it work with transactions.map()
    public print(transactions: Array<ITransaction>) {
        this._console.print("date || credit || debit || balance");
        let totalAmount: number = 0;
        let listOfLines = [];
        for (let transaction of transactions){
            let textLine: string = transaction.date + " || ";
            if(transaction.amount < 0) {
                textLine += " || ";
                textLine += -transaction.amount;
            } else {
                textLine += transaction.amount;
                textLine += " || ";
            }
            textLine += " || ";
            totalAmount += transaction.amount;
            textLine += totalAmount;
            listOfLines.push(textLine);
        }

        for (let textLine of listOfLines) {
            this._console.print(textLine);
        }
    }
}