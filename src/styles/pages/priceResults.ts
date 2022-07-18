import tw from "twin.macro";
import styled from "styled-components";

export const Container = styled.section`
  ${tw`w-full h-screen flex flex-col justify-center items-center`}
  background: ${({ theme }) => theme.colors.greenLight};
`;

export const Content = styled.div`
  ${tw`min-w-[13rem] mt-5 py-1 px-4 rounded-full text-xl text-center font-semibold`}
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h3`
  ${tw`mt-14 text-xl text-center`}
`;

export const Text = styled.h5`
  ${tw`mt-3 mb-10 text-lg text-center`}
  color: ${({ theme }) => theme.colors.textLight};
`;
