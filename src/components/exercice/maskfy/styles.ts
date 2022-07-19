import { AppFormGroup } from "@/styles/ts/components";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.section`
  ${tw`w-full my-8`}
`;

export const Title = styled.p`
  ${tw`font-bold mb-4`}
`;

export const FormGroup = styled(AppFormGroup)`
  ${tw`w-full`}
`;

export const Content = styled.article`
  ${tw`p-4 shadow`}
  background: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.p``;

export const Input = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
