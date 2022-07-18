import tw from "twin.macro";
import styled from "styled-components";

export const AppButton = styled.button`
    ${tw`px-6 py-3 bg-transparent border-0 cursor-pointer rounded `}    

    &:disabled {
        ${tw`opacity-80 cursor-not-allowed`}
    }
`
