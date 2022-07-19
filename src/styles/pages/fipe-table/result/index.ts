import tw from "twin.macro";
import styled from "styled-components";

const backInDownAnimation = {
  className: "animate__animated animate__backInDown",
};

const backInUpAnimation = {
  className: "animate__animated animate__backInUp",
};

const zoomInAnimation = {
  className: "animate__animated animate__zoomIn",
};

export const Container = styled.section`
  ${tw`w-full h-screen flex flex-col justify-center items-center`}
  background: ${({ theme }) => theme.colors.greenLight};

  > a {
    ${tw`no-underline`}
    color: ${({ theme }) => theme.colors.textLight};
  }
`;

export const Title = styled.h3.attrs(backInDownAnimation)`
  ${tw`mt-14 text-xl text-center`}
`;

export const Content = styled.div.attrs(zoomInAnimation)`
  ${tw`min-w-[13rem] mt-5 py-1 px-4 rounded-full text-xl text-center font-semibold`}
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;

export const Text = styled.h5.attrs(backInUpAnimation)`
  ${tw`mt-3 mb-8 text-lg text-center`}
  color: ${({ theme }) => theme.colors.textLight};
`;
