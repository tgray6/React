import { Button, Form, Input, InputNumber, Select, Table } from "antd";
import { useEffect, useState } from "react";
import type { TableColumnsType } from "antd";

export type Category = "Groceries" | "Utilities" | "Entertainment";

export interface FormValues {
  description: string;
  amount: number;
  category: Category;
  key: number;
}

function getRandomNumber() {
  // Generates a random number between 0 (inclusive) and 1 (exclusive)
  return Math.random();
}

export default function ExpenseTrackerProject() {
  const [expenses, setExpenses] = useState<FormValues[] | undefined>(undefined);
  const [form] = Form.useForm();
  const [expensesTotal, setExpensesTotal] = useState<number>(0);

  useEffect(() => {
    increaseExpensesTotal();
  }, [expenses]);

  function onFinish(values: FormValues) {
    const newExpense = { ...values, key: getRandomNumber() };
    // Create a new array with the existing expenses and the new expense
    // If expenses is initially undefined, start with an empty array
    setExpenses((prevExpenses) => [...(prevExpenses || []), newExpense]);
    console.log("Form Data:", values, newExpense.key);
  }

  function handleDelete(record: FormValues) {
    // Filter out the record to be deleted
    const updatedDataSource = expenses!.filter(
      (item) => item.key !== record.key
    );
    // Check if the updated expenses array is empty and reset expensesTotal to 0
    if (updatedDataSource.length === 0) {
      setExpensesTotal(0);
    }
    setExpenses(updatedDataSource);
  }

  const Columns: TableColumnsType<FormValues> = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "25%",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "25%",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "25%",
      filters: [
        {
          text: "Groceries",
          value: "Groceries",
        },
        {
          text: "Utilities",
          value: "Utilities",
        },
        {
          text: "Entertainment",
          value: "Entertainment",
        },
      ],
      onFilter: (value, record) => record.category === value,
      sorter: (a, b) => a.category.length - b.category.length,
      sortDirections: ["descend"],
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_: any, record: any) => (
        <Button danger onClick={() => handleDelete(record)}>
          Delete
        </Button>
      ),
    },
  ];

  function increaseExpensesTotal() {
    let total = 0;
    if (expenses?.length === 0 || expenses === undefined) {
      return 0;
    }
    for (let i = 0; i < expenses!.length; i++) {
      total = total + expenses![i].amount;
    }
    setExpensesTotal(total);
  }

  return (
    <>
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
          <Button
            type="primary"
            htmlType="submit"
            onClick={increaseExpensesTotal}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Table
        dataSource={expenses}
        columns={Columns}
        pagination={{
          pageSize: 5, // Set the maximum number of rows before pagination
          position: ["bottomCenter"], // Set the pagination position
        }}
        footer={() =>
          expenses === undefined || expenses.length === 0
            ? null
            : `Total: $${expensesTotal.toFixed(2)}`
        }
      />
    </>
  );
}
