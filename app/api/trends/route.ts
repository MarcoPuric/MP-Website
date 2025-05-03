import { NextResponse } from 'next/server';

const GH   = process.env.GITHUB_TOKEN!;
const NEWS = process.env.NEWSAPI_KEY!;

export async function GET() {
  try {
    const qs = '"AIOps" OR "NoOps"';
    const since = new Date(Date.now() - 90*86_400_000).toISOString().slice(0,10);
    const ghUrl = `https://api.github.com/search/repositories?q=${qs}+created:>${since}&sort=stars&per_page=5`;

    const gh = await fetch(ghUrl, {
      headers:{ Authorization:`Bearer ${GH}`, Accept:'application/vnd.github+json' }
    }).then(r=>r.json());

    const newsUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(qs)}&pageSize=5&sortBy=publishedAt&apiKey=${NEWS}`;
    const news = await fetch(newsUrl).then(r=>r.json());

    const data = [
      ...gh.items.map((r:any)=>({ type:'repo', id:r.id, name:r.full_name, url:r.html_url,
                                  desc:r.description, stars:r.stargazers_count, lang:r.language })),
      ...news.articles.map((a:any)=>({ type:'news', title:a.title, url:a.url,
                                       source:a.source.name, desc:a.description, published:a.publishedAt }))
    ];
    return NextResponse.json(data);
  } catch (err:any) {
    console.error('Trend API failed:', err);
    return NextResponse.json({ error: 'upstream‑error' }, { status: 502 });
  }
}