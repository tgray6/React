import { Button, Form, Input, InputRef } from "antd";
import { FormEvent, useEffect, useRef, useState } from "react";

export default function UsernameForm() {
  //   useEffect(() => {
  //     if (nameRef.current) nameRef.current.focus();
  //   });

  const nameRef = useRef<InputRef>(null);
  const ageRef = useRef<InputRef>(null);

  const person = {
    name: "",
    age: 0,
  };

  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log(name);
    // console.log(age);
    if (nameRef.current !== null) person.name = nameRef.current.input!.value;
    if (ageRef.current !== null)
      person.age = parseInt(ageRef.current.input!.value);
    console.log(person);
  }

  return (
    <Form
      onSubmitCapture={handleSubmit}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item
        id="name"
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            pattern: /^[A-Za-z]+$/,
            message: "Please input your name!",
          },
        ]}
      >
        <Input
          ref={nameRef}
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Item>
      <Form.Item
        id="age"
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input
          ref={ageRef}
          type="number"
          value={age}
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 17, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
