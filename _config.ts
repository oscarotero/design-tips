import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.7.0/mod.ts";

const site = lume({
  location: new URL("https://oscarotero.com/design-tips/"),
});

site.use(blog());
site.copy([".png", ".jpg"]);

export default site;
