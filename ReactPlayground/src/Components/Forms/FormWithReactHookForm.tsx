//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//DOES NOT USE REACTS useForm because it does not work with antD Form.useForm(). It is best to just use antD implementation, no need for reacts useForm(). This works similarly though
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { Button, Form, Input } from "antd";

interface FormValues {
  name: string;
  age: number;
}

export default function FormWithAntDesign() {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues) => {
    console.log("Form Data:", values);
    return { name: values.name, age: values.age };
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      autoComplete="off"
    >
      <Form.Item
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
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input type="number" />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 17, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
