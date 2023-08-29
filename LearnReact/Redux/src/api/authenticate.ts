export interface IUser {
  id: string;
  name: string;
}

export function authenticate(): Promise<IUser | undefined> {
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
