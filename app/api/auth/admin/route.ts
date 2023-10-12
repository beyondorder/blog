import {prisma} from "@/lib/prisma";
import {NextResponse} from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export async function GET(request: Request){
	const email = new URL(request.url).searchParams.get("email");
	if (email === ADMIN_EMAIL){
		return NextResponse.json({result: true});
	}else{
		return NextResponse.json({result: false});
	}
}