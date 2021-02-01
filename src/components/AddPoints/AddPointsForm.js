import useForm from "./useForm";
import validate from "./validateInfo";

import {
  Container,
  FormWrap,
  InfoIcon,
  Form,
  FormH1,
  FormContent,
  FormInput,
  InfoContainer,
  FormLabel,
  Information,
  ImageWrapper,
  ButtonWrapper,
  ApplyButton,
} from "./AddPointElements";

const AddPointsForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <Container>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <ImageWrapper
                src="/images/characters/enter-code.svg"
                alt="enter code"
              />
              <FormH1>Enter Your Code </FormH1>
              <FormLabel htmlFor="code">
                Enter the 4 digit code as seen on the kiosk screen/ receipt
              </FormLabel>
              <FormInput
                type="text"
                name="code"
                value={values.code}
                onChange={handleChange}
              />
              {errors.code && (
                <InfoContainer>
                  <InfoIcon />
                  <Information>{errors.code}</Information>
                </InfoContainer>
              )}
              <ButtonWrapper>
                <ApplyButton type="submit">Apply Code</ApplyButton>
              </ButtonWrapper>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default AddPointsForm;
