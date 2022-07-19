import tw from "twin.macro";
import styled from "styled-components";
import { AppContainer } from "@/styles/ts/components";

const backInDownAnimation = {
  className: "animate__animated animate__backInDown",
};

export const Container = styled(AppContainer)`
  ${tw`min-h-screen flex items-center justify-center flex-col`}
`;

export const Link = styled.a`
  ${tw`no-underline mt-4 cursor-pointer`}
  color: ${({ theme }) => theme.colors.textLight};
`;
