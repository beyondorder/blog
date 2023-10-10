import bcrypt from "bcrypt";
import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

export async function POST(request: Request){
	const { email, password} = await request.json();
	const requestPassword = bcrypt.hash(password, 12);
	if (!password || !email) return;
	const user = await prisma.user.findUnique({
		where:{ email	}
	})
	if(!user){
		return NextResponse.json(new Error("User not found"), {status: 404});
	}
	const passwordMatch = await bcrypt.compare(password, user.hashedPassword!)
	if(passwordMatch){
		return NextResponse.json(user);
	}else{
		return NextResponse.json(new Error("Password doesn't match"), {status: 401});
	}
}