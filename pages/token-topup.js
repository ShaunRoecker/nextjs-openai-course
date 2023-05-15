import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../components/AppLayout";

const TokenTopup = () => {
    const handleClick = async () => {
        await fetch(`/api/addTokens`, {
            method: "POST",
        })
    }
    return (
        <div className=""> 
            <h1>Token Adder Page</h1>
            <button className="btn" onClick={handleClick}>Add Tokens</button>
        </div>
    );
}
export default TokenTopup;

TokenTopup.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
return {
    props: {
    },
  };
});