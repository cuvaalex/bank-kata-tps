import {IStatementPrinter, StatementPrinter} from "../src/app/statementPrinter";
import {ITransaction, Transaction} from "../src/app/transaction";
import {IConsole} from "../src/app/console";
/**
 * Created by alex on 6/24/17.
 */

const MockConsole = jest.fn<IConsole>(() => ({
    print: jest.fn(),
}));
let console;

function deposit(date: string, amount: number) {
    return new Transaction(date, amount);
}

function withdraw(date: string, amount: number) {
    return new Transaction(date, -amount);
}

beforeEach(() => {
    console = new MockConsole();
});

describe("print the statement", () => {
    test("should always print the header", () => {
        const transactions = [];
        const printer = new StatementPrinter(console);

        printer.print(transactions)

        expect(console.print).toBeCalledWith("date || credit || debit || balance");

    });

    test("should print all statement in reverse mode", () => {
        let transactions = [deposit("10/01/2012", 1000.00),
                deposit("13/01/2012", 2000.00),
                withdraw("14/01/2012", 500.00)];

        const printer = new StatementPrinter(console);

        printer.print(transactions);

        expect(console.print).toBeCalledWith("date || credit || debit || balance");
        expect(console.print).toBeCalledWith("14/01/2012 ||  || 500 || 2500");
        expect(console.print).toBeCalledWith("13/01/2012 || 2000 ||  || 3000");
        expect(console.print).toBeCalledWith("10/01/2012 || 1000 ||  || 1000");


    });
});