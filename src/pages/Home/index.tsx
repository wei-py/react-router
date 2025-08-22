import { Button, Form, Input } from "antd";
import {
  NavLink,
  useActionData,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "react-router";
import log from "../../utils/log";

export default function Home() {
  // const { id } = useParams();
  const id = 1;
  const { data, success } = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData();
  log(actionData, success);

  const submit = useSubmit();
  const onFinish = (values: any) => {
    log(JSON.stringify(values));
    submit(values, {
      method: "POST",
      encType: "application/json",
    });
  };
  return (
    <div>
      <h1>{`Home ${id}`}</h1>
      {data.map((item: any) => (
        <div key={item.name}>
          {item.name}
          {" "}
          {item.age}
        </div>
      ))}

      <Form onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="age" name="age">
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <Button
            loading={navigation.state === "submitting"}
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        </Form.Item>
      </Form>
      <NavLink to="/about" state={[{ from: "home", data: { id } }]}>
        About
      </NavLink>
    </div>
  );
}
