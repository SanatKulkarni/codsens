import assert from "assert";
import { Problem } from "../types/problem";

// TreeNode definition
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;

	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

// Function to calculate the maximum depth
function maxDepth(root: TreeNode | null): number {
	if (root === null) return 0;
	const leftDepth = maxDepth(root.left);
	const rightDepth = maxDepth(root.right);
	return Math.max(leftDepth, rightDepth) + 1;
}

export const maximumDepthOfBinaryTreeHandler = (fn: any) => {
	try {
		const tests = [
			{
				input: new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7))),
				output: 3,
			},
			{
				input: new TreeNode(1, null, new TreeNode(2)),
				output: 2,
			},
			{
				input: null,
				output: 0,
			},
			{
				input: new TreeNode(0),
				output: 1,
			},
		];

		for (const { input, output } of tests) {
			const result = fn(input);
			assert.strictEqual(result, output);
		}
		return true;
	} catch (error: any) {
		console.log("Error from maximumDepthOfBinaryTreeHandler: ", error);
		throw new Error(error);
	}
};

const starterCodeMaximumDepthOfBinaryTreeJS = `
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// Do not edit function name
function maxDepth(root) {
  // Write your code here
};`;

export const maximumDepthOfBinaryTree: Problem = {
	id: "maximum-depth-of-binary-tree",
	title: "Maximum Depth of Binary Tree",
	problemStatement: `<p class='mt-3'>Given the <code>root</code> of a binary tree, return <em>its maximum depth</em>.</p>
	<p>A binary tree's <strong>maximum depth</strong>&nbsp;is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>`,
	examples: [
		{
			id: 0,
			inputText: "root = [3,9,20,null,null,15,7]",
			outputText: "3",
		},
		{
			id: 1,
			inputText: "root = [1,null,2]",
			outputText: "2",
		},
		{
			id: 2,
			inputText: "root = []",
			outputText: "0",
		},
		{
			id: 3,
			inputText: "root = [0]",
			outputText: "1",
		},
	],
	constraints: `<li class='mt-2'>The number of nodes in the tree is in the range <code>[0, 10<sup>4</sup>]</code>.</li>
<li class='mt-2'><code>-100 <= Node.val <= 100</code></li>`,
	starterCode: starterCodeMaximumDepthOfBinaryTreeJS,
	handlerFunction: maximumDepthOfBinaryTreeHandler,
	starterFunctionName: "function maxDepth(",
	order: 8,
};
