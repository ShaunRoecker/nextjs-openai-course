import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { AppLayout } from "../../components/AppLayout";
import { useState } from "react";


const NewPost = (props) => {
    // console.log("NEW POST PROPS", props)
    const [postContent, setPostContent] = useState("");
    const [topic, setTopic] = useState("");
    const [keywords, setKeywords] = useState("");
    const [title, setTitle] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("/api/generatePost", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ topic, keywords })
           

        })
        const json = await response.json();
        const { postContent, title, metaDescription} = json.post
        console.log("RESULT ", title, postContent, metaDescription );
        setPostContent(postContent)
        setTitle(title)
    };

    return (
        <div className=""> 
            {title? <h1>{title}</h1> : <h1>This is a new post page</h1>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <strong>
                            Generate a blog post on the topic of:
                        </strong>
                    </label>
                    <textarea 
                        className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 round" 
                        value={topic} 
                        onChange={(e) => setTopic(e.target.value)}
                    />
                </div>
                <div>
                    <label>
                        <strong>
                            Targeting the following keywords:
                        </strong>
                    </label>
                    <textarea 
                        className="resize-none border border-slate-500 w-full block my-2 px-4 py-2 round"
                        value={keywords} 
                        onChange={(e) => setKeywords(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn">
                    Generate
                </button>
            </form>
            
            <div className="max-w-screen-sm p-10" dangerouslySetInnerHTML={{__html: postContent}} />
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
