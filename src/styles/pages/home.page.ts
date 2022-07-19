import tw from "twin.macro";
import styled from "styled-components";
import { AppContainer } from "../ts/components";

const backInDownAnimation = {
  className: "animate__animated animate__backInDown",
};

export const Container = styled(AppContainer)`
  ${tw`min-h-screen flex items-center justify-center flex-col`}
`;

export const Content = styled.div`
  ${tw`mt-8 grid gap-6 grid-cols-2`}
`;

export const Title = styled.h2.attrs(backInDownAnimation)``;

export const Text = styled.p.attrs(backInDownAnimation)``;

export const Card = styled.article`
  ${tw`h-[20vw] w-[20vw] rounded shadow px-8 py-6 flex font-bold items-center justify-center cursor-pointer transition-all duration-500 sm:h-[40vw] sm:w-[40vw]`}

  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Link = styled.a`
  ${tw`no-underline mt-4 cursor-pointer`}
  color: ${({ theme }) => theme.colors.textLight};
`;
