import rss, {pagesGlobToRssItems} from "@astrojs/rss";

export async function GET(context) {
    return rss({
        title: "Astro Learner | Blog",
        description: "My journey as a web developer - Astro Learner",
        site: context.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`
    })
}
