//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//DOES NOT USE REACTS useForm because it does not work with antD Form.useForm(). It is best to just use antD implementation, no need for reacts useForm(). This works similarly though
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import { Button, Form, Input, InputNumber } from "antd";

interface FormValues {
  name: string | undefined;
  age: number | undefined;
}

export default function FormWithAntDesign() {
  const [form] = Form.useForm<FormValues>();

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
          {
            max: 10,
            message: "Name cannot be longer than 10",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Age"
        name="age"
        rules={[
          { required: true, message: "Please input your age!" },
          {
            type: "number",
            max: 10,
            message: "Cannot be older than 10",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 17, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
