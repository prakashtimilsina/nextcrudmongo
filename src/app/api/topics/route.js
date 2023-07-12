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