export function hasConfiguredApiKey(apiKey: string | null | undefined) {
  return Boolean(apiKey?.trim())
}
