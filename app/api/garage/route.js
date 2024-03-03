import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();
    return NextResponse.json({ message: 'Api Hit Successfully' });
}