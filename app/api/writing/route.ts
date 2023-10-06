import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";


export async function POST(request: Request){
	const body = await request.json();
	const { title, content } = body;
	const post = await prisma.post.create({
		data: {
			title,
			content
		}
	})
	return NextResponse.json(post);
}

export async function GET(request: Request){
	const posts = await prisma.post.findMany();
	return NextResponse.json(posts);
}