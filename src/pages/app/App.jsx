import { Button } from "antd";
import { ProForm, ProFormText } from "@ant-design/pro-components";
import "./App.css";

function App() {
  return (
    <>
      <ProForm
        onFinish={async (values) => {
          console.log(values);
        }}
      >
        <ProFormText name="name" label="姓名" />
      </ProForm>
      <Button type="primary">Testing Button</Button>
    </>
  );
}

export default App;
