import {ITransaction} from "./transaction";
/**
 * Created by alex on 6/24/17.
 */

export interface IStatementPrinter {
    print: (transactions: Array<ITransaction>) => void;
}