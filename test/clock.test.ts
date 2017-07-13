import {Clock} from "../src/app/clock";

/**
 * Created by alex on 7/10/17.
 */

describe('should return TODAY', () => {
    test("always with format dd/MM/yyyy", () => {
        const clock = new Clock();

        clock.today = new Date(2017, 7, 10);

        expect(clock.todayToString()).toBe("10/08/2017");
    });
});