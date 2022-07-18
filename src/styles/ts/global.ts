import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import 'animate.css'
import tw from 'twin.macro'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        ${tw`text-base`}
        font-family: 'Roboto', sans-serif;

        background: ${({theme}) => theme.colors.bgPrimary};
        color: ${({theme}) => theme.colors.text};
    }
` 