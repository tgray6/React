export interface User {
  id: string;
  name: string;
}

export function authenticate(): Promise<User | undefined> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: "1",
          name: "Tyler",
        }),
      1000
    );
  });
}
