module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/js");

  return {
    dir: {
      input: "src",
      output: "public",
      data: "_data"
    }
  };
};