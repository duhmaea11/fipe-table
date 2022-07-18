import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps
} from 'next/document'
import React, { ReactElement } from 'react'
import { ServerStyleSheet } from 'styled-components'
import { ComponentsEnhancer } from 'next/dist/shared/lib/utils'

type ContextType = DocumentContext
type InitalPropsType = DocumentInitialProps

export default class MyDocument extends Document {
    static async getInitialProps(ctx: ContextType): Promise<InitalPropsType> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () => {
                const config: ComponentsEnhancer = {
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App {...props} />)
                }

                return originalRenderPage(config)
            }

            const initialProps = await Document.getInitialProps(ctx)

            const styles = (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ) as ReactElement | any

            return { ...initialProps, styles }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        return (
            <Html lang="pt">
                <Head>
                    <meta charSet="utf-8" />
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />

                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/> 

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}