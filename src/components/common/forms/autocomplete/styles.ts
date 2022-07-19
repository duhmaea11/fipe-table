import { AppFormGroup } from "@/styles/ts/components";
import styled from "styled-components";
import tw from "twin.macro";

const fadeInDownAnimation = {
  className: "animate__animated animate__fadeIn animate__faster",
};

export const Container = styled(AppFormGroup)`
  ${tw`relative`}
`;
export const Input = styled.input``;

export const Group = styled.div.attrs(fadeInDownAnimation)`
  ${tw`w-full max-h-[14rem] overflow-y-auto flex flex-col absolute shadow-lg mt-2 z-10`}
  background: ${({ theme }) => theme.colors.white};
`;

export const Item = styled.span`
  ${tw`py-3 px-4 cursor-pointer`}
  border-bottom: 1px solid  ${({ theme }) => theme.colors.bgPrimary};

  &:hover {
    background: ${({ theme }) => theme.colors.bgPrimary};
  }

  &:last-of-type {
    border-bottom: none;
  }
`;
