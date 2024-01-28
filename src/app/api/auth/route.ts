import { sqlClient } from "@/config/db";

export async function GET() {
  const admin = await sqlClient.query("SELECT * FROM admin");
  return Response.json({ data: admin });
}
