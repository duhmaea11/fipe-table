import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.section`
  ${tw`my-8 w-full`}
`;

export const Content = styled.div`
  ${tw`grid gap-4 grid-cols-2`}
`;

export const Title = styled.p`
  ${tw`font-bold mb-4`}
`;

export const Card = styled.article`
  ${tw`flex flex-col items-center justify-center p-4 rounded shadow-md `}
  background: ${({ theme }) => theme.colors.white};
`;

export const JsonText = styled.p`
  white-space: pre;
`;
