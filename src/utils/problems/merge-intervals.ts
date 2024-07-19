import assert from "assert";
import { Problem } from "../types/problem";


// Function to merge intervals
function merge(intervals: number[][]): number[][] {
	if (intervals.length <= 1) return intervals;

	intervals.sort((a, b) => a[0] - b[0]);

	const merged = [];
	let currentInterval = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		if (intervals[i][0] <= currentInterval[1]) {
			currentInterval[1] = Math.max(currentInterval[1], intervals[i][1]);
		} else {
			merged.push(currentInterval);
			currentInterval = intervals[i];
		}
	}

	merged.push(currentInterval);
	return merged;
}

export const mergeIntervalsHandler = (fn: any) => {
	try {
		const tests = [
			[[[1, 3], [2, 6], [8, 10], [15, 18]], [[1, 6], [8, 10], [15, 18]]],
			[[[1, 4], [4, 5]], [[1, 5]]],
			[[[1, 4], [2, 3]], [[1, 4]]],
			[[[1, 4], [5, 6]], [[1, 4], [5, 6]]],
		];
		for (const [intervals, expected] of tests) {
			const result = fn(intervals);
			assert.deepEqual(result, expected);
		}
		return true;
	} catch (error: any) {
		console.log("Error from mergeIntervalsHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMergeIntervalsJS = `
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// Do not edit function name
function merge(intervals) {
  // Write your code here
};`;

export const mergeIntervals: Problem = {
	id: "merge-intervals",
	title: "Merge Intervals",
	problemStatement: `<p class='mt-3'>Given an array of intervals where <code>intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]</code>, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.</p>`,
	examples: [
		{
			id: 0,
			inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
			outputText: "[[1,6],[8,10],[15,18]]",
        },
		{
			id: 1,
			inputText: "intervals = [[1,4],[4,5]]",
			outputText: "[[1,5]]",
		},
		{
			id: 2,
			inputText: "intervals = [[1,4],[2,3]]",
			outputText: "[[1,4]]",
		},
		{
			id: 3,
			inputText: "intervals = [[1,4],[5,6]]",
			outputText: "[[1,4],[5,6]]",
		},
	],
	constraints: `<li class='mt-2'><code>1 <= intervals.length <= 10<sup>4</sup></code></li>
<li class='mt-2'><code>intervals[i].length == 2</code></li>
<li class='mt-2'><code>0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10<sup>4</sup></code></li>`,
	starterCode: starterCodeMergeIntervalsJS,
	handlerFunction: mergeIntervalsHandler,
	starterFunctionName: "function merge(",
	order: 7,
};
