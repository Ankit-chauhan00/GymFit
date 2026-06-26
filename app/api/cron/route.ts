import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // verify that the request is comming from varcel
  const authHeader = request.headers.get("authorization");

  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  console.log("Cron executed");

  try {
    // 30 minutes ago
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);

    const result =  await prisma.payment.updateMany({
        where: {
            status: "PROCESSING",
            updatedAt:{
                lt: thirtyMinutesAgo
            }
        },
        data:{
            status: "FAILED"
        }
    })

    return NextResponse.json({
        success: true,
        deleted: result.count
    })
    
  } catch (error) {
    return NextResponse.json({success: false, error: "Cron job execution failed"},{status: 500})
  }
}
