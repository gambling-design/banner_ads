(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 305,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bread.png", id:"bread"},
		{src:"images/butik.jpg", id:"butik"},
		{src:"images/fonon.jpg", id:"fonon"},
		{src:"images/kamni.png", id:"kamni"},
		{src:"images/krog.jpg", id:"krog"},
		{src:"images/monet.png", id:"monet"},
		{src:"images/nog.png", id:"nog"},
		{src:"images/nog2.png", id:"nog2"},
		{src:"images/ryk1.png", id:"ryk1"},
		{src:"images/ryk2.png", id:"ryk2"},
		{src:"images/ryk3.png", id:"ryk3"},
		{src:"images/ryk4.png", id:"ryk4"},
		{src:"images/ryk5.png", id:"ryk5"},
		{src:"images/telo.png", id:"telo"},
		{src:"images/wer.png", id:"wer"},
		{src:"images/wlen.png", id:"wlen"}
	]
};



// symbols:



(lib.bread = function() {
	this.initialize(img.bread);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,23);


(lib.butik = function() {
	this.initialize(img.butik);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,415,70);


(lib.fonon = function() {
	this.initialize(img.fonon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,514);


(lib.kamni = function() {
	this.initialize(img.kamni);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,179,185);


(lib.krog = function() {
	this.initialize(img.krog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,414,392);


(lib.monet = function() {
	this.initialize(img.monet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,42,50);


(lib.nog = function() {
	this.initialize(img.nog);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,98,77);


(lib.nog2 = function() {
	this.initialize(img.nog2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,71);


(lib.ryk1 = function() {
	this.initialize(img.ryk1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,28,40);


(lib.ryk2 = function() {
	this.initialize(img.ryk2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,44,43);


(lib.ryk3 = function() {
	this.initialize(img.ryk3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,45,81);


(lib.ryk4 = function() {
	this.initialize(img.ryk4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,58,57);


(lib.ryk5 = function() {
	this.initialize(img.ryk5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,19,47);


(lib.telo = function() {
	this.initialize(img.telo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,91,134);


(lib.wer = function() {
	this.initialize(img.wer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,36,39);


(lib.wlen = function() {
	this.initialize(img.wlen);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,52);


(lib.Символ64 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.krog, null, new cjs.Matrix2D(1.12,0,0,1.12,-89.3,-242)).s().p("Ah5TTIgBgJQgFhIhCgaQgCgigiAHIgSgkIgagRIgBgBIgegWIgFgGIgbhQIgSgkIgbgJIgbg1IgTgGIgjhvQgEAAgDgBQgcgZgBg2QgegVANgzQgKAAAAgCQgMgogFgnQgUgDgHgPIgBgJQgXhlgng8IAAjXIgkg+IgEhjQALiJAUh5QgJkoBcj8IAQgaIAAgFIAJgNQgBguALgiIAIgJQANgOAKgRIAMgFQA+hTBJhyIAShIIAtgbIAIgbQAFABADgDQARgMALgWIAJgGQCrB8C2B5QAhAVAiAUQhmD4gDEPQgEEfA6ETQBDEyCPEWQA6BvB0BKQBNAxBIA1IgjAGIgYAYQgSASgVAJQgJAFgGAIQgwBBhKAOIhVBpQiBCehZCxQiVhNhrhmgAjQFtQAFAXAKAXIABAAQgRhVgMhcQABBGAMA9g");
	this.shape.setTransform(67.4,141.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,134.7,282.9);


(lib.Символ62 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,166.7).s().p("EgHpAhoQt9jLnmsFQnnsFDLt7QDMt9MFnnQMGnnN6DLQN9DMHnMFQHnMGjLN7QjMN9sGHmQohFXpdAAQj7AAkHg8g");
	this.shape.setTransform(221.3,221.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,442.6,442.6);


(lib.Символ61 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.krog, null, new cjs.Matrix2D(1,0,0,1,-203.4,-196)).s().p("AAGcvQkyAIj8hAIgCAAQgTgggrgQIgHACIgBgCQhIgIgoggIggAAIgggYIgQggQgugHgagZIhggYQABgYghAIQgrg+g1gqQiIhEhghcIgBgIQgFhAg6gYQgCgegeAGIgQggIgYgPIAAgBIgbgUIgFgFIgYhHIgQggIgYgIIgYgwIgRgFIgfhjQgEAAgDgBQgYgWgBgxQgbgSALguQgIAAgBgCQgKgjgFgjQgSgCgGgOIgBgIQgUhagjg2IAAjAIggg4IgEhZQAKh6AShrQgJkIBTjhIAOgXIAAgEIAIgMQgBgpAKgfQARgQALgUIALgEQA3hJBBhnIAQhAIAogYIAIgYQAEAAACgCQAQgLAKgTQBAg0AQhEIAggYIAIgIQAhAGgJgmQAAgEACgCQAegjAQgnIAYgQIAIgYIBwhAQAhgyAvgeQASg4AuggIBgggQAEAAACgCQAhgWApgYIAigdQAjgBAbgIQAIgCAIAAIAggwIBggIQAzgWAsgNQAFgBAEgEQAhABAXgZIAIgIIBAAAQDpgvDdAvQEJALDXB1IAgAAIAoAgIAgAAQA9AoBDAQIAIAAQBOBAB6BAIAgAAIBAAoIAIAYQBAAMAoA8IAYAIQgJAdAZgFIAIAIQAbA2AqAmQAKAJAJALIAYAIQAKAjAYAPQAGADAQgFIBQCYIAgAQQAzBgAlBYQARgBACARQABAIAEAIQAEAEACAFIADAEQAHADAIAAIAIBAIAQAQQAAAMAEALQAEAJAIAIIAIBYQA7DuADEKQACCXgICXQglBhgSCGQgBANgIAMIAAAQIgYCIIgQAgQgBAMgCAMQgEAegRAaIgQAJQgUANgEASIgIBAIgHAJQgPAcgSALQgBAPgGAKQgNAZgUAWIgYAIIgYAwIgIAgIgYAwQgEAEgFACQgYAJAJAhQgMAAgHAGIglAiIggAQQgNAYgTAAIggBAIgYAIQAAAIgEAFQgMAQgIATIhQBAIgQAgIhQAQIgYAgQg0AUgcAkIg4AQQAAAEgCADQgMAYgaAJIgIAYQhKAeg+AiQhmAPhaA5QgIAAgIgCQgggGAAAYIhgAAIgoAYQiyAKiqAGIgUgYgAF7VHQADAAAAAIIAAAAIA2AEIg6gNIABABgARBRBIAFgCIAKgZIgPAbgAR8QAIACgBIAAgBIgCACgA2NIPQAEAUAJAUIAAAAQgPhMgKhSQABA/ALA3gAhYznIgChpIgIg+IAEBPQhOhTASAFIABAAQAFABiDi0QiDA5joBgIiXA+IhnAqIBngTIDYgpQFFg7CeB3IAGBYgAJZ03IgLgQIgGgCIARASgAn/1FIgJgKIgCAAIALAKgAkQ5DQCnB7gCgXQgMh7AHg2QgNANiTBAg");
	this.shape.setTransform(183.7,186.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,367.5,372.8);


(lib.Символ58 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,0,0,0.09)"],[0,1],0,0,0,0,0,31.2).s().p("AjjK1QhfkfgBmWQABmVBfkeQBfkfCEgBQCFABBfEfQBfEeAAGVQAAGWhfEfQhfEeiFABQiEgBhfkeg");
	this.shape.setTransform(32.4,98);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,196);


(lib.Символ57 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.fonon, null, new cjs.Matrix2D(1,0,0,1,-400,-257)).s().p("A8bDzIAAnmMA42AAAIAAHmg");
	this.shape.setTransform(182,24.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,364,48.8);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.fonon, null, new cjs.Matrix2D(1,0,0,1,-542.1,-439)).s().p("A5HLuQgUhDAXhhIAYgYIAghQIAYgIQAAgIADgHQABgFAFgBQAHgDAIAAIAQgYIBQggIAYgYIgBg5IAAAAIgChYIAMgZQBOidANhSQATh9BlicIAEgGQBJg4BHguQABAkgEAkQgLBtgaBrIBABAIA4AYIAIAYQAIAAAHADIADADQAKAKAMAIIAoA+IAYAIIAIAYIAdAVIADAOIgDgOIADADQAIgfAMgeQAngMAPgsQAFgTADgeIAEghQAIgZAqgyQArg0ANgjQAahHBlh/IAKgMIACBNQADA/AqAhQASgQAPgQQBahdBtgzIAIgYIBIggQAHgLAJgJQAzgRBVgpQBLgjBVgsQB3gyAwgaIAXABQgBAKgOAHIgJAHIgIAHIgQAJQgEAMgIAIQibCRhhDDQggAfgOAnQgWBCgqA4IgHAuIAAABIgBABIgwA4IAAAHIgBAIIgNA3IAAAAIgGAgQgEAVAAATIA4g4IAIggQAdgsBJAGQBlAMBmADIgBAMIABgMIAVABIAUgUQAygWDOidQBdhGA5gvIA2gEIggCwQgtAogHA/IgMBfIAwBAIAwAAIARAPIgEgBIAEABQBSBMBVAVQgIgIgGgJQAhAZA3AgQA1AfBXAuIC4CwQB9B9CEB6g");
	this.shape.setTransform(161.8,75);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,323.6,150.1);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.krog, null, new cjs.Matrix2D(1,0,0,1,-203.4,-196)).s().p("AAGcvQkyAJj8hBIgCAAQgSgggsgPIgHABIgBgBQhIgIgoghIggAAIgggXIgQggQgugIgagZIhggXQABgZghAIQgrg9g1grQiIhEhghbIgBgIQgFhBg6gYQgCgdgeAFIgQgfIgYgQIAAAAIgbgVIgFgFIgYhHIgQgfIgYgIIgYgwIgRgGIgfhjQgEAAgDgBQgYgWgBgwQgbgTALgtQgIAAgBgCQgKgkgFgiQgSgDgGgOIgBgIQgUhagjg2IAAi/Iggg4IgEhZQAKh7AShrQgJkIBTjhIAOgXIAAgEIAIgMQAAgpAJgfQARgQALgUIALgDQA3hKBBhnIAQhAIAogXIAIgZQAEABACgCQAQgMAKgTQBAg0AQhEIAggYIAIgHQAhAGgJgnQAAgDACgDQAegjAQgnIAYgQIAIgXIBwhAQAhgzAvgdQASg5AugfIBgghQAEAAACgCQAhgWApgYIAigdQAjgBAbgHQAIgCAIAAIAggxIBggIQAzgVAsgOQAFgBAEgDQAhAAAXgZIAIgIIBAAAQDpgvDdAvQEJALDXB2IAgAAIAoAfIAgAAQA9AoBDAQIAIAAQBOBBB6BAIAgAAIBAAnIAIAZQBAALAoA9IAYAIQgJAdAZgGIAIAIQAbA2AqAmQAKAJAJAMIAYAHQAKAjAYAPQAGADAQgEIBQCYIAgAPQAzBhAlBYQARgCACASQABAHAEAIQAEAFACAEIADAFQAHACAIAAIAIBAIAQAQQAAAMAEALQAEAKAIAIIAIBXQA7DvADEJQACCXgICXQglBhgSCHQgBANgIAMIAAAPIgYCIIgQAgQgBAMgCAMQgEAegRAbIgQAJQgUAMgEASIgIBAQgEAFgDAEQgPAcgSAMQgBAPgGAKQgNAYgUAXIgYAIIgYAvIgIAhIgYAwQgEADgFACQgYAKAJAgQgMAAgHAHIglAiIggAPQgNAYgTAAIggBAIgYAIQAAAIgEAGQgMAQgIASIhQBBIgQAfIhQARIgYAfQg0AVgcAkIg4APQAAAFgCACQgMAYgaAKIgIAYQhKAdg+AjQhmAOhaA6QgIAAgIgDQgggGAAAYIhgAAIgoAYQiyAKiqAGIgUgYgAyAPHIAoAIQBNCcCUBiQAJAGAOAFQBjB0DFAcIAIAAQBYAjCAgMQAXABAZgBQATgGAGgNQADgEAMAAIAQghIAAhgIggg4QgngTgxgEQghgCABAZIABAZQAAAIAPAIQAPAAAOAFQADADAAAHQgBAUgRATQgGAGgQgEIgIAXQgYAEgLATQgBABgEAAIg4AAIgYgfIAAhpQAfgdAhgqQAHgJABgQQAjACAdgZICQAAQASAAAKAMQAEADAIAAQAFAfAcAYQADACAEAAQACA1AVAcIAJAOQAGAWAigGQAMABAMgBIAoApIA2AAIA4gYQgCgjAXgRQAHgFAEgHQAzgpBQgdIAlgKIAIgZQBPgYBpAIIBAAxQAgAbAAA9QABAXgBAZIgQAnIiwAAQABgiAZgHQANgGAJgJIgIhIIhogIIggAZIgYBAQANAWArAQQAEABAEAAIAIAYQAUACARAGQADAAAAAJIBwAIIAogZIAoAAQAmACgGgpIA+gVQAKgDAIgJQBaAHBOgmQAEghAcgYICQg4IAggfIAggIIAQgpQASgTAWgEIAAghIAwgYQgGgUAWgKIAIgBQBAhuBIhyQAAgsAHgrQABgBAIgBIAIg3QAEgJAGgDQAGgFAIAAQADgTAJgSQAEgHAIgDIAIiAIAQgQIgIi5IAggXIAIgYIAYgRQAji1g7i5IgYiYIgYgPQg0iphUiPIgYgJQiHkTjpilIggAAQgigUgkgQQgGgEgEgHQhPgkhcg3QgJgGgMAAIgQgXIhggpQg2AHgyAaQgPAXgMAPQgBABgEAAIgQCxQh/gjhxg1IAIg4QAXgSABgnIAQgPQgCgrATghQAIgPAPgGIhYgIIgYgQIjGAAQgvgFgJAdQgDAbAaAIQAJABAIAEIAIAYIAoAhIAQCQQhlALhjAkQiPhKhph1IiwAAIgYAPIgQApQgKAEgKAOQgEAFAAAIIgYAIQgLAmgaAPQgLAHgIAMQg+APg6AiIgIAXQgoAOgjAwQgBACgEAAIgIAxQgiAYgeAwIgQAXQhHAkghBNQg4AVgXAvQgBADgIABIgIAvIgYAZIgYBAIAAA3IgSA9IACgUIgYBQIgEATIgUAMQgNA9gRA0QgCAIAAAHQgWgFAFAVIABAJIAAEFQAIAKAGALQgCBJADBLIABAgIAJARQgFAtAEAxIAHhRIARAiQgBAPAFAPQAEAJAIAIQgFBmAQBSQAEAUAJAVIAYAIQAmA9AYBLQACAIAAAIQA/BiBFBoQAEAFAAAJIAGgBQAVAAAFAYgApIb3IgHgIIASAIg");
	this.shape.setTransform(203.4,196);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(19.7,9.6,367.5,372.8);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","rgba(0,0,0,0.09)"],[0,1],0.7,-55.3,-0.6,55.4).s().p("EhC0AGyIASv3MCFXACUIgSP3g");
	this.shape.setTransform(406.3,422.4);

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.fonon, null, new cjs.Matrix2D(1,0,0,1,-400,-257)).s().p("Eg+fAoJMAAAhQSMB8/AAAMAAABQSg");
	this.shape_1.setTransform(400,257);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.5,0,855.6,514);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,0,0,0.09)"],[0,1],0,0,0,0,0,3.6).s().p("AgYAUQgKgJAAgLQAAgLAKgIQALgIANgBQAOABAKAIQALAIAAALQAAALgLAJQgKAJgOgBQgNABgLgJg");
	this.shape.setTransform(3.5,2.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7,5.8);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AmFGLIAAsVIMLAAIAAMVgAlGFHIKFAAIAAqNIqFAAg");
	this.shape.setTransform(39,39.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,79);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFCC","rgba(255,255,255,0)"],[0,1],-75.6,0,79.9,0).s().p("AryBeQhXhXBXhlIYRAAIAAC8g");
	this.shape.setTransform(75.6,9.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.3,0,159.9,19);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-31.6,-42)).s().p("AibCzIgGgDIAfgMIgBgEQgEgGgGgDIgDgDIgQgJQAXgGAXgXQAKgJAGgMQAFgJADgLIgBgEQgGgGgJABQgkgFgIgQQAOgnAxgXQAXgMAJgTIAKgFIAeAAIAdgWIgCABQgEABgFAAQgKAAgLgDQgCgCAAgFQAAgFADgEQAnhMAjhPQAaAQAeANQgIAFgFAHQgFAGgCAHQgmAGgXAXIgOALIBGAZIAFAoIgPAUQAuAHAlgKQgSA1gmAoQgDADAAAFQAIAHAHAKIAIANQgyAWgrAqQgHAGgHAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQhdAxhGBRg");
	this.shape.setTransform(16.2,25.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,51);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-29,-65.7)).s().p("Ah2CnQAAgFACgEIAHgLIABgFIAAhGQgIAAgGADQgEACgDAFQgCADgDACIgJAFIAAhxIgPgPIgFgKIAAgCIAdgLIAGADIAFBJQBFhPBegxQAAABAAAAQAAABAAAAQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQAHgFAGgGQArgqAzgWIAFALQACAEABAGIAEAdQgFAYgZAQIgOALIgKAJIAxAPQAEAKgIACIgCACIgJALIgFAFIAAAUIgKANIAAASQgNAagaAQQgDAIgFAFQgrA5g4ApIhlAEIAAgPg");
	this.shape.setTransform(16.5,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,36.6);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-53.5,-50.9)).s().p("AgxCwIgHAOQgPAcgIgNIgGhaQgQASgHAXIgGASIAAgSIAKgPIAAgUIAEgGIAJgLIACgCQAIgCgEgKIgxgOIALgKIANgKQAZgRAGgYIgFgbQAAgFgCgEQgMgbgQgPQAAgEACgEQAmgqASg0QAvgNAggoIAZAAIgZAkIA3AAIAKAEQgBAcgXARIgVAPIgEAUQArASA1ABQgKAXgGAYIgFgUQAAgBgFAAQgZBEgaA3IgEAUIAYAVIAFAMIgBAAQgEgCgEAAQgIARAIAgQAIAbgSASIhWAEQgMgXgPgUg");
	this.shape.setTransform(13.6,21.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,43.8);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-49.3,-20.9)).s().p("AhhCIIAPgUIgFgoIhGgZIAOgLQAXgYAmgFQADgIAEgEQAFgGAIgFQgegOgagQIAbhCQBDgEA8gZIB6AJQgfA2gjA1IgBAEQADAJARgEQAMgDAMgEQAGgBAFgCQgWA1ghAyIgZAAQg0A5hLAAQgRAAgTgCg");
	this.shape.setTransform(15.8,13.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,27.8);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-28,-20.5)).s().p("AghCRIhjgtQASgUAagPQgbgSgNgWIAZgFQADgPgmgiQAiAFAagZIgFgZIAEgBQAegUAkgJIgggSIAbgbIAKAAQAFAAADgBQACgEADgFICGAGQgzCMhHCBQgCADAAAGQAAAFABABQALADANABQAFgBAEgBIACAAIgfAWIgcAAIgKAFg");
	this.shape.setTransform(14,16);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,32);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-72.4,-21.4)).s().p("AiUDDIAEgUIAUgPQAYgRABgcIgKgFIg3AAQAzhBAehJQgFADgGABQgMAEgNACQgQAFgDgKIABgEQAqhAAlhDIBMg3IB0AAQARAWAOAXIAAEjIgDACIgDAAIgGAHQgsAfgyAPQgFACgEAAQgbgSgHgfQgBgGgGgFQgmAqgXA0Qg1gBgrgSg");
	this.shape.setTransform(16.5,21.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,42.9);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-73.9,-53)).s().p("Ah3BmIgEgMIgagVIAGgUQAYg1AZhGQAFAAABABIAEAUQAWhQA6g9QAEAFABAGQAHAfAbATQAFAAAEgDQA4gRAxgmIAAF9Qg/gigyg1IgMgNIgUgPQgNAqARBEQABAEABAFQg5gmhIg2g");
	this.shape.setTransform(15,19.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,30,39);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-70.1,-76.3)).s().p("AAYCdQgKgDgLgCQgsgJgogRQgBgwgSg4Ig3AjQgKgygWgoIBXgDQASgTgIgbQgIgfAIgSQAFAAADACQBJA2A5AnQAAgFgBgFQgUhEAQgqIAUAPIALAOQAzA0A/AiIAADGg");
	this.shape.setTransform(18.9,15.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.7,31.6);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-42.5,-77.3)).s().p("Ai7CTIgFgZQAbgaAUggQACgCADAAIgMAAQA6gpArg2QAFgGADgHQAjgWAJgmQAHgXAQgRIAFBaQAJANAPgdIAGgOQAtA6APBLIA3gjQAYBKgGA9g");
	this.shape.setTransform(19.4,14.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.8,29.6);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-14.2,-76.4)).s().p("AhwCcQgQgNgMgQIAAjWIAFgKIAFgDIAAAHIAtgKIAPgUQAFgCAFgBIAEgDIACgEIAEgJIAjgNIAAACIAFALIANAPIAAByIAJgFQADgCACgDQADgEAEgDQAGgDAIAAIAABFIgBAEIgHAMQgCADAAAGIAAAOIBxgEQgDAAgCACQgeAwgwAjg");
	this.shape.setTransform(14.2,15.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28.4,31.3);


