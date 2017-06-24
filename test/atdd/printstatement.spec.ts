/**
 * Created by alex on 6/21/17.
 */

import {Account, IConsole} from "./account";
import {ITransactionRepository} from "./transactionRepository";
import {IStatementPrinter} from "./statementPrinter";

describe("should print a full statement", () => {
    it("should use print", () => {
        const MockConsole = jest.fn<IConsole>(() => ({
            print: jest.fn(),
        }));
        const MockTransaction = jest.fn<ITransactionRepository>(() => ({
            depositTransaction: jest.fn(),
        }));
        const MockStatement = jest.fn<IStatementPrinter>(() => ({
            print: jest.fn(),
        }));


        const mockConsole = new MockConsole();
        const mockTransaction = new MockTransaction();
        const mockStatement = new MockStatement();
        let account = new Account(mockTransaction, mockStatement);

        account.printStatement();

        expect(mockConsole.print).toBeCalledWith("date       || credit   || debit    || balance");
        expect(mockConsole.print).toBeCalledWith("14/01/2012 ||          || 500.00   || 2500.00");
        expect(mockConsole.print).toBeCalledWith("13/01/2012 || 2000.00  ||          || 3000.00");
        expect(mockConsole.print).toBeCalledWith("10/01/2012 || 1000.00  ||          || 1000.00");

    });
});
