import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
const Error = () => {
  const err = useRouteError();
  if (err.status === 404) {
    return (
      <Wrapper>
        <di>
          <img src={img} alt="not-found"></img>
          <h3>Ohh! page not found</h3>
          <p>we cant' seem to find the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </di>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>Somethng went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
