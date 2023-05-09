import { withPageAuthRequired } from "@auth0/nextjs-auth0";


const Post = () => {
    return (
        <div className="bg-red-500"> 
            This is the post page.
        </div>
    );
  }
  export default Post;

export const getServerSideProps = withPageAuthRequired(() => {
return {
    props: {

    },
  };
});