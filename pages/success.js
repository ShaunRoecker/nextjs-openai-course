import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";
import { getAppProps }  from "../utils/getAppProps";


const Success = () => {

    return (
        <div className=""> 
            <h1>Success Page</h1>
        </div>
    );
}
export default Success;

Success.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(ctx){
        const props = await getAppProps(ctx)
        return {
            props,
        };
    },
});

