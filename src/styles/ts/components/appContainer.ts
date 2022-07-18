import tw from 'twin.macro'
import styled from 'styled-components'

export const AppContainer = styled.section`
    ${tw`container mx-auto px-8 md:px-4 py-4`}

    @media (min-width: 1200px) {
        max-width: 1440px;
    }
`