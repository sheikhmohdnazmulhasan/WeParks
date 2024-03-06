import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

export async function POST(request) {
    await connectMongoDB();

    const { name, email, password } = await request.json();

    const encryptedPassword = await bcrypt.hash(password, 10);
    const isExist = await User.findOne({ email });

    if (isExist) {
        return NextResponse.json({ message: 'User Already Exist!' }, { status: 200 });

    } else {
        await User.create({ name, email, password: encryptedPassword });
        return NextResponse.json({ message: "The user has been successfully saved to the database" }, { status: 201 });
    }

};