import { posts } from "@/lib/data";

export function GET() {
  return new Response(JSON.stringify(posts));
}

export async function POST(request) {
  const data = await request.json();
  return new Response(JSON.stringify(data));
}
