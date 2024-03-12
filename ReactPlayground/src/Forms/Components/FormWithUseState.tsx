import { Button, Form, Input } from "antd";
import { FormEvent, useState } from "react";

export default function FormWithUseState() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>(0);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(name);
    console.log(age);
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
