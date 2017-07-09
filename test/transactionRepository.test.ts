import {transform} from "babel-core";
//noinspection ES6UnusedImports
import {ITransactionRepository, TransactionRepository} from "../src/app/transactionRepository";
import {IClock} from "../src/app/clock";
/**
 * Created by alex on 6/24/17.
 */

describe("Should stock", () => {
   test("a deposit transaction", () => {
      const MockClock = jest.fn<IClock>(() => ({
         TODAY: "25/12/2017"
      }));
      const mockClock = new MockClock();
      const transactionRepository = new TransactionRepository(mockClock);
      transactionRepository.depositTransaction(100);

      const transactions = transactionRepository.allTransactions();
      expect(transactions).not.toBeNull()
      expect(transactions.length).toEqual(1)
      expect(transactions[0].amount).toEqual(100)
   });

   test("a withdraw transaction", () => {
      const MockClock = jest.fn<IClock>(() => ({
         TODAY: "25/12/2017"
      }));
      const mockClock = new MockClock();
      const transactionRepository = new TransactionRepository(mockClock);
      transactionRepository.withdrawTransaction(100);

      const transactions = transactionRepository.allTransactions();
      expect(transactions).not.toBeNull()
      expect(transactions.length).toEqual(1)
      expect(transactions[0].amount).toEqual(-100)
   });

});