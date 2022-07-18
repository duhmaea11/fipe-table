import tw from 'twin.macro'
import styled from 'styled-components'

export const AppFormGroup = styled.div`
    width: auto;
    margin-bottom: 1rem;

    > label {
        display: block;
        margin-bottom: 8px;
    }

    > input,
    > select,
    > textarea {
        width: 100%;
        height: 44px;
        display: block;
        border: 2px solid;
        padding: 4px 12px;
        ${tw`invalid:border-red-500 rounded-lg`}

        &:focus {
            outline: none !important;
        }
    }

    > textarea {
        height: auto;
    }

    > span {
        ${tw`text-sm absolute mt-1`}
        color: ${props => props.theme.colors.danger};
    }
`