import { Button, Form, Input, InputNumber, Select } from "antd";

type Category = "Groceries" | "Utilities" | "Entertainment";

interface FormValues {
  description: string;
  amount: number;
  category: Category;
}

export default function ExpenseTrackerProject() {
  const [form] = Form.useForm();

  const onFinish = (values: FormValues): FormValues => {
    console.log("Form Data:", values);
    return {
      description: values.description,
      amount: values.amount,
      category: values.category,
    };
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
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Description is required",
          },
          {
            min: 3,
            message: "Description should be at least 3 characters.",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          { required: true, message: "Amount is required" },
          {
            type: "number",
            max: 10,
            message: "Amount cannot be more than 10",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        label="Category"
        name="category"
        rules={[
          {
            required: true,
            message: "Category is required",
          },
          {
            message: "Category should be at least 3 characters.",
          },
        ]}
      >
        <Select>
          <Select.Option value="Groceries">Groceries</Select.Option>
          <Select.Option value="Utilities">Utilities</Select.Option>
          <Select.Option value="Entertainment">Entertainment</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 17, span: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
