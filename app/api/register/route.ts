import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";
import bcrypt from 'bcrypt';
export async function POST(request: Request){
	const body = await request.json();
	const { name, email, password } = body;
	const hashedPassword = await bcrypt.hash(password, 12);

	const post = await prisma.user.create({
		data: { name, email, hashedPassword }
	})
	return NextResponse.json(post);
}

export async  function GET(request: Request){
	const password = new URL(request.url).searchParams.get("password");
	if (!password) return;
	const requestHashedPassword = bcrypt.hash(password, 12);
	const user = await prisma.user.findUnique({
		where:{
			hashedPassword: requestHashedPassword
		}
	})
	return !!user;
}