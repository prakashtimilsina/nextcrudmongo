import connect from '../../../libs/dbConfig';
import Topic from '../../../models/topic';
import { NextResponse } from 'next/server';

export async function POST(request){
    const reqBody = await request.json()
    const { title, description } = reqBody
    await connect();
    await Topic.create({title, description})
    return NextResponse.json({message: "Topic is created."}, {status: 201})   
}

export async function GET() {
    await connect();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Topic deleted"}, {status: 200});
}


