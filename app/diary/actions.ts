'use server'

/**
 * Validates the diary unlock password server-side.
 * Set DIARY_PASSWORD in .env.local to change it.
 * Falls back to "shanaol" for local development.
 */
export async function unlockDiary(password: string): Promise<boolean> {
  const correct = process.env.DIARY_PASSWORD ?? 'shanaol'
  return password === correct
}
