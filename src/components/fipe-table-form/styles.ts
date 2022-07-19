import tw from "twin.macro";
import styled from "styled-components";
import { AppButton, AppFormGroup } from "@/styles/ts/components";

const backInDownAnimation = {
  className: "animate__animated animate__backInDown",
};

const fadeInLeftAnimation = {
  className: "animate__animated animate__fadeInLeft",
};

export const Container = styled.section`
  ${tw`w-2/4 flex flex-col justify-center items-center md:w-4/5`}
`;

export const Title = styled.h3.attrs(backInDownAnimation)`
  ${tw`text-xl text-center`}
`;

export const Text = styled.h5.attrs(backInDownAnimation)`
  ${tw`text-lg text-center`}
`;

export const Form = styled.form.attrs(fadeInLeftAnimation)`
  ${tw`w-4/5 shadow px-12 py-8 mt-8 flex flex-col items-center md:w-full md:px-6`}

  background: ${({ theme }) => theme.colors.white};
`;

export const FormGroup = styled(AppFormGroup)`
  ${tw`w-full`}
`;

export const Label = styled.label``;

export const Select = styled.select``;

export const Option = styled.option``;

export const Button = styled(AppButton)`
  ${tw`mt-3 `}
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
