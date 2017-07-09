/**
 * Created by alex on 7/9/17.
 */
export interface IConsole {
    print: (text: string) => void;
}

export class Console implements IConsole {
    public  print (textLine: string) {
        console.log(textLine);
    }
}