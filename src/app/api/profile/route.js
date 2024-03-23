import { NextResponse } from "next/server";
import connectDB from "../../../../database/mongodb";
import Profile from "../../../../models/profileModel";

export async function POST(request){
    const {name, email, tagLine, footerLine, role, experience, facebook, instagram, discord, github, linkedin } = await request.json();
    await connectDB();
    await Profile.create({ name, email, tagLine, footerLine, role, experience, facebook, instagram, discord, github, linkedin });
    return NextResponse.json({ message: "Profile Created" }, {status: 201});
}

export async function GET(request){
    await connectDB();
    const data = await Profile.find();
    return NextResponse.json({ data }, {status: 200});
}

