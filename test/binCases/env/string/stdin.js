"use strict";

module.exports = function testAssertions(code, stdout, stderr) {
	expect(code).toBe(0);
	expect(stdout).toEqual(expect.anything());
	expect(stdout[0]).toContain("Hash: ");
	expect(stdout[1]).toContain("Version: ");
	expect(stdout[2]).toContain("Time: ");
	expect(stdout[3]).toContain("Environment (--env): \"foo\"");
	expect(stdout[5]).toContain("null.js");
	expect(stderr).toHaveLength(0);
};
