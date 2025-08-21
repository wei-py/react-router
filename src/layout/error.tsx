import { useRouteError } from "react-router";
import log from "../utils/log";

export default function Error() {
  const error = useRouteError();
  log(error);
  return (
    <div>
      <h1>Error</h1>
      {/*<p>{error.message}</p>*/}
    </div>
  );
}
