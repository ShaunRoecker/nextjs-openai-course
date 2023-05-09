import { withPageAuthRequired } from "@auth0/nextjs-auth0";


const TokenTopup = () => {
    return (
        <div className="bg-red-500"> 
            New post page
        </div>
    );
}
export default TokenTopup;

export const getServerSideProps = withPageAuthRequired(() => {
return {
    props: {
    },
  };
});