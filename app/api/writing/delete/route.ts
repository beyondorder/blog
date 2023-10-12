import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function DELETE(request: Request){
	const id = new URL(request.url).searchParams.get("id");
	if (!id) return;
	const writing = await prisma.post.delete({
		where:{ id	}
	})
	if(!writing){
		return NextResponse.json(new Error("Writing not found"), {status: 404});
	}
	return NextResponse.json(writing);
}