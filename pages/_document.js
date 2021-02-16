import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Work+Sans:400,700" rel="stylesheet"></link>
                    <meta name="description" content="Storage Finder website with Next.js"/>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"/>
                    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
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