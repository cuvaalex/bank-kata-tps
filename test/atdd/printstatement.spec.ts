/**
 * Created by alex on 6/21/17.
 */

import {Console} from "../../src/app/console";
import {TransactionRepository} from "../../src/app/transactionRepository";
import {StatementPrinter} from "../../src/app/statementPrinter";
import {Account} from "../../src/app/account";
import {IClock} from "../../src/app/clock";

describe("should print a full statement", () => {
    it("should use print", () => {
        const MockClock = jest.fn<IClock>(() => ({
            todayToString: jest.fn(() => "10/01/2012")
                .mockImplementationOnce(() => "13/01/2012")
                .mockImplementationOnce(() => "14/01/2012"),
        }));


        const console = new Console();
        const clock = new MockClock();
        const repository = new TransactionRepository(clock);
        const printer = new StatementPrinter(console);
        let account = new Account(repository, printer);

        account.deposit(1000.00);
        account.deposit(2000.00);
        account.withdraw(500.00);

        account.printStatement();

        expect(console.print).toBeCalledWith("date       || credit   || debit    || balance");
        expect(console.print).toBeCalledWith("14/01/2012 ||          || 500.00   || 2500.00");
        expect(console.print).toBeCalledWith("13/01/2012 || 2000.00  ||          || 3000.00");
        expect(console.print).toBeCalledWith("10/01/2012 || 1000.00  ||          || 1000.00");

    });
});
