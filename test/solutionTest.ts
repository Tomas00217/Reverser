import { Solution } from "../solution";
import { assert } from "chai";

const sol = new Solution()

describe("Solution", () => {
    describe("isAlphanumeric", () => {
        it("testing alpha char, isAlphanumeric should return True", () => {
            const result = sol.isAlphanumeric("a");
            assert.equal(result, true);
        });
        it("testing number, isAlphanumeric should return True", () => {
            const result = sol.isAlphanumeric("0");
            assert.equal(result, true);
        });
        it("testing combination of alpha chars and numbers, isAlphanumeric should return True", () => {
            const result = sol.isAlphanumeric("1Egach3448p");
            assert.equal(result, true);
        });
        it("testing symbol, isAlphanumeric should return False", () => {
            const result = sol.isAlphanumeric("*");
            assert.equal(result, false);
        });
        it("testing combination of chars with symbols, isAlphanumeric should return False", () => {
            const result = sol.isAlphanumeric(".awegj5987$");
            assert.equal(result, false);
        });
    });

    describe("changeCase", () => {
        it("testing empty string, changeCase should return empty string", () => {
            const result = sol.changeCase("");
            assert.equal(result, "");
        });
        it("testing lowerCase char, changeCase should return upperCase char", () => {
            const result = sol.changeCase("a");
            assert.equal(result, "A");
        });
        it("testing upperCase char, changeCase should return lowerCase", () => {
            const result = sol.changeCase("A");
            assert.equal(result, "a");
        });
        it("testing number, changeCase should return the same character", () => {
            const result = sol.changeCase("9");
            assert.equal(result, "9");
        });
        it("testing symbol, changeCase should return the same character", () => {
            const result = sol.changeCase("$");
            assert.equal(result, "$");
        });
    });

    describe("reverseAndChange", () => {
        it("testing empty string, reverseAndChange should return empty string", () => {
            const result = sol.reverseAndChange("");
            assert.equal(result, "");
        });
        it("testing all lowerCase, reverseAndChange should return reversed all upperCase", () => {
            const result = sol.reverseAndChange("abcdefghijklmnopqrst");
            assert.equal(result, "TSRQPONMLKJIHGFEDCBA");
        });
        it("testing all upperCase, reverseAndChange should return reversed all lowerCase", () => {
            const result = sol.reverseAndChange("TSRQPONMLKJIHGFEDCBA");
            assert.equal(result, "abcdefghijklmnopqrst");
        });
        it("testing all numbers, changeCase should return reversed numbers", () => {
            const result = sol.reverseAndChange("9876543210");     
            assert.equal(result, "0123456789");
        });
        it("testing all symbol, changeCase should return reversed symbols", () => {
            const result = sol.reverseAndChange("$./*");
            assert.equal(result, "*/.$");
        });
        it("testing combination, changeCase should return reversed combination with changed case", () => {
            const result = sol.reverseAndChange("a1B2.C3$d4");
            assert.equal(result, "4D$3c.2b1A");
        });
    });
})
