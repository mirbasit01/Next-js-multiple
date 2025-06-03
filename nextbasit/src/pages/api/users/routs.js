import { user } from "@/util/db";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    const data = user;
    return res
        ? res.status(200).json(data)
        : NextResponse.json(data, { status: 200 });
}