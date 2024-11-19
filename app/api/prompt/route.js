import Prompt from "@models/prompt";
import { connectToDB } from '@config/db'

export const GET = async () => {

    try {
        await connectToDB();

        const prompts = await Prompt.find({});
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }


}