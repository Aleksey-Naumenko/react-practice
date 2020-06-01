import React from "react";
import User from "./User";
import City from "./City";
import { withDataLoader } from "./withDataLoader";

const MyCity = withDataLoader(
  "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities/1"
)(City);

const SuperUser = withDataLoader("https://api.github.com/users/octocat")(User);

const App = () => {
  return (
    <div className="page">
      <MyCity />
      <SuperUser />
    </div>
  );
};

export default App;
