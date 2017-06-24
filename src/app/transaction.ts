/**
 * Created by alex on 6/22/17.
 */

export interface ITransaction {
    date: string;
    amount: number;
}

export class  Transaction implements ITransaction {
    date: string;
    amount: number;


    constructor(date: string, amount: number) {
        this.date = date;
        this.amount = amount;
    }
}
