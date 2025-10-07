import { NextRequest, NextResponse } from "next/server";

/**
 * Universal proxy route for development and ngrok usage.
*/

export async function GET(req: NextRequest) {
	try {
		// Extract target URL from the query string
		const { searchParams } = new URL(req.url);
		const targetUrl = searchParams.get("url");

		if (!targetUrl) {
			return NextResponse.json({ error: "Missing 'url' query parameter" }, { status: 400 });
		}

		// Forward the request server-side
		const res = await fetch(targetUrl, {
			method: "GET",
			headers: {
				"ngrok-skip-browser-warning": "true", // skip interstitial
				"Accept": "application/json",
			},
			cache: "no-store",
		});

		if (!res.ok) {
			const text = await res.text();
			console.error("Upstream error:", text.slice(0, 300));
			return NextResponse.json({ error: `Upstream ${res.status}: ${res.statusText}` }, { status: res.status });
		}

		// Forward the JSON response
		const data = await res.json();
		return NextResponse.json(data);
	} catch (err) {
		const error = err as Error;
		console.error("Proxy fetch failed:", error.message);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}