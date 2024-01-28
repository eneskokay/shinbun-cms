import { sqlClient } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const admin: any[] = await sqlClient.query(
    "SELECT * FROM admin WHERE id = 1"
  );

  if (admin[0].isRegistered === "true") {
    return Response.json({ isRegistered: true });
  } else {
    return Response.json({ isRegistered: false });
  }
}
