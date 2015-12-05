var ssr = require("can-ssr");
global.fetch = require("node-fetch");

var render = ssr({}, {
  plugins: ["react"]
});

render("/").then(function(result){
	console.log(result.html);
});
