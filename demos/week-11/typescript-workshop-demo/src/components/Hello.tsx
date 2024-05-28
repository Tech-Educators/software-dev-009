type HelloProps = { name: string; age: number };

export function Hello({ name, age }: HelloProps) {
  return (
    <div>
      Hello {name} who is {age}
    </div>
  );
}
