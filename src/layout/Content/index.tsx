import { Alert, Spin } from "antd";
import { Outlet, useNavigation } from "react-router";

export default function Content() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      {isLoading ? (
        <Spin size="large" tip="Loading...">
          <Alert description="............"></Alert>
        </Spin>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
