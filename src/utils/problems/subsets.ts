import assert from "assert";
import { Problem } from "../types/problem";

// Function to generate all subsets
function generateSubsets(nums: number[]): number[][] {
	const result: number[][] = [];
	const backtrack = (start: number, path: number[]) => {
		result.push([...path]);
		for (let i = start; i < nums.length; i++) {
			path.push(nums[i]);
			backtrack(i + 1, path);
			path.pop();
		}
	};
	backtrack(0, []);
	return result;
}

export const subsetsHandler = (fn: any) => {
	try {
		const tests = [
			{ input: [1, 2, 3], output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]] },
			{ input: [0], output: [[], [0]] },
			{ input: [1], output: [[], [1]] },
			{ input: [], output: [[]] },
		];

		for (const { input, output } of tests) {
			const result = fn(input);
			assert.deepEqual(result.sort(), output.sort());
		}
		return true;
	} catch (error: any) {
		console.log("Error from subsetsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeSubsetsJS = `
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// Do not edit function name
function generateSubsets(nums) {
  // Write your code here
};`;

export const subsets: Problem = {
	id: "subsets",
	title: "Subsets",
	problemStatement: `<p class='mt-3'>Given an integer array <code>nums</code> of unique elements, return <em>all possible subsets (the power set)</em>.</p>
	<p>The solution set must not contain duplicate subsets. Return the solution in any order.</p>`,
	examples: [
		{
			id: 0,
			inputText: "nums = [1,2,3]",
			outputText: "[[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]",
		},
		{
			id: 1,
			inputText: "nums = [0]",
			outputText: "[[],[0]]",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= nums.length <= 10</code></li>
<li class='mt-2'><code>-10 <= nums[i] <= 10</code></li>
<li class='mt-2'>All the numbers of <code>nums</code> are unique.</li>`,
	starterCode: starterCodeSubsetsJS,
	handlerFunction: subsetsHandler,
	starterFunctionName: "function generateSubsets(",
	order: 10,
};
