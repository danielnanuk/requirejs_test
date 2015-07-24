require.config({
	paths:{
		jquery:"jquery"//模块名和文件名相同时，可以省略
	}
})


require(['event', 'logger'], function(e, l) {
	e.fire("#header");
	l.debug("Logger Debug");
});
