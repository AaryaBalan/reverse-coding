import React from "react";

export default function Easy() {
    return (
        <div className="bg-[#131324] p-6 md:p-10 rounded-2xl shadow-md text-white mx-auto space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-green-400">
                🔢 Problem: Sum of Numbers from 1 to N
            </h1>

            <div className="space-y-2">
                <p className="text-base md:text-lg">
                    Given an integer <code className="bg-gray-800 px-2 py-1 rounded text-green-400">n</code>, return the sum of all numbers from <strong>1</strong> to <strong>n</strong> (inclusive).
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-300">Examples</h2>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-green-400">Example 1:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-green-400">n = 5</code><br />
                        <strong>Output:</strong> <code className="text-green-400">15</code><br />
                        <strong>Explanation:</strong> 1 + 2 + 3 + 4 + 5 = 15
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-green-400">Example 2:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-green-400">n = 1</code><br />
                        <strong>Output:</strong> <code className="text-green-400">1</code>
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-green-400">Example 3:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-green-400">n = 100</code><br />
                        <strong>Output:</strong> <code className="text-green-400">5050</code><br />
                        <strong>Explanation:</strong> Sum of first 100 natural numbers = (100 × 101) / 2
                    </p>
                </div>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-300">Input</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 mt-2">
                    <li>Input is not required from the user. Assume the variable n is predefined and use it directly in your implementation.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-xl font-semibold text-gray-300">Constraints</h2>
                <ul className="list-disc list-inside text-sm md:text-base text-gray-300 mt-2">
                    <li>1 ≤ n ≤ 10⁹</li>
                </ul>
            </div>


            <div className="border-t border-gray-700 pt-4">
                <h2 className="text-xl font-semibold text-gray-300">💡 Follow-up</h2>
                <p className="text-sm md:text-base">
                    Can you solve this without using loops or recursion?
                </p>
            </div>
        </div>
    );
}
