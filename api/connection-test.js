const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:mongo081@cluster1.5vzlgfx.mongodb.net/";

const client = new MongoClient(uri);
async function connectToMongoDBTest() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    // return "Connected to MongoDB Atlas";

    const database = client.db("mongodb");

    const products = database.collection("p2");

    const product = await products.findOne({ _id: 1 });

    return product;

    // const collectionCursor = database.listCollections();

    // const collectionNames = await collectionCursor.toArray();

    // console.log("Collections in the databases:");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas", error);
    throw error;
  } finally {
    // ไม่ว่ากรณีจะเชื่อมต่อสำเร็จหรือแอเร่อ หลังจากที่เราทำทุกอย่างเสร็จแล้ว มันจะปิดการใช้งาน ตัดการเชื่อมต่อ
    await client.close();
  }
}
module.exports = connectToMongoDBTest();
