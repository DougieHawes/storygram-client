import { Button1 } from "./buttons";
import { Input1, Input2 } from "./inputs";

const SignupForm = () => (
  <form>
    <Input1 label="username" />
    <Input1 label="email" />
    <Input1 label="password" />
    <Input1 label="confirm password" />
    <Button1 />
  </form>
);

const SigninForm = () => (
  <form>
    <Input1 label="username" />
    <Input1 label="password" />
    <Button1 />
  </form>
);

const NewpostForm = () => (
  <form>
    <Input1 label="title" />
    <Input2 label="text" />
    <Button1 />
  </form>
);

export { SignupForm, SigninForm, NewpostForm };