(lib.Символ28 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-13.2,-48.8)).s().p("Ah+gfIBFhfQAOAfARAdQgChFApguIBjAtIAPAPQgJASgXAMQgxAagOAnQAJAQAjAEQAJAAAGAGIABACQgGAXgSASQgXAWgXAHIAQAJIADACQAGAEAEAGIABAEIhdAjIgEAKIgCAEIgDACQgGABgFADIgPAUIgtAKg");
	this.shape.setTransform(12.8,18.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,36.5);


(lib.Символ27 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-14.4,-21.5)).s().p("Ah2iBQAkgqAsghICeBaQgjAJgeAUIgFABIAFAZQgZAZghgFQAlAkgEANIgZAEQAOAYAaARQhVA0ACBiQhbiXALi3g");
	this.shape.setTransform(12,20.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24.1,41);


(lib.Символ24 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-134,-46)).s().p("AnBHMIAAuXIODAAIAAOXg");
	this.shape.setTransform(45,46);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90.1,92.1);


(lib.Символ22 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-44.5,-138.5)).s().p("Am7HQIAAufIN3AAIAAOfg");
	this.shape.setTransform(44.5,46.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,93);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kamni, null, new cjs.Matrix2D(1,0,0,1,-44.5,-46)).s().p("Am7HMIAAuXIN3AAIAAOXg");
	this.shape.setTransform(44.5,46);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,89,92.1);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0.09)"],[0,1],0,0,0,0,0,19.4).s().p("AiGCHQg5g4AAhPQAAhOA5g4QA4g5BOAAQBPAAA4A5QA5A4AABOQAABPg5A4Qg4A5hPAAQhOAAg4g5g");
	this.shape.setTransform(19.3,19.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,38.5,38.5);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bread();
	this.instance.setTransform(-2.2,-0.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-0.2,36,23);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nog2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,71);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.nog();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,77);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryk3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45,81);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryk2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44,43);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryk1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,28,40);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg08AatMAAAg1ZMBp5AAAMAAAA1Zg");
	this.shape.setTransform(339,171);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wlen();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,52);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryk5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,19,47);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.wer();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36,39);


