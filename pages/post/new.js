import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const NewPost = (props) => {
    console.log("NEW POST PROPS", props)
    return (
        <div className="bg-red-500"> 
            New post page
        </div>
    );
}
export default NewPost;

export const getServerSideProps = withPageAuthRequired(() => {
return {
    props: {
        test: "this is a test",
    },
};
});
