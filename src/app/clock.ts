/**
 * Created by alex on 6/24/17.
 */

import * as moment from "../../node_modules/moment"

export interface IClock {
    todayToString(): string
}

export class Clock implements IClock {
    _today = moment();

    set today(date: Date){
        this._today = moment(date);
    }

    public todayToString(): string {
        return this._today.format("DD/MM/YYYY");
    }
}