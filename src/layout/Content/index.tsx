import { Alert, Spin } from "antd";
import { Outlet, useNavigation } from "react-router";
import log from "../../utils/log";

export default function Content() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  // console.log("Content");
  log(navigation.state);
  return (
    <div>
      {isLoading
        ? (
            <Spin size="large" tip="Loading...">
              <Alert description="............"></Alert>
            </Spin>
          )
        : (
            <Outlet />
          )}
    </div>
  );
}
