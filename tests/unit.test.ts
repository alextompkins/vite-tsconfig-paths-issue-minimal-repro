import { describe, expect, test } from "vitest";
import { helper } from "#utils/helper";

describe('tests', () => {
    test('blah', () => {
        helper(import.meta.url);
        expect(true).toBe(true)
    })
});
