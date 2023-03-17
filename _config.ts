import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.7.1/mod.ts";

const site = lume({
  location: new URL("https://oscarotero.com/design-tips/"),
});

site.use(blog());
site.copy([".png", ".jpg", ".svg"]);

site.process([".html"], (page) => {
  const { document } = page;

  const badge = document!.createElement("div");
  badge.className = "not-by-ai";
  const src = site.url("not-by-ai.svg");
  badge.innerHTML = `<img src="${src}" alt="Written by human">`;
  document!.body.append(badge);
});

export default site;
