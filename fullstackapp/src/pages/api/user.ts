import { user } from "@/util/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function handler(req: NextRequest, res: any) {
    const data = user;
    return res
        ? res.status(200).json(data)
        : NextResponse.json(data, { status: 200 });
}