import { NextResponse } from "next/server";

const posts = [
    {
        title: 'Number1',
        done: false,
    },
    {
        title: 'Number2',
        done: false
    }
]

export function GET() {
    return NextResponse.json(posts)
}