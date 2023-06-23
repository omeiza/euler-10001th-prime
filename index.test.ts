import {describe, expect, test} from "@jest/globals";
import nthPrime from "./index";

describe("nth prime number", () => {
	test("Get the 6th prime number", () => {
		expect(nthPrime(6)).toEqual(13);
	});

	test("Get the 10001th prime number", () => {
		expect(nthPrime(10001)).toEqual(104743);
	});
})