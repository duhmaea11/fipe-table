import tw from "twin.macro";
import styled from "styled-components";
import { AppContainer } from "@/styles/ts/components";

export const Container = styled(AppContainer)`
  ${tw`min-h-screen flex items-center justify-center flex-col`}
`;

export const Content = styled.div`
  ${tw`mt-8 grid gap-6 grid-cols-2`}
`;

export const Title = styled.h2``;

export const Card = styled.article`
  ${tw`h-32 rounded shadow px-8 py-6 flex font-bold items-center justify-center cursor-pointer transition-all duration-500`}

  &:hover {
    transform: scale(1.2);
  }
`;

export const Link = styled.a`
  ${tw`no-underline mt-4 cursor-pointer`}
  color: ${({ theme }) => theme.colors.textLight};
`;
