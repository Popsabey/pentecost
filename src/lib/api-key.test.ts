import { describe, expect, it } from "vitest"

import { hasConfiguredApiKey } from "./api-key"

describe("hasConfiguredApiKey", () => {
  it("returns false when the key is missing", () => {
    expect(hasConfiguredApiKey(null)).toBe(false)
    expect(hasConfiguredApiKey(undefined)).toBe(false)
    expect(hasConfiguredApiKey("")).toBe(false)
  })

  it("treats whitespace-only values as missing", () => {
    expect(hasConfiguredApiKey("   ")).toBe(false)
  })

  it("returns true when a non-empty key is present", () => {
    expect(hasConfiguredApiKey("dg_test_123")).toBe(true)
    expect(hasConfiguredApiKey("  dg_test_123  ")).toBe(true)
  })
})
