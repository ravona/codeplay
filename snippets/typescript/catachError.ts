// Inspired by Web Dev Simplified:
// https://www.youtube.com/watch?v=AdmGHwvgaVs&t=437s
async function catchError<T>(
  promise: Promise<T>
): Promise<{ error: Error | undefined; data: T | undefined }> {
  try {
    const data = await promise;
    return { error: undefined, data };
  } catch (error) {
    return { error, data: undefined };
  }
}
