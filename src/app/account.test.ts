import {Account, IConsole} from "./account";
import {ITransactionRepository} from "./transactionRepository";
import {ITransaction} from "./transaction";
import {IStatementPrinter} from "./statementPrinter";

/**
 * Created by alex on 6/21/17.
 */



describe("Should call", () => {
   it("a despositTransaction", () => {
       const MockRepository = jest.fn<ITransactionRepository>(() => ({
           depositTransaction: jest.fn(),
       }));
       const MockStatement = jest.fn<IStatementPrinter>(() => ({
           print: jest.fn(),
       }));

       const repository = new MockRepository();
       const statement = new MockStatement();
       const account = new Account(repository, statement);

       account.deposit(100);

       expect(repository.depositTransaction).toBeCalledWith(100);
   });

    it("a withdrawTransaction", () => {
        const MockRepository = jest.fn<ITransactionRepository>(() => ({
            withdrawTransaction: jest.fn(),
        }));
        const MockStatement = jest.fn<IStatementPrinter>(() => ({
            print: jest.fn(),
        }));

        const repository = new MockRepository();
        const statement = new MockStatement();
        const account = new Account(repository, statement);

        account.withdraw(100);

        expect(repository.withdrawTransaction).toBeCalledWith(100);
    });
});

describe("when a  print statement is call", () => {
    it("I expect statementPrinter.print to be call", () => {
        const transactions: ITransaction[] = new Array({date: "25/02/2017", amount: 100});
        const MockRepository = jest.fn<ITransactionRepository>(() => ({
            allTransactions: jest.fn(() => transactions),
        }));
        const MockStatement = jest.fn<IStatementPrinter>(() => ({
            print: jest.fn(),
        }));

        const repository = new MockRepository();
        const statement = new MockStatement();
        const account = new Account(repository, statement);

        account.printStatement();

        expect(statement.print).toBeCalledWith(transactions);
    });
});