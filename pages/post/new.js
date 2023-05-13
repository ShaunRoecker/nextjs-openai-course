import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";

const NewPost = (props) => {
    console.log("NEW POST PROPS", props)
    const handleClick = async () => {
        const response = fetch("/api/generatePost", {
            method: "POST"
        })
        const json = (await response).json();
        console.log("RESULT ", json);
    };

    return (
        <div className=""> 
            <h1>This is a new post page</h1>
            <button className="btn" onClick={handleClick}>
                Generate
            </button>
        </div>
    );
}
export default NewPost;

NewPost.getLayout = function getLayout(page, pageProps){
    return <AppLayout {...pageProps}>{page}</AppLayout>
}

export const getServerSideProps = withPageAuthRequired(() => {
return {
    props: {
        test: "this is a test",
    },
};
});
