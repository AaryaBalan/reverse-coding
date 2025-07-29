import React from "react";

export default function Hard() {
    return (
        <div className="bg-[#131324] p-6 md:p-10 rounded-2xl shadow-md text-white mx-auto space-y-6">
            <h1 className="text-2xl md:text-3xl font-bold text-red-400">
                🔥 Problem (Hard): Check if a Number is an Armstrong Number
            </h1>

            <div className="space-y-2">
                <p className="text-base md:text-lg">
                    Given an integer <code className="bg-gray-800 px-2 py-1 rounded text-red-300">n</code>, determine whether it is an <strong>Armstrong Number</strong>.
                    An <strong>Armstrong number</strong> is a number that is equal to the sum of its digits each raised to the power of the number of digits. <br />
                    Return 1 for true and 0 for false.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-300">Function Signature</h2>
                <pre className="bg-gray-800 p-4 rounded text-sm text-red-300 overflow-auto">
                    {`function isArmstrong(n: number): boolean`}
                </pre>
            </div>

            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-300">Examples</h2>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-red-300">Example 1:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-red-300">n = 153</code><br />
                        <strong>Output:</strong> <code className="text-red-300">1</code><br />
                        <strong>Explanation:</strong> 1³ + 5³ + 3³ = 153
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-red-300">Example 2:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-red-300">n = 9474</code><br />
                        <strong>Output:</strong> <code className="text-red-300">1</code><br />
                        <strong>Explanation:</strong> 9⁴ + 4⁴ + 7⁴ + 4⁴ = 9474
                    </p>
                </div>

                <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <p className="font-medium text-red-300">Example 3:</p>
                    <p className="text-sm">
                        <strong>Input:</strong> <code className="text-red-300">n = 123</code><br />
                        <strong>Output:</strong> <code className="text-red-300">0</code>
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

        </div>
    );
}