(lib.Символ4 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.ryk4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58,57);


(lib.Символ2 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.monet();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42,50);


(lib.Символ67 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ46();
	this.instance.setTransform(187.4,186.4,1,1,0,0,0,207,196);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,367.5,372.8);


(lib.Символ63 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ64();
	this.instance.setTransform(285.7,93.2,1,1,130.7,0,0,67.4,141.5);

	this.instance_1 = new lib.Символ64();
	this.instance_1.setTransform(179.5,74.5,1,1,87.1,0,0,67.3,141.5);

	this.instance_2 = new lib.Символ64();
	this.instance_2.setTransform(211.2,352.6,1,1,-84.7,0,0,67.3,141.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.krog, null, new cjs.Matrix2D(1.12,0,0,1.12,-227.8,-242)).s().p("A3iTTIgBgIQgFhJhCgaQgCgigiAHIgSgkIgagRIgBgBIgegWIgFgGIgbhPIgSgkIgbgJIgbg2IgTgGIgjhuQgEAAgDgCQgbgZgCg2QgdgUAMg0QgJAAgBgCQgLgogGgmQgUgDgHgPIgBgJQgWhmgog8IAAjXIgkg+IgEhiQALiJAUh6QgJkoBdj8IAPgZIAAgFIAJgNQgBgvALgiIAIgIQAOgPAJgRIAMgFQA/hSBIhzIAShIIAtgaIAIgbQAFAAADgDQARgMALgVIAJgHQCsB8C3B5QAiAWAhATQCIBNCPAlQEeBIEig1QEdgzEVgrQDJgdDLAOQETAHEFgnIAAhAIAIAgQAWAJAggKQEIhQDdifIAhBAIAkASQA5BrApBjQATgCADAUQABAJAEAIQAFAFACAGIAEAEQAHADAJAAIAJBIIASASQAAANAFAMQAEALAJAJIAJBiQBCELAEEqQACCrgJCnQgqBtgUCWQgBAPgJANIAAASIgbCZIgSAjIgDAbQgFAhgTAeQgJAEgIAGQgXAOgFAVIgJBHQgEAFgDAFQgRAggUAMQgCARgGALQgOAcgXAZIgbAJIgbA2IgJAjIgbA2QgEAFgGABQgbALAKAlQgNAAgHAHIgqAmIgkASQgOAagWABIgkBHIgbAJQAAAJgEAGQgOASgJAVIgHAGQjEiWi2inIgIggQgMAAgIgGQgPgJgVACQgIABgIgDQgEgBgEAAIgIAAIggAAQgSACACAWQgIAAgHgDQg4gXgcg1QgJgRgNgPQghglgWgsIgYAAQh8gUh8gMIgYgQQiQgBiQADQmmAGmlA7IgjAFIgYAYQgSASgUAJQgKAFgGAJQgvBAhLAPIhVBoQiBCehYCxQiXhNhshmgATEPjIAFgBIAMgdIgRAegAUGOaIACAAIAAgBIgCABgA44FuQAEAXAKAWIABAAQgRhVgMhcQACBHAMA9g");
	this.shape.setTransform(205.8,231.3);

	this.addChild(this.shape,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-50.2,436.8,482.7);


(lib.Символ59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ58();
	this.instance.setTransform(73.8,102,1,1,27.2,0,0,32.5,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:32.4,regY:98.1,scaleX:1.97,x:587.3,y:145.3},49).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,147.4,203.9);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8XDsIAAnXMA4vAAAIAAHXg");
	mask.setTransform(186.9,31.8);

	// Слой 3
	this.instance = new lib.Символ59();
	this.instance.setTransform(-40.7,-1.8,1,1,0,0,0,73.7,102);

	this.instance.mask = mask;

	// Слой 1
	this.instance_1 = new lib.butik();
	this.instance_1.setTransform(0,0,0.909,0.909);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,377.1,63.6);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AKXB4QgKgEgIgIQgOgQAAgeIAAh8QAAgdAOgQQAIgIAKgEQALgDAOAAQAcAAAOAPQAHAIAEALQAEALAAAPIAAAYIgkAAIAAgaQAAgNgGgGQgFgFgJAAQgJAAgGAFQgFAGAAANIAACCQAAANAFAFQAGAFAJAAQAJAAAFgFQAGgFAAgNIAAgjIAkAAIAAAgQAAAPgEALQgEALgHAIQgOAPgcAAQgOAAgLgDgADxB4QgLgEgIgIQgPgQAAgeIAAh8QAAgdAPgQQAIgIALgEQAKgDAOAAQAcAAAPAPQAIAIAEALQADALAAAPIAAB8QAAAPgDAMQgEALgIAIQgHAIgLAEQgLADgOAAQgOAAgKgDgAD7hTQgGAGAAANIAACBQAAANAGAGQAFAFAJAAQAJAAAGgFQAFgGAAgNIAAiBQAAgNgFgGQgGgFgJAAQgJAAgFAFgAuMB4QgLgEgHgIQgPgQAAgeIAAh8QAAgdAPgQQAHgIALgEQALgDAOAAQAcAAAPAPQAHAIAEALQAEALAAAPIAAB8QAAAPgEAMQgEALgHAIQgIAIgKAEQgLADgOAAQgOAAgLgDgAuChTQgFAGAAANIAACBQAAANAFAGQAGAFAJAAQAJAAAFgFQAGgGAAgNIAAiBQAAgNgGgGQgFgFgJAAQgJAAgGAFgAHwB5IAAgjIAJABIAJgBQAFgBADgDQADgCACgGQABgFgBgIIg0i1IAmAAIAmCNIAgiNIAmAAIgvCxQgGAUgGAMQgGANgHAHQgHAHgJADQgKACgNABgAp7B5IAAgjIAKABIAJgBQAEgBADgDQAEgCABgGQACgFgCgIIg0i1IAmAAIAnCNIAfiNIAmAAIguCxQgGAUgGAMQgGANgHAHQgIAHgJADQgJACgNABgAPFB5IAAgeQAAgRAGgOQAFgNAJgMIAkgoQAJgLAFgNQAGgOAAgRQAAgQgFgGQgGgGgJAAQgJAAgFAFQgGAGAAANIAAAaIgkAAIAAgYQAAgdAPgQQAHgIAKgEQALgDAOAAQAcAAAPAPQAHAIADALQAEALAAAPQAAAUgGAQQgGAQgJALQgJANgLALIgSAWQgJAJgEAKQgFAJABALIBIAAIAAAjgAOOB5IgfhgIggBgIgjAAIAqh7Igoh2IAoAAIAdBaIAdhaIAkAAIgoB2IAqB7gAGlB5IAAhoIgrAAIAABoIgnAAIAAjxIAnAAIAABoIArAAIAAhoIAnAAIAADxgABJB5IAAjxIBlAAIAAAjIg+AAIAABAIAXAAQAcAAAOAQQAOANAAAdIAAAYQAAAegOAPQgHAHgKAEQgLAEgOAAgABwBWIAXAAQAJABAEgGQAFgFAAgNIAAgdQAAgNgFgEQgEgGgJABIgXAAgAhrB5IAAjxIAnAAIAABjIAXAAQAcAAAOAQQAMANAAAdIAAAYQAAAegMAPQgHAHgKAEQgLAEgOAAgAhEBWIAXAAQAJABAEgGQAFgFAAgNIAAgdQAAgNgFgEQgEgGgJABIgXAAgAjFB5IAAjOIgnAAIAAgjIB2AAIAAAjIgoAAIAADOgAkcB5IAAiHIg7CHIgcAAIAAjxIAiAAIAACPIA8iPIAcAAIAADxgAmqB5IAAheIgKADIgLABQgOAAgLgFQgLgDgHgIQgOgPAAgdIAAhbIAmAAIAABeQAAAOAFAEQAGAGAJAAQAJAAAFgFQAFgEABgMIAAhhIAmAAIAADxgArEB5IAAjOIggAAIAABdQAAAdgDAWQgDAVgHAOQgIAOgNAGQgOAHgUAAIgEAAIAAgjIAEAAQALABAGgHQAGgEAEgLQADgKACgPIABigIBpAAIAADxgAvlB5IAAjOIgrAAIAADOIgmAAIAAjxIB4AAIAADxg");
	this.shape.setTransform(189.6,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AKXB4QgKgEgIgIQgOgQAAgeIAAh8QAAgdAOgQQAIgIAKgDQALgFAOAAQAcAAAOAQQAHAIAEALQAEAMAAAOIAAAYIgkAAIAAgaQAAgNgGgFQgFgGgJAAQgJAAgGAGQgFAFAAANIAACBQAAAOAFAFQAGAFAJAAQAJAAAFgFQAGgFAAgOIAAgiIAkAAIAAAgQAAAPgEALQgEALgHAIQgOAQgcAAQgOgBgLgDgADxB4QgLgEgIgIQgPgQAAgeIAAh8QAAgdAPgQQAIgIALgDQAKgFAOAAQAcAAAPAQQAIAIAEALQADAMAAAOIAAB8QAAAPgDAMQgEALgIAIQgHAIgLAEQgLADgOABQgOgBgKgDgAD7hSQgGAFAAANIAACBQAAAOAGAEQAFAGAJAAQAJAAAGgGQAFgEAAgOIAAiBQAAgNgFgFQgGgGgJAAQgJAAgFAGgAuMB4QgLgEgHgIQgPgQAAgeIAAh8QAAgdAPgQQAHgIALgDQALgFAOAAQAcAAAPAQQAHAIAEALQAEAMAAAOIAAB8QAAAPgEAMQgEALgHAIQgIAIgKAEQgLADgOABQgOgBgLgDgAuChSQgFAFAAANIAACBQAAAOAFAEQAGAGAJAAQAJAAAFgGQAGgEAAgOIAAiBQAAgNgGgFQgFgGgJAAQgJAAgGAGgAHwB5IAAgiIAJAAIAJgBQAFgBADgDQADgDACgFQABgEgBgJIg0i1IAmAAIAmCMIAgiMIAmAAIgvCxQgGAUgGAMQgGANgHAHQgHAHgJADQgKADgNAAgAp7B5IAAgiIAKAAIAJgBQAEgBADgDQAEgDABgFQACgEgCgJIg0i1IAmAAIAnCMIAfiMIAmAAIguCxQgGAUgGAMQgGANgHAHQgIAHgJADQgJADgNAAgAPFB5IAAgeQAAgSAGgNQAFgOAJgLIAkgoQAJgLAFgNQAGgNAAgSQAAgQgFgGQgGgGgJAAQgJAAgFAGQgGAFAAANIAAAaIgkAAIAAgYQAAgdAPgQQAHgIAKgDQALgFAOAAQAcAAAPAQQAHAIADALQAEAMAAAOQAAAUgGAQQgGAQgJALQgJANgLALIgSAVQgJAKgEAKQgFAKABALIBIAAIAAAigAOOB5IgfhgIggBgIgjAAIAqh7Igoh2IAoAAIAdBaIAdhaIAkAAIgoB2IAqB7gAGlB5IAAhoIgrAAIAABoIgnAAIAAjxIAnAAIAABoIArAAIAAhoIAnAAIAADxgABJB5IAAjxIBlAAIAAAjIg+AAIAABAIAXAAQAcAAAOAPQAOANAAAeIAAAYQAAAegOAPQgHAHgKAEQgLAEgOAAgABwBXIAXAAQAJAAAEgGQAFgEAAgOIAAgcQAAgOgFgEQgEgGgJAAIgXAAgAhrB5IAAjxIAnAAIAABjIAXAAQAcAAAOAPQAMANAAAeIAAAYQAAAegMAPQgHAHgKAEQgLAEgOAAgAhEBXIAXAAQAJAAAEgGQAFgEAAgOIAAgcQAAgOgFgEQgEgGgJAAIgXAAgAjFB5IAAjOIgnAAIAAgjIB2AAIAAAjIgoAAIAADOgAkcB5IAAiIIg7CIIgcAAIAAjxIAiAAIAACQIA8iQIAcAAIAADxgAmqB5IAAheIgKADIgLABQgOgBgLgEQgLgEgHgHQgOgPAAgcIAAhcIAmAAIAABeQAAAOAFAEQAGAGAJAAQAJAAAFgFQAFgFABgLIAAhhIAmAAIAADxgArEB5IAAjOIggAAIAABdQAAAdgDAWQgDAVgHAOQgIAOgNAHQgOAGgUAAIgEAAIAAgiIAEAAQALAAAGgHQAGgEAEgLQADgKACgPIABigIBpAAIAADxgAvlB5IAAjOIgrAAIAADOIgmAAIAAjxIB4AAIAADxg");
	this.shape_1.setTransform(189.6,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Слой 2
	this.instance = new lib.Символ57();
	this.instance.setTransform(187.6,31.6,1,1,0,0,0,182,24.4);
	this.instance.shadow = new cjs.Shadow("rgba(255,0,0,1)",0,0,13);
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ56();
	this.instance_1.setTransform(188.5,31.8,1,1,0,0,0,188.5,31.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-103.8,491.5,203.9);


(lib.Символ43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ44();
	this.instance.setTransform(3.5,2.9,1,1,0,0,0,3.5,2.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.64,scaleY:0.64},9).to({scaleX:1,scaleY:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7,5.8);


(lib.Символ40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_39 = function() {
		/* stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(39).call(this.frame_39).wait(1));

	// Слой 6
	this.text = new cjs.Text("Блики по контуру", "38px 'HeliosCompressedC'", "#FFCC00");
	this.text.lineHeight = 40;
	this.text.setTransform(-70,-403.1);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},39).wait(1));

	// Слой 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AmFGLIAAsVIMLAAIAAMVgAlGFHIKFAAIAAqNIqFAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AmFGLIAAsVIMLAAIAAMVgAlGFHIKFAAIAAqNIqFAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39,y:39.5}).wait(38).to({graphics:mask_graphics_38,x:39,y:39.5}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Слой 7
	this.instance = new lib.Символ42();
	this.instance.setTransform(39,39.5,1,1,0,0,0,39,39.5);
	this.instance.alpha = 0;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},4).to({alpha:0.461},5).to({alpha:1},5).to({alpha:0.461},5).to({alpha:1},5).to({alpha:0.461},5).to({alpha:1},5).to({alpha:0},4).to({_off:true},1).wait(1));

	// Слой 5
	this.instance_1 = new lib.Символ41();
	this.instance_1.setTransform(80.4,166.7,1,1,90,0,0,77.8,9.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).to({x:81.4,y:1.2},9).to({_off:true},1).wait(1));

	// Слой 4
	this.instance_2 = new lib.Символ41();
	this.instance_2.setTransform(-88.7,79.5,1,1,180,0,0,77.8,9.5);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:77.7,y:81.8},10).wait(9).to({_off:true},1).wait(1));

	// Слой 3
	this.instance_3 = new lib.Символ41();
	this.instance_3.setTransform(-1.2,-88,1,1,-90,0,0,77.8,9.5);
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({_off:false},0).to({x:-3.2,y:71.7},9).wait(19).to({_off:true},1).wait(1));

	// Слой 2
	this.instance_4 = new lib.Символ41();
	this.instance_4.setTransform(162.9,-2.5,1,1,0,0,0,77.8,9.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:20.3,y:-2.7},9).wait(29).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-403.1,320.7,482.2);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ62();
	this.instance.setTransform(239.9,197.8,1,1,0,0,0,221.3,221.2);
	this.instance.alpha = 0.289;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(18.6,-23.4,442.6,442.6);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Слой 23
	this.text = new cjs.Text("Взрыв", "38px 'HeliosCompressedC'", "#FFCC00");
	this.text.lineHeight = 40;
	this.text.setTransform(424,-217.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AjWDWIAAmsIGsAAIAAGsg");
	this.shape.setTransform(392.6,-198.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).to({state:[]},89).wait(1));

	// Слой 22
	this.instance = new lib.Символ40();
	this.instance.setTransform(47.1,49.3,1,1,0,0,0,39,39.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},64).wait(26));

	// Слой 20
	this.instance_1 = new lib.Символ39();
	this.instance_1.setTransform(49.2,53,0.232,0.232,0,0,0,256,256);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(66).to({_off:false},0).to({regX:256.2,regY:256.1,scaleX:0.28,scaleY:0.28,rotation:-12.8,x:49.3,y:53.1,alpha:0.5},6).to({regX:256,scaleX:0.33,scaleY:0.33,rotation:-26,y:53,alpha:0},6).wait(12));

	// Символ 38
	this.instance_2 = new lib.Символ38();
	this.instance_2.setTransform(31.7,42,1,1,0,0,0,16.2,25.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({regY:25.5,x:33.2,y:40.6},0).wait(1).to({regY:25.4,x:33.7,y:40},0).wait(1).to({regY:25.5,y:41.6},0).wait(1).to({regY:25.4,y:42},0).wait(1).to({regY:25.5,y:40.6},0).wait(1).to({regY:25.4,y:40},0).wait(1).to({regY:25.5,y:41.6},0).wait(1).to({regY:25.4,y:42},0).wait(1).to({regY:25.5,x:30.7,y:40.6},0).wait(1).to({regY:25.4,x:29.7,y:40},0).wait(1).to({regY:25.5,x:31.2,y:43.1},0).wait(1).to({regY:25.4,x:31.7,y:44},0).wait(1).to({regY:25.5,y:42.9},0).wait(1).to({y:42.3},0).wait(1).to({regY:25.4,y:42},0).wait(1).to({regY:25.5,scaleX:0.95,scaleY:0.95,rotation:-5.5,x:27.5,y:45.8,alpha:0.862},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-10.7,x:23.6,y:49.4,alpha:0.735},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-15.4,x:20,y:52.6,alpha:0.617},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-19.7,x:16.8,y:55.5,alpha:0.51},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-23.6,x:13.8,y:58.2,alpha:0.413},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-27.1,x:11.2,y:60.6,alpha:0.327},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-30.2,x:8.9,y:62.7,alpha:0.25},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:-32.8,x:6.8,y:64.5,alpha:0.184},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-35.1,x:5.1,y:66,alpha:0.128},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-36.9,x:3.7,y:67.3,alpha:0.082},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-38.4,x:2.6,y:68.3,alpha:0.046},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-39.4,x:1.9,y:68.9,alpha:0.02},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-40,x:1.4,y:69.4,alpha:0.005},0).wait(1).to({regY:25.4,scaleX:0.63,scaleY:0.63,rotation:-40.2,x:1.2,y:69.5,alpha:0},0).wait(12));

	// Символ 37
	this.instance_3 = new lib.Символ37();
	this.instance_3.setTransform(28.8,65,1,1,0,0,0,16.4,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(50).to({regX:16.5,regY:18.3,x:30.4,y:63.6},0).wait(1).to({regX:16.4,regY:18.2,x:30.8,y:63},0).wait(1).to({regX:16.5,regY:18.3,x:30.9,y:64.6},0).wait(1).to({regX:16.4,regY:18.2,x:30.8,y:65},0).wait(1).to({regX:16.5,regY:18.3,x:30.9,y:63.6},0).wait(1).to({regX:16.4,regY:18.2,x:30.8,y:63},0).wait(1).to({regX:16.5,regY:18.3,x:30.9,y:64.6},0).wait(1).to({regX:16.4,regY:18.2,x:30.8,y:65},0).wait(1).to({regX:16.5,regY:18.3,x:27.9,y:63.6},0).wait(1).to({regX:16.4,regY:18.2,x:26.8,y:63},0).wait(1).to({regX:16.5,regY:18.3,x:28.4,y:66.1},0).wait(1).to({regX:16.4,regY:18.2,x:28.8,y:67},0).wait(1).to({regX:16.5,regY:18.3,x:28.9,y:65.9},0).wait(1).to({y:65.3},0).wait(1).to({regX:16.4,regY:18.2,x:28.8,y:65},0).wait(1).to({regX:16.5,regY:18.3,scaleX:0.91,scaleY:0.91,rotation:-13.1,x:25.6,y:71.7,alpha:0.862},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-25.2,x:22.7,y:77.8,alpha:0.735},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-36.4,x:19.9,y:83.5,alpha:0.617},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-46.6,x:17.4,y:88.7,alpha:0.51},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-55.8,x:15.1,y:93.3,alpha:0.413},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-64,x:13.2,y:97.4,alpha:0.327},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:-71.3,x:11.4,y:101.2,alpha:0.25},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-77.6,x:9.8,y:104.4,alpha:0.184},0).wait(1).to({scaleX:0.42,scaleY:0.42,rotation:-82.9,x:8.5,y:107.1,alpha:0.128},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-87.3,x:7.4,y:109.3,alpha:0.082},0).wait(1).to({scaleX:0.37,scaleY:0.37,rotation:-90.7,x:6.7,y:111,alpha:0.046},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-93.1,x:6.1,y:112.2,alpha:0.02},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-94.6,x:5.7,y:113,alpha:0.005},0).wait(1).to({regX:16.6,regY:18.2,scaleX:0.33,scaleY:0.33,rotation:-95.1,x:5.5,y:113.2,alpha:0},0).wait(12));

	// Символ 36
	this.instance_4 = new lib.Символ36();
	this.instance_4.setTransform(52.5,50.8,1,1,0,0,0,13.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(50).to({x:54,y:49.3},0).wait(1).to({x:54.5,y:48.8},0).wait(1).to({y:50.3},0).wait(1).to({y:50.8},0).wait(1).to({y:49.3},0).wait(1).to({y:48.8},0).wait(1).to({y:50.3},0).wait(1).to({y:50.8},0).wait(1).to({x:51.5,y:49.3},0).wait(1).to({x:50.5,y:48.8},0).wait(1).to({x:52,y:51.8},0).wait(1).to({x:52.5,y:52.8},0).wait(1).to({y:51.6},0).wait(1).to({y:51},0).wait(1).to({y:50.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-10.8,x:55.5,y:45.9,alpha:0.862},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-20.9,x:58.3,y:41.5,alpha:0.735},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-30.1,x:60.8,y:37.4,alpha:0.617},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-38.6,x:63.2,y:33.7,alpha:0.51},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-46.2,x:65.3,y:30.3,alpha:0.413},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-53,x:67.2,y:27.3,alpha:0.327},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-59.1,x:68.9,y:24.6,alpha:0.25},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-64.3,x:70.3,y:22.3,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:-68.7,x:71.5,y:20.3,alpha:0.128},0).wait(1).to({scaleX:0.49,scaleY:0.49,rotation:-72.3,x:72.5,y:18.7,alpha:0.082},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-75.1,x:73.3,y:17.5,alpha:0.046},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-77.1,x:73.9,y:16.6,alpha:0.02},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-78.3,x:74.2,y:16.1,alpha:0.005},0).wait(1).to({regX:13.5,regY:22,scaleX:0.45,scaleY:0.45,rotation:-78.7,x:74.4,y:15.9,alpha:0},0).wait(12));

	// Символ 35
	this.instance_5 = new lib.Символ35();
	this.instance_5.setTransform(49.5,20.6,1,1,0,0,0,15.8,13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(50).to({x:51,y:19.1},0).wait(1).to({x:51.5,y:18.6},0).wait(1).to({y:20.1},0).wait(1).to({y:20.6},0).wait(1).to({y:19.1},0).wait(1).to({y:18.6},0).wait(1).to({y:20.1},0).wait(1).to({y:20.6},0).wait(1).to({x:48.5,y:19.1},0).wait(1).to({x:47.5,y:18.6},0).wait(1).to({x:49,y:21.6},0).wait(1).to({x:49.5,y:22.6},0).wait(1).to({y:21.5},0).wait(1).to({y:20.8},0).wait(1).to({y:20.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:8.3,x:48.9,y:15,alpha:0.862},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:16,x:48.3,y:9.9,alpha:0.735},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:23,x:47.8,y:5.2,alpha:0.617},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:29.5,x:47.3,y:0.8,alpha:0.51},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:35.3,x:46.8,y:-3.2,alpha:0.413},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:40.5,x:46.4,y:-6.6,alpha:0.327},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:45.2,x:46,y:-9.7,alpha:0.25},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:49.1,x:45.8,y:-12.4,alpha:0.184},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:52.5,x:45.5,y:-14.7,alpha:0.128},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:55.3,x:45.3,y:-16.6,alpha:0.082},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:57.4,x:45.1,y:-18,alpha:0.046},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:59,x:45,y:-19,alpha:0.02},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:59.9,x:44.9,y:-19.6,alpha:0.005},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:60.2,y:-19.9,alpha:0},0).wait(12));

	// Символ 34
	this.instance_6 = new lib.Символ34();
	this.instance_6.setTransform(28.4,20.2,1,1,0,0,0,14,16);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(50).to({x:29.9,y:18.7},0).wait(1).to({x:30.4,y:18.2},0).wait(1).to({y:19.7},0).wait(1).to({y:20.2},0).wait(1).to({y:18.7},0).wait(1).to({y:18.2},0).wait(1).to({y:19.7},0).wait(1).to({y:20.2},0).wait(1).to({x:27.4,y:18.7},0).wait(1).to({x:26.4,y:18.2},0).wait(1).to({x:27.9,y:21.2},0).wait(1).to({x:28.4,y:22.2},0).wait(1).to({y:21.1},0).wait(1).to({y:20.4},0).wait(1).to({y:20.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-8.4,x:24.9,y:19.3,alpha:0.862},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-16.1,x:21.6,y:18.5,alpha:0.735},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-23.2,x:18.7,y:17.8,alpha:0.617},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-29.7,x:15.9,y:17.1,alpha:0.51},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:-35.6,x:13.5,y:16.5,alpha:0.413},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-40.9,x:11.4,y:15.9,alpha:0.327},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-45.5,x:9.4,y:15.4,alpha:0.25},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-49.6,x:7.7,y:15,alpha:0.184},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-53,x:6.3,y:14.7,alpha:0.128},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-55.8,x:5.1,y:14.4,alpha:0.082},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-57.9,x:4.2,y:14.1,alpha:0.046},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-59.5,x:3.6,y:13.9,alpha:0.02},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-60.4,x:3.2,alpha:0.005},0).wait(1).to({regX:13.8,regY:16.1,scaleX:0.57,scaleY:0.57,rotation:-60.7,x:3,alpha:0},0).wait(12));

	// Символ 33
	this.instance_7 = new lib.Символ33();
	this.instance_7.setTransform(71.4,20.9,1,1,0,0,0,16.5,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50).to({x:72.9,y:19.4},0).wait(1).to({x:73.4,y:18.9},0).wait(1).to({y:20.4},0).wait(1).to({y:20.9},0).wait(1).to({y:19.4},0).wait(1).to({y:18.9},0).wait(1).to({y:20.4},0).wait(1).to({y:20.9},0).wait(1).to({x:70.4,y:19.4},0).wait(1).to({x:69.4,y:18.9},0).wait(1).to({x:70.9,y:21.9},0).wait(1).to({x:71.4,y:22.9},0).wait(1).to({y:21.8},0).wait(1).to({y:21.2},0).wait(1).to({y:20.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:6.2,x:76.9,y:15.6,alpha:0.862},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:12,x:82,y:10.8,alpha:0.735},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:17.3,x:86.7,y:6.2,alpha:0.617},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:22.1,x:91,y:2.1,alpha:0.51},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:26.5,x:94.8,y:-1.7,alpha:0.413},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:30.4,x:98.3,y:-5,alpha:0.327},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:33.9,x:101.4,y:-7.9,alpha:0.25},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:36.9,x:104,y:-10.5,alpha:0.184},0).wait(1).to({scaleX:0.52,scaleY:0.52,rotation:39.4,x:106.3,y:-12.6,alpha:0.128},0).wait(1).to({scaleX:0.5,scaleY:0.5,rotation:41.5,x:108,y:-14.4,alpha:0.082},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:43.1,x:109.5,y:-15.8,alpha:0.046},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:44.3,x:110.5,y:-16.8,alpha:0.02},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:45,x:111.2,y:-17.4,alpha:0.005},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:45.2,x:111.4,y:-17.6,alpha:0},0).wait(12));

	// Символ 32
	this.instance_8 = new lib.Символ32();
	this.instance_8.setTransform(72.9,52.5,1,1,0,0,0,15,19.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(50).to({x:74.4,y:51},0).wait(1).to({x:74.9,y:50.5},0).wait(1).to({y:52},0).wait(1).to({y:52.5},0).wait(1).to({y:51},0).wait(1).to({y:50.5},0).wait(1).to({y:52},0).wait(1).to({y:52.5},0).wait(1).to({x:71.9,y:51},0).wait(1).to({x:70.9,y:50.5},0).wait(1).to({x:72.4,y:53.5},0).wait(1).to({x:72.9,y:54.5},0).wait(1).to({y:53.4},0).wait(1).to({y:52.7},0).wait(1).to({y:52.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-8.4,x:79.4,y:52.1,alpha:0.862},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-16.2,x:85.4,y:51.7,alpha:0.735},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-23.3,x:91,y:51.3,alpha:0.617},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-29.9,x:96,y:51,alpha:0.51},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-35.8,x:100.6,y:50.7,alpha:0.413},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-41.1,x:104.7,y:50.4,alpha:0.327},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-45.7,x:108.3,y:50.1,alpha:0.25},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-49.8,x:111.5,y:49.9,alpha:0.184},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-53.2,x:114.1,y:49.8,alpha:0.128},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-56,x:116.3,y:49.6,alpha:0.082},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-58.2,x:118,y:49.5,alpha:0.046},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-59.7,x:119.2,y:49.4,alpha:0.02},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-60.7,x:119.9,alpha:0.005},0).wait(1).to({regY:19.6,scaleX:0.44,scaleY:0.44,rotation:-61,x:120.2,y:49.3,alpha:0},0).wait(12));

	// Символ 31
	this.instance_9 = new lib.Символ31();
	this.instance_9.setTransform(68.9,75.8,1,1,0,0,0,18.9,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(50).to({x:70.4,y:74.3},0).wait(1).to({x:70.9,y:73.8},0).wait(1).to({y:75.3},0).wait(1).to({y:75.8},0).wait(1).to({y:74.3},0).wait(1).to({y:73.8},0).wait(1).to({y:75.3},0).wait(1).to({y:75.8},0).wait(1).to({x:67.9,y:74.3},0).wait(1).to({x:66.9,y:73.8},0).wait(1).to({x:68.4,y:76.8},0).wait(1).to({x:68.9,y:77.8},0).wait(1).to({y:76.7},0).wait(1).to({y:76},0).wait(1).to({y:75.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:7.6,x:75.4,y:81.3,alpha:0.862},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:14.6,x:81.4,y:86.4,alpha:0.735},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:21.1,x:87,y:91.1,alpha:0.617},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:27,x:92.1,y:95.4,alpha:0.51},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:32.4,x:96.7,y:99.2,alpha:0.413},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:37.2,x:100.8,y:102.7,alpha:0.327},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:41.4,x:104.4,y:105.8,alpha:0.25},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:45.1,x:107.6,y:108.5,alpha:0.184},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:48.2,x:110.2,y:110.7,alpha:0.128},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:50.7,x:112.4,y:112.5,alpha:0.082},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:52.7,x:114.2,y:114,alpha:0.046},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:54.1,x:115.3,y:115,alpha:0.02},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:54.9,x:116.1,y:115.6,alpha:0.005},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:55.2,x:116.3,y:115.8,alpha:0},0).wait(12));

	// Символ 30
	this.instance_10 = new lib.Символ30();
	this.instance_10.setTransform(41.4,76.8,1,1,0,0,0,19.4,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(50).to({x:42.9,y:75.3},0).wait(1).to({x:43.4,y:74.8},0).wait(1).to({y:76.3},0).wait(1).to({y:76.8},0).wait(1).to({y:75.3},0).wait(1).to({y:74.8},0).wait(1).to({y:76.3},0).wait(1).to({y:76.8},0).wait(1).to({x:40.4,y:75.3},0).wait(1).to({x:39.4,y:74.8},0).wait(1).to({x:40.9,y:77.8},0).wait(1).to({x:41.4,y:78.8},0).wait(1).to({y:77.7},0).wait(1).to({y:77},0).wait(1).to({y:76.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-10,y:83.6,alpha:0.862},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-19.2,y:89.9,alpha:0.735},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-27.6,y:95.7,alpha:0.617},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-35.4,y:101,alpha:0.51},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:-42.4,y:105.8,alpha:0.413},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-48.6,y:110.1,alpha:0.327},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-54.2,y:113.9,alpha:0.25},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-59,x:41.3,y:117.1,alpha:0.184},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-63,x:41.4,y:119.9,alpha:0.128},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-66.3,y:122.2,alpha:0.082},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-68.9,y:124,alpha:0.046},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-70.8,y:125.2,alpha:0.02},0).wait(1).to({scaleX:0.44,scaleY:0.44,rotation:-71.9,y:126,alpha:0.005},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-72.2,y:126.3,alpha:0},0).wait(12));

	// Символ 29
	this.instance_11 = new lib.Символ29();
	this.instance_11.setTransform(14.2,75.9,1,1,0,0,0,14.2,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(50).to({x:15.7,y:74.4},0).wait(1).to({x:16.2,y:73.9},0).wait(1).to({y:75.4},0).wait(1).to({y:75.9},0).wait(1).to({y:74.4},0).wait(1).to({y:73.9},0).wait(1).to({y:75.4},0).wait(1).to({y:75.9},0).wait(1).to({x:13.2,y:74.4},0).wait(1).to({x:12.2,y:73.9},0).wait(1).to({x:13.7,y:76.9},0).wait(1).to({x:14.2,y:77.9},0).wait(1).to({y:76.8},0).wait(1).to({y:76.1},0).wait(1).to({y:75.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-9.9,x:8,y:81.8,alpha:0.862},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-19,x:2.2,y:87.3,alpha:0.735},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-27.4,x:-3.2,y:92.3,alpha:0.617},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-35.1,x:-8,y:96.9,alpha:0.51},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-42.1,x:-12.4,y:101.1,alpha:0.413},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:-48.3,x:-16.4,y:104.8,alpha:0.327},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-53.8,x:-19.9,y:108.1,alpha:0.25},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-58.5,x:-22.9,y:111,alpha:0.184},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-62.6,x:-25.5,y:113.4,alpha:0.128},0).wait(1).to({scaleX:0.45,scaleY:0.45,rotation:-65.9,x:-27.6,y:115.4,alpha:0.082},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-68.4,x:-29.1,y:116.8,alpha:0.046},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:-70.2,x:-30.4,y:118,alpha:0.02},0).wait(1).to({scaleX:0.4,scaleY:0.4,rotation:-71.3,x:-31,y:118.6,alpha:0.005},0).wait(1).to({regY:15.6,scaleX:0.4,scaleY:0.4,rotation:-71.7,x:-31.3,y:118.9,alpha:0},0).wait(12));

	// Символ 28
	this.instance_12 = new lib.Символ28();
	this.instance_12.setTransform(13.7,48.1,1,1,0,0,0,12.8,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(50).to({x:15.2,y:46.6},0).wait(1).to({x:15.7,y:46.1},0).wait(1).to({y:47.6},0).wait(1).to({y:48.1},0).wait(1).to({y:46.6},0).wait(1).to({y:46.1},0).wait(1).to({y:47.6},0).wait(1).to({y:48.1},0).wait(1).to({x:12.7,y:46.6},0).wait(1).to({x:11.7,y:46.1},0).wait(1).to({x:13.2,y:49.1},0).wait(1).to({x:13.7,y:50.1},0).wait(1).to({y:48.9},0).wait(1).to({y:48.3},0).wait(1).to({y:48.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9.6,x:6.5,alpha:0.862},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-18.6,x:-0.3,alpha:0.735},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:-26.8,x:-6.4,y:48,alpha:0.617},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-34.3,x:-12,alpha:0.51},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-41,x:-17.1,alpha:0.413},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-47.1,x:-21.7,alpha:0.327},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:-52.5,x:-25.7,alpha:0.25},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:-57.1,x:-29.2,y:48.1,alpha:0.184},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-61,x:-32.1,y:48,alpha:0.128},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:-64.2,x:-34.6,alpha:0.082},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-66.7,x:-36.4,alpha:0.046},0).wait(1).to({scaleX:0.54,scaleY:0.54,rotation:-68.5,x:-37.7,y:48.1,alpha:0.02},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-69.6,x:-38.6,y:48,alpha:0.005},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-70,x:-38.9,y:48.1,alpha:0},0).wait(12));

	// Символ 27
	this.instance_13 = new lib.Символ27();
	this.instance_13.setTransform(14.6,21.2,1,1,0,0,0,12.1,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(50).to({regX:12,x:16,y:19.7},0).wait(1).to({regX:12.1,x:16.6,y:19.2},0).wait(1).to({regX:12,x:16.5,y:20.7},0).wait(1).to({regX:12.1,x:16.6,y:21.2},0).wait(1).to({regX:12,x:16.5,y:19.7},0).wait(1).to({regX:12.1,x:16.6,y:19.2},0).wait(1).to({regX:12,x:16.5,y:20.7},0).wait(1).to({regX:12.1,x:16.6,y:21.2},0).wait(1).to({regX:12,x:13.5,y:19.7},0).wait(1).to({regX:12.1,x:12.6,y:19.2},0).wait(1).to({regX:12,x:14,y:22.2},0).wait(1).to({regX:12.1,x:14.6,y:23.2},0).wait(1).to({regX:12,x:14.5,y:22.1},0).wait(1).to({y:21.4},0).wait(1).to({regX:12.1,x:14.6,y:21.2},0).wait(1).to({regX:12,scaleX:0.95,scaleY:0.95,rotation:9.4,x:10,y:18.7,alpha:0.862},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:18.1,x:5.9,y:16.4,alpha:0.735},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:26.1,x:2.1,y:14.4,alpha:0.617},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:33.4,x:-1.4,y:12.4,alpha:0.51},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:40,x:-4.5,y:10.7,alpha:0.413},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:45.9,x:-7.3,y:9.1,alpha:0.327},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:51.1,x:-9.8,y:7.8,alpha:0.25},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:55.7,x:-11.9,y:6.5,alpha:0.184},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:59.5,x:-13.8,y:5.5,alpha:0.128},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:62.6,x:-15.3,y:4.7,alpha:0.082},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:65.1,x:-16.4,y:4.1,alpha:0.046},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:66.8,x:-17.2,y:3.6,alpha:0.02},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:67.9,x:-17.7,y:3.3,alpha:0.005},0).wait(1).to({regX:12.1,regY:20.4,scaleX:0.63,scaleY:0.63,rotation:68.2,x:-17.9,y:3.2,alpha:0},0).wait(12));

	// Слой 21
	this.instance_14 = new lib.Символ39();
	this.instance_14.setTransform(49.2,53,0.174,0.174,115.3,0,0,256.3,256);
	this.instance_14.alpha = 0.18;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(71).to({_off:false},0).to({regX:256,scaleX:0.15,scaleY:0.15,rotation:0,alpha:0},7).wait(12));

	// Слой 19
	this.instance_15 = new lib.Символ39();
	this.instance_15.setTransform(49.2,53,0.15,0.15,0,0,0,256,256);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(64).to({_off:false},0).to({regX:256.1,regY:256.1,scaleX:0.33,scaleY:0.33,rotation:35.7,y:53.1,alpha:0},25).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.9,-393.3,603.7,484.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 20
	this.instance = new lib.Символ26();
	this.instance.setTransform(281.3,207.5,1,1,0,0,0,44.5,46);

	this.instance_1 = new lib.Символ26();
	this.instance_1.setTransform(281.3,128.5,1,1,0,0,0,44.5,46);

	this.instance_2 = new lib.Символ26();
	this.instance_2.setTransform(281.4,49.5,1,1,0,0,0,44.5,46);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},54).to({state:[]},75).to({state:[]},11).wait(25));

	// Символ 24
	this.instance_3 = new lib.Символ24();
	this.instance_3.setTransform(367.9,-82.1,1,1,-1.4,0,0,45,46);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:206.2},9,cjs.Ease.get(-1)).to({rotation:-5.7,x:368,y:202.1},3).to({rotation:-1.4,x:367.9,y:205.2},2).to({rotation:-1.4},40).wait(75).to({regY:46.1,rotation:25.8,y:389.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(25));

	// Символ 21
	this.instance_4 = new lib.Символ21();
	this.instance_4.setTransform(281,-80.5,1,1,0,0,0,44.5,46);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).to({y:207.8},9,cjs.Ease.get(-1)).to({regX:44.4,rotation:3,x:280.9,y:203.8},3).to({regX:44.5,rotation:0,x:281,y:206.8},2).wait(37).to({_off:true},1).wait(110));

	// Символ 24
	this.instance_5 = new lib.Символ24();
	this.instance_5.setTransform(210.9,-82.1,1,1,-1.4,0,0,45,46);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({y:206.2},9,cjs.Ease.get(-1)).to({regY:46.1,rotation:-5.2,y:202.2},3).to({regY:46,rotation:-1.4,y:205.2},2).wait(113).to({rotation:-33.2,y:389.2},10,cjs.Ease.get(-1)).to({_off:true},1).wait(22));

	// Символ 21
	this.instance_6 = new lib.Символ21();
	this.instance_6.setTransform(124,-80.5,1,1,0,0,0,44.5,46);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(4).to({_off:false},0).to({y:207.8},9,cjs.Ease.get(-1)).to({regY:46.1,rotation:5.5,y:203.9},3).to({regY:46,rotation:0,y:206.8},2).wait(112).to({rotation:-11.2,y:390.8},10,cjs.Ease.get(-1)).to({_off:true},1).wait(24));

	// Символ 24
	this.instance_7 = new lib.Символ24();
	this.instance_7.setTransform(367.9,-81.1,1,1,-1.4,0,0,45,46);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(15).to({_off:false},0).to({y:127.9},9,cjs.Ease.get(-1)).to({rotation:2.8,y:124},3).to({rotation:-1.4,y:126.9},2).wait(109).to({regX:45.1,rotation:25.8,x:361,y:369},10,cjs.Ease.get(-1)).to({_off:true},1).wait(16));

	// Символ 24
	this.instance_8 = new lib.Символ21();
	this.instance_8.setTransform(281.3,-80,1,1,0,0,0,44.5,46);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(18).to({_off:false},0).to({y:129},9,cjs.Ease.get(-1)).to({rotation:-3.7,y:125},3).to({rotation:0,y:128},2).wait(22).to({_off:true},1).wait(110));

	// Символ 21
	this.instance_9 = new lib.Символ22();
	this.instance_9.setTransform(122.8,-71.9,1,1,0,0,0,44.5,46.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(22).to({_off:false},0).to({y:137.1},9,cjs.Ease.get(-1)).to({rotation:-3.7,y:133.1},3).to({rotation:0,y:136.1},2).wait(104).to({rotation:-18.7,x:115.8,y:378.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(14));

	// Символ 22
	this.instance_10 = new lib.Символ21();
	this.instance_10.setTransform(202.2,-80,1,1,0,0,0,44.5,46);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({_off:false},0).to({y:129},9,cjs.Ease.get(-1)).to({rotation:4.7,y:125.1},3).to({rotation:0,y:128},2).wait(115).to({rotation:-33.7,x:195.2,y:370.1},10,cjs.Ease.get(-1)).to({_off:true},1).wait(11));

	// Символ 24
	this.instance_11 = new lib.Символ24();
	this.instance_11.setTransform(367.9,-84.8,1,1,-1.4,0,0,45,46);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(34).to({_off:false},0).to({y:48.2},9,cjs.Ease.get(-1)).to({regX:45.1,rotation:-4.4,x:368,y:44.1},3).to({regX:45,rotation:-1.4,x:367.9,y:47.2},2).wait(99).to({regY:46.1,rotation:35.5,y:361.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(7));

	// Символ 21
	this.instance_12 = new lib.Символ21();
	this.instance_12.setTransform(281,-83.2,1,1,0,0,0,44.5,46);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({y:49.8},9,cjs.Ease.get(-1)).to({rotation:3.5,x:280.9,y:45.7},3).to({rotation:0,x:281,y:48.8},2).wait(11).to({_off:true},1).wait(110));

	// Символ 24
	this.instance_13 = new lib.Символ24();
	this.instance_13.setTransform(210.9,-84.8,1,1,-1.4,0,0,45,46);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(33).to({_off:false},0).to({y:48.2},9,cjs.Ease.get(-1)).to({rotation:-6.4,y:44.1},3).to({rotation:-1.4,y:47.2},2).to({rotation:-1.4},7).wait(95).to({regY:46.1,rotation:-53.7,y:361.3},10,cjs.Ease.get(-1)).to({_off:true},1).wait(5));

	// Символ 21
	this.instance_14 = new lib.Символ21();
	this.instance_14.setTransform(124,-83.2,1,1,0,0,0,44.5,46);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(30).to({_off:false},0).to({y:49.8},9,cjs.Ease.get(-1)).to({rotation:3,y:45.8},3).to({rotation:0,y:48.8},2).wait(110).to({rotation:-31,y:362.9},10,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.8,-129.2,92.4,94.3);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ43();
	this.instance.setTransform(12,2.9,1,1,0,0,0,3.5,2.9);

	this.instance_1 = new lib.Символ43();
	this.instance_1.setTransform(3.5,2.9,1,1,0,0,0,3.5,2.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,5.8);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.setTransform(32.3,45.3,0.87,2.195,23.7,0,0,19.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.87,scaleY:2.19,rotation:23.6,x:97.6,y:97.2},19).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.7,90.9);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ18();
	this.instance.setTransform(17,11.6,1,1,0,0,0,17,11.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,skewY:4.2,x:15.5,y:12.4},4).to({regY:11.7,scaleX:1,skewY:1.5,x:16.4,y:12},3).to({regY:11.6,scaleX:1,skewY:0,x:17,y:11.6},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.2,-0.2,36,23);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(60.9,26,1,1,0,0,0,60.9,26);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,122,52);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAhDaIgEAAQgDgDgBgFQgOgQgTgfQgBgRAIgGIAQgLIAAAAIAAAAIAHgEIgBgCIgCgFIAAgKIgBgcIAAgUIgBgDIABgEQgBgUgCgKQgDgJAAgRIgCgcIgFgYIgBAAQgCAAgGgHQgHgIAAgCIAAgBIgXgBQgaAAgCACQgDACgGAAIgCAAQAAAEgCADIgBABIAAACIgDAFQgDAFgCAAIgUAAQgEgDgHgJIgEgGIgCABIgeAAQgFgHAAgHQAAgLACgCIAVgNIABAAIgBgBIACgGQADgCAMABIACABQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAABIgEAJQAGgEAVAEIAAgEQAAgEADgBIAJABIAAAFIADgDIA2gCQAPgKAAgCQAAgDgLgXQgKgRAKgLIgOgEQgEgDAAgFQAAgEADgGQAFgGACgHQgCgFAEgGQAEgIAJADIACAAIABAEQgBAEgDAFQgEAFAAADQAAADABACIACABIACgBIAVAAQADACACADIgDAFIAAAAQAEABAEAHIAEAGIAIgJIAEABQAAAAAAABQAAAAABAAQAAABAAABQAAABAAABQAAAGgIAGIgBAAQAEAJAAAJQAAAMgDAGQAEACAFAFIALAMIAKAHIAXAGIAPAEIAAgCIABgFIgBgEQAAgWAeAUQAPAKAPAQQAAAHgHANQgHAOgGADIgWAAQgKgGgCgEQgBgCAAgGIAAgDIgCABQgEAAgCgCQgCgDgCAAQgLAAgVAFIgLACIAJBMQAIBNAAAQIAAAWIAAAAIAFAEQADADAAADQAIAEAFAMQADAJACAKQgiA3gIAAQgFAAgKgKgAAjC2QgBAEAIAJQAJALABAFIgBAFQAGgBAEgKQAGgPAEgDIABgBIgcgGIgEgBIgFADgAA9CXIgBAIQgBAHAIADQAHADAAAMQAGgDAAgJIgDgLIgEgNIgLgBIgBAEgAAGCTIABAUIAAAAIATAAQAEgDAHAAIABAAIAAgDQABgIgMgGQgJgEgDgEIgJAIgAAnCLQAIAHACAJIAAgFIADgIIgFgBQgJgDAEgCIgIAAIAFADgAAzA4IgEgeIgKAAIAAAAQAAACAAABQAAABAAAAQAAAAgBAAQAAAAAAgBQgBADgDABIgEgBQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBIABgGIACAAIgBgDIALgCIAGACIAAgCIgIhCIgFADIgLADIADATIAIADQAFADAEAEIgBADQgCACgDAAQgGAAgEgCQABAUgBAoIABAAIAPADQAFAAAEAFIAAAAgABzhFIgBABQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAABQAAAEADABIADACIAPAAQgHgDgBgJIAAgCIgKABgAAHh+IgCAEIgDADIAAABQAAANgHAIIAEAJIABAEQAKAIAHAPQAFgDANAAQAEgIANgFQgFgEgCgIIAAgHQgFgDgGgHQgOgOgFgDIABgEgAhvhNQALAIACAEQAAABAKAAIgBgHQgCgJgQgBQAAAAgBAAQAAAAAAAAQAAgBAAgBQAAgBAAgBQAAgBAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgBAAQAAAIgDAFgACHhRQgBAEADADIAFAGQACgFABgFQAAgDgIgHQgDAEABADgAhOhNIACABIADgBIgCAAIgDAAgAiLhaQgIAGABAFIAUAAQAAgHACgEQADgDAAgCIAAgDIAAABQgFgCgCgCIgBgBQgBAEgJAIgAB6hQIADAAIAAgBgAhbhWIADABIABgFIgMAAIAIAEgAgNhaIAAAAIAAAAIAAAAgABshlIgBAJIAAAAIACABQAJgBAEgDIAEACIAAAAIABgCQgJgGgJAAIgBAAgAAUiYIgBABIAAANQAFgHgEgIgAAHidQAAAFABABIACAAQgBgFgCgCgAgOi7IgIABQAQAAAAAHIgBADIAFABQAEgNAGgCIgSAAIgEADg");
	mask.setTransform(80,98.1);

	// Слой 3
	this.instance = new lib.Символ20();
	this.instance.setTransform(47.1,67.4,1,1,0,0,0,32.3,45.4);

	this.instance.mask = mask;

	// Слой 4
	this.instance_1 = new lib.Символ23();
	this.instance_1.setTransform(79.8,142.5,1,1,0,0,0,3.5,2.9);

	// Слой 1
	this.instance_2 = new lib.telo();
	this.instance_2.setTransform(32.8,42.1);

	this.instance_3 = new lib.Символ17();
	this.instance_3.setTransform(104.3,75.4,1,1,0,0,0,17,11.6);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(32.8,42.1,91,134);


(lib.Символ3 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(207.1,128.4,1,1,0,0,0,207.1,130.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(321.8,-131.5,92.4,94.3);


(lib.Символ66 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ63();
	this.instance.setTransform(205.8,259,1,1,0,0,0,205.8,208.8);
	this.instance.filters = [new cjs.ColorFilter(0.54, 0.54, 0.54, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-52,441,487);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,436.8,482.7);


(lib.Символ65 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ66();
	this.instance.setTransform(206.4,262.9,1,1,0,0,0,206.4,262.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},249).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,436.8,482.7);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} */
	}
	var bodyStyle = document.body.style;
	bodyStyle.margin = 0;
	bodyStyle.padding = 0;

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// Символ 2
	this.instance = new lib.Символ2();
	this.instance.setTransform(166.4,88,1,1,52.5,0,0,21.1,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:25,scaleX:0.99,scaleY:1.01,rotation:0,skewX:101.4,skewY:99.1,x:163.3,y:124},9,cjs.Ease.get(-1)).to({regX:21.2,scaleX:1,scaleY:1,rotation:400.5,skewX:0,skewY:0,x:161.2,y:-32.7},10,cjs.Ease.get(1)).to({regX:21.1,scaleX:1.02,scaleY:0.98,rotation:1080,skewX:72,skewY:69.4,x:167,y:105.3},10).to({regY:25.1,scaleX:1,scaleY:1,rotation:1132.5,skewX:0,skewY:0,x:166.4,y:88},5,cjs.Ease.get(-1)).wait(1));

	// Символ 15
	this.instance_1 = new lib.Символ15();
	this.instance_1.setTransform(79.2,26,1,1,0,0,0,60.9,26);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:61,regY:25.9,scaleX:1,scaleY:1,skewX:-4.7,skewY:-2.2,x:79.3,y:27.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-0.5,skewY:-0.3,y:26.2},10,cjs.Ease.get(1)).to({regX:60.9,regY:26,skewX:0,skewY:0,x:79.2,y:26},6).to({regX:61,regY:26.1,scaleX:1.01,scaleY:0.99,skewX:8.5,skewY:11.7,x:80.8,y:31.4},4).to({regX:60.9,regY:26,scaleX:1,scaleY:1,skewX:0,skewY:0,x:79.2,y:26},5).wait(1));

	// Символ 14
	this.instance_2 = new lib.Символ14();
	this.instance_2.setTransform(102,118,1,1,0,0,0,102.7,118.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1,skewY:2.5,y:120.3},9,cjs.Ease.get(-1)).to({scaleX:1,skewY:0.3,y:118.3},10,cjs.Ease.get(1)).to({skewY:0,y:118},6).to({regY:118.6,scaleX:1,skewY:3.4,x:102.5,y:121.4},4).to({regY:118.7,scaleX:1,skewY:0,x:102,y:118},5).wait(1));

	// Символ 11
	this.instance_3 = new lib.Символ11();
	this.instance_3.setTransform(23,145.4,1,1,0,0,0,22.5,40.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:40.3,scaleX:1.02,scaleY:0.98,skewX:36.2,skewY:38.9,x:6.8,y:131.4},9,cjs.Ease.get(-1)).to({regY:40.4,scaleX:1,scaleY:1,skewX:5,skewY:5.3,x:20.6,y:143.5},10,cjs.Ease.get(1)).to({regY:40.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:23,y:145.4},6).to({scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:19.5,y:139.9},4).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:23,y:145.4},5).wait(1));

	// Символ 10
	this.instance_4 = new lib.Символ10();
	this.instance_4.setTransform(21.9,106,1,1,0,0,0,21.9,21.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:22,scaleX:1.02,scaleY:0.99,skewX:20.4,skewY:24.3,x:23.9,y:97.2},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:2.8,skewY:3.3,x:22.2,y:104.8},10,cjs.Ease.get(1)).to({regX:21.9,scaleX:1,scaleY:1,skewX:0,skewY:0,x:21.9,y:106},6).to({regY:21.3,scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:22.4,y:100.7},4).to({regY:21.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:21.9,y:106},5).wait(1));

	// Символ 9
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(34.9,92.7,1,1,0,0,0,14.2,20.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:20.1,scaleX:1.01,scaleY:1,skewX:6.9,skewY:11.4,x:36.7,y:89.9},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:0.8,skewY:1.5,x:35.1,y:92.3},10,cjs.Ease.get(1)).to({regY:20.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:34.9,y:92.7},6).to({regX:14.1,regY:20.1,scaleX:1.01,scaleY:1,skewX:5.8,skewY:10.8,x:36.5,y:89.9},4).to({regX:14.2,regY:20.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:34.9,y:92.7},5).wait(1));

	// Символ 6
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(107.1,104.7,1,1,0,0,0,9.5,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1,scaleY:1,skewX:5,skewY:7.4,x:104.4,y:106.8},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,skewX:-9.5,skewY:-9.3,x:107.1,y:102.4},10,cjs.Ease.get(1)).to({regY:23.6,scaleY:1,rotation:-12,skewX:0,skewY:0,x:107.5,y:101.7},6).to({regX:9.6,scaleX:0.99,scaleY:1.02,rotation:0,skewX:-6.4,skewY:2.8,x:108,y:108.1},4).to({regX:9.5,regY:23.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:107.1,y:104.7},5).wait(1));

	// Символ 5
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(127.3,108,1,1,0,0,0,18.2,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:19.3,scaleX:1.01,scaleY:0.99,skewX:19.2,skewY:21.1,x:121.9,y:114.6},9,cjs.Ease.get(-1)).to({regY:19.2,scaleX:1,scaleY:1,skewX:-7.5,skewY:-7.3,x:127.2,y:102.8},10,cjs.Ease.get(1)).to({regY:19.3,scaleX:1,scaleY:1,rotation:-12,skewX:0,skewY:0,x:128,y:100.8},6).to({regY:19.4,scaleX:0.99,scaleY:1.02,rotation:0,skewX:-6.4,skewY:2.8,x:128.2,y:112.5},4).to({regY:19.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:127.3,y:108},5).wait(1));

	// Символ 4
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(166,95.7,1,1,0,0,0,29.1,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:29.2,scaleX:1.02,scaleY:0.98,skewX:47.9,skewY:47.7,x:157.2,y:128.7},9,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:-12,skewX:0,skewY:0,x:161.8,y:83.8},10,cjs.Ease.get(1)).to({regX:29.1,scaleX:1,scaleY:1,rotation:10.1,x:164.5,y:91.8},6).to({regY:28.6,scaleX:1.02,scaleY:0.98,rotation:0,skewX:25.6,skewY:27.7,x:165,y:114.5},4).to({regY:28.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:166,y:95.7},5,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,199.1,186.2);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* if (!_first)
		
		{
		
		    _first = true;
		
		    gotoAndPlay(Math.floor(Math.random() * _totalframes));
		
		} */
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// Символ 15
	this.instance = new lib.Символ16();
	this.instance.setTransform(71.4,94.4,1,1,0,0,0,98.5,92.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:96.9},19,cjs.Ease.get(-1)).to({y:99.4},20,cjs.Ease.get(1)).to({y:96.9},20,cjs.Ease.get(-1)).to({y:94.4},20,cjs.Ease.get(1)).wait(1));

	// Символ 13
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(6.9,202.3,1,1,0,0,0,34.9,35.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.97,skewX:0.3,x:7.2,y:203.5},19,cjs.Ease.get(-1)).to({scaleY:0.93,skewX:0.9,x:7.4,y:204.8},20,cjs.Ease.get(1)).to({scaleY:0.97,skewX:0.3,x:7.2,y:203.6},20,cjs.Ease.get(-1)).to({scaleY:1,skewX:0,x:6.9,y:202.3},20,cjs.Ease.get(1)).wait(1));

	// Символ 12
	this.instance_2 = new lib.Символ12();
	this.instance_2.setTransform(95.2,199.1,1,1,0,0,0,49.2,38.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.97,y:200.4},19,cjs.Ease.get(-1)).to({scaleY:0.93,y:201.8},20,cjs.Ease.get(1)).to({scaleY:0.96,y:200.5},20,cjs.Ease.get(-1)).to({scaleY:1,y:199.1},20,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,1.5,199.9,236.3);


