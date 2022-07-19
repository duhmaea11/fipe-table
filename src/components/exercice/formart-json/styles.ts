import { AppButton } from "@/styles/ts/components";
import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.section`
  ${tw`my-8 w-full`}
`;

export const Title = styled.p`
  ${tw`font-bold`}
`;

export const Content = styled.div`
  ${tw`grid gap-4 grid-cols-3 sm:grid-cols-1 `}
`;

export const Card = styled.article`
  ${tw`flex flex-col items-center justify-center p-4 rounded shadow-md `}
  background: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.img`
  ${tw`w-[90%] mb-4 rounded`}
`;

export const Text = styled.h5``;

export const Button = styled(AppButton)``;
