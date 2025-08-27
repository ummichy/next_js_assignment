
import clientPromise from "@/lib/dbConnect";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db("Job_TaskDB");

    const products = await db.collection("products").find({}).toArray();

    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("Job_TaskDB");

    const data = await req.json();

    // Validate required fields
    if (!data.name || !data.description || !data.price) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }

    const newProduct = {
      name: data.name,
      description: data.description,
      price: parseFloat(data.price),
      createdAt: new Date(),
    };

    const result = await db.collection("products").insertOne(newProduct);

    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
