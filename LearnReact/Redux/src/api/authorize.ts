export function authorize(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["admin"]), 1000);
  });
}
