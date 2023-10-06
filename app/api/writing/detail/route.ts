import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function GET(request: Request){
	const id = new URL(request.url).searchParams.get("id");
	const post = await prisma.post.findUnique({
		where: {
			id: id!
		}
	});
	return NextResponse.json(post);
}