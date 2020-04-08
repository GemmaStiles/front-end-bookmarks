const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const filters = require('./src/_11ty/filters.js')

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  // Filters
  Object.keys(filters).forEach(filterName => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  });

  // Collections

  // Get only content that matches a tag
  eleventyConfig.addCollection("entriesSorted", function(collection) {
      return collection.getFilteredByTag("entry").sort(function(a, b){
        if(a.data.title < b.data.title) { return -1; }
        if(a.data.title > b.data.title) { return 1; }
        return 0;
    })
  });

  eleventyConfig.addPassthroughCopy('./src/images');
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    templateFormats: ['md', 'njk'],

    pathPrefix: '/',

    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    }
  };
};
