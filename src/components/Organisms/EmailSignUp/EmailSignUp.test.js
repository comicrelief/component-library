import React from "react";
import "jest-styled-components";
import renderWithTheme from "../../../../tests/hoc/shallowWithTheme";
import { EmailSignUp, validationSchema } from "./_EmailSignUp";
import RichText from "../../Atoms/RichText/RichText";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const DummyForm = () => {
  const formMethods = useForm({
    mode: "onBlur",
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit } = formMethods;

  const top =
    "<h1> Top Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
  const success =
    "<h1> Success Copy</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>";
  const privacy =
    'check <a href="https://www.comicrelief.com/privacy-notice">Privacy policy</a>';

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(() => true)} noValidate>
        <EmailSignUp
          title="sign up letter"
          topCopy={<RichText markup={top} />}
          successCopy={<RichText markup={success} />}
          privacyCopy={<RichText markup={privacy} />}
          formContext={formMethods}
        />
      </form>
    </FormProvider>
  );
};

it("renders correctly", () => {
  const tree = renderWithTheme(<DummyForm />).toJSON();

  expect(tree).toMatchSnapshot();
});
