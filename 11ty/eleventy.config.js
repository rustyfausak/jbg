export default function(eleventyConfig) {
	// Order matters, put this at the top of your configuration file.
  eleventyConfig.setInputDirectory("views");
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setOutputDirectory("_site");
  eleventyConfig.addPassthroughCopy({ "img/favicon.ico": "favicon.ico" });
  eleventyConfig.addPassthroughCopy({ "img/*": "img" });
  eleventyConfig.addPassthroughCopy({ "css/*.css": "css" });
  eleventyConfig.addPassthroughCopy({ "js/*.js": "js" });
};
