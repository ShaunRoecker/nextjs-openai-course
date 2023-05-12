import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";
import { useState } from "react";

const NewPost = (props) => {
    console.log("NEW POST PROPS", props)
    const [postContent, setPostContent] = useState("");

    const handleClick = async () => {
        const response = await fetch(`/api/generatePost`, {
            method: "POST"
        })
        const json = await response.json();
        console.log("RESULT ", json);
        setPostContent(json.post.postContent)
    };

    return (
        <div className=""> 
            <h1>This is a new post page</h1>
            <button className="btn" onClick={handleClick}>
                Generate
            </button>
            <div className="max-screen-w-sm p-10" dangerouslySetInnerHTML={{__html: postContent}}></div>
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
