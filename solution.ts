import{ writeFile } from "fs";
import promptSync from "prompt-sync";
const prompt = promptSync();

interface SolutionVariables {
    input: string,
    output: string,
    executionTime: string
}

export class Solution {

    private solutionVariables: SolutionVariables = {} as SolutionVariables;

    public isAlphanumeric(str: string): boolean {
        return /^[a-z0-9]+$/gi.test(str);
    }

    // Read from console until the input is only alphanumeric
    private readLine(): string {
        let input = prompt("Pass an alphanumeric string to reverse: ");

        while (!this.isAlphanumeric(input)) {
            input = prompt("Pass an alphanumeric string to reverse again: ");
        }

        return input;
    }

    // Changes the case of a single character
    public changeCase(char: string): string {
        // Transforms only alphabetical characters
        if (!(/^[a-z]+$/gi.test(char))) {
            return char;
        }

        let lowerCaseChar: string = char.toLowerCase();
        if (lowerCaseChar === char) {
            return char.toUpperCase();
        }

        return lowerCaseChar;
    }

    // Reverses a string with also changing the cases of characters
    public reverseAndChange(text: string): string {
        let result: string = "";
        if (text == null || text.length == 0) {
            return result;
        }

        for (let i = text.length - 1; i >= 0; i--) {
            let char: string = text.charAt(i);    
            result += this.changeCase(char);    
        }
    
        return result;
    }

    private writeJson(): void {
        writeFile("processed.json", JSON.stringify(this.solutionVariables, null, 2), (err: any) => {
            if (err) {
                console.log("error", err);
            }       
        });
    }

    // Runs the solution
    public run(): void {
        const input = this.readLine();

        // Calculates the execution time of reverseAndChange
        const start = performance.now();
        const output: string = this.reverseAndChange(input);
        const executionTime = (performance.now() - start);

        console.log("Reversed string is: " + output);

        this.solutionVariables.input = input;
        this.solutionVariables.output = output;
        this.solutionVariables.executionTime = executionTime.toFixed(2).toString() + "ms";
        this.writeJson();
    }
}

if (require.main === module) {
    const sol = new Solution();
    sol.run();
}