import bcrypt from "bcrypt";
import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(request: Request){
	const body = await request.json();
	const { email, password } = body;
	const hashedPassword = await bcrypt.hash(password, 12);

	const post = await prisma.user.create({
		data: { email, hashedPassword }
	})
	return NextResponse.json(post);
}

