import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document"

const sourceSansProFonts = ["Light", "Regular", "SemiBold", "Bold", "Black"]

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    {sourceSansProFonts.map((font) => (
                        <link
                            key={"source-sans-pro-font-" + font}
                            rel="preload"
                            href={`/fonts/SourceSansPro-${font}.ttf`}
                            as="font"
                            type="font/ttf"
                            crossOrigin="anonymous"
                        />
                    ))}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
