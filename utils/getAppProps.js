import { getSession } from "@auth0/nextjs-auth0"
import clientPromise from "../lib/mongodb";


export const getAppProps = async (ctx) => {
    const userSession = await getSession(ctx.req, ctx.res);
    const client = await clientPromise;
    const db = client.db("BlogStandard");
    const user = await db.collection("users").findOne({
        auth0Id: userSession.user.sub
    });
    
    if(!user){
        return {
            availableTokens: 0,
            posts: [],
        }
    }

    const posts = await db
        .collection("posts")
        .find({
            userId: user._id
        }).sort({
            created: -1
        }).toArray();  // toArray is built in MongoDB function
    
    const capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return {
        availableTokens: user.availableTokens,
        posts: posts.map(({created, _id, userId, topic, ...rest}) => ({
            _id: _id.toString(),
            created: created.toString(),
            topic: topic.split(" ").map(word => capitalize(word)).join(" "),
            ...rest,
        })),
        postId: ctx.params?.postId || null,
    }
};