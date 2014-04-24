(function(){
var o = {
	i: 0,
	cnt: function(){
		this.i += 1;
	},
	dcnt: function(){
		this.i -= 1;
	}
};

var logger = function(f, cb){
	return function(){
		console.log("antes" + cb.apply(this));
		f.apply(this);
		console.log("despues" + cb.apply(this));
	};
};


o.cnt = logger(o.cnt, function(){
	return this.i;
});



o.cnt();
}());