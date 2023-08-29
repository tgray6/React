interface Person {
  name: string;
}

export default function getPerson(): Promise<Person> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: 'Bob' }), 1000);
  });
}
