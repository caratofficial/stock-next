import {connect, model, models, Schema} from "mongoose"
//const connectionString = 'mongodb+srv://user1:0qVKnMYLcxmQ4id7@cluster0.yx0cyuu.mongodb.net/blogs'
const connectionString = process.env.MONGODB_URI

//need to use both async/await to wait for mongoose to connect
export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)

    if (req.method === 'GET') {
        const docs = await Article.find()
        res.status(200).json(docs)
    } else if (req.method === 'POST') {
        console.log(typeof(req.body))
        // res.status(200).json(req.body)
        const doc = await Article.create(req.body)
        res.status(201).json(doc)
    } else {
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}



const articleSchema = new Schema({
    title: String,
    content: String,
});

console.log("Mongoose Models", models)
const Article = models?.article || model('article', articleSchema);