(lib.Символ68 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ65();
	this.instance.setTransform(231.5,255.7,1.06,1.06,0,0,0,218.4,241.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,462.9,511.5);


(lib.Символ60 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ67();
	this.instance.setTransform(183.7,186.4,1,1,0,0,0,183.7,186.4);

	// Слой 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax7R8QnbncgBqgQABqfHbncQHcnbKfAAQKgAAHbHbQHdHcgBKfQABKgndHcQnbHbqgABQqfgBncnbg");
	mask.setTransform(185.8,177.6);

	// Слой 2
	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(23.2,121.7,1,1,0,0,0,89.5,92.5);

	this.instance_1.mask = mask;

	// Слой 4
	this.instance_2 = new lib.Символ61();
	this.instance_2.setTransform(183.7,186.4,1,1,0,0,0,183.7,186.4);
	this.instance_2.filters = [new cjs.ColorFilter(0.49, 0.49, 0.49, 1, 0, 0, 0, 0)];
	this.instance_2.cache(-2,-2,372,377);

	// Слой 5
	this.instance_3 = new lib.Символ68();
	this.instance_3.setTransform(196.6,167.6,1,1,0,0,0,231.4,255.8);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.8,-88.2,462.9,511.5);


// stage content:
(lib.gonzo = function() {
	this.initialize();

	// Символ 55
	this.instance = new lib.Символ55();
	this.instance.setTransform(321.9,267.3,0.932,0.932,0,0,0,188.5,31.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	// Символ 8
	this.instance_1 = new lib.Символ8();
	this.instance_1.setTransform(320.8,157.4,1.002,1.134,0,0,0,339,171);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.Символ8(), 3);

	// Символ 47
	this.instance_2 = new lib.Символ47();
	this.instance_2.setTransform(542.6,269,0.501,0.508,0,0,180,161.8,75.1);

	// Символ 47
	this.instance_3 = new lib.Символ47();
	this.instance_3.setTransform(82.2,268,0.675,0.675,0,0,0,161.8,74.9);

	// Символ 1
	this.instance_4 = new lib.Символ1();
	this.instance_4.setTransform(528.4,177.2,0.992,0.963,0,1.2,-178.8,102.7,118.6);

	// Символ 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(103.2,156.9,0.963,0.963,-14.5,0,0,102.8,118.7);

	// Символ 60
	this.instance_6 = new lib.Символ60();
	this.instance_6.setTransform(319.1,147.4,0.963,0.963,0,0,0,183.7,186.3);

	// Символ 45
	this.instance_7 = new lib.Символ45();
	this.instance_7.setTransform(316.7,162.7,0.855,0.772,0,0,0,400.1,256.9);
	this.instance_7.filters = [new cjs.BlurFilter(5, 5, 1), new cjs.ColorMatrixFilter(new cjs.ColorMatrix(24, 44, 0, 0))];
	this.instance_7.cache(-23,-2,860,518);

	this.addChild(this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(273.3,22,740,506.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;