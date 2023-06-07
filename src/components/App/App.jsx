import { Profile } from "../Profile/Profile.jsx";
import user from "../../../src/user.json";

export const App = () => {
  return (
    <Profile
  {...user}
/>
  );
};
