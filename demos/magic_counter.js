var A = require("./..");
var L = require("lambda-calculus");
var Base = require("./base");

var test = `
  ${Base}

  succ=
    (U r.x.a.b.(x b x.(a (r r x))))

  zero=
    (U r.a.b.(a (r r)))

  peek= n.x.(n
    t.(t x.(x
      x.r.t.(t x a.b.c.(r a b (a c)))
      x.r.t.(t x a.b.c.(r a b (b c)))))
    t.(t x a.b.c.c)
    x.r.r)

  (peek 5 (19 19 succ zero))
`;

console.log(A.netToLam(A.reduceNet(A.lamToNet(test))));

//next=
  //x.a.b.(x
    //x.(b a.b.(x
      //x.(a a.b.(x
        //a
        //b))
      //x.(b a.b.(x
        //a
        //b))))
    //x.(a a.b.(x
      //x.(b a.b.(x
        //a
        //b))
      //x.(a a.b.(x
        //b
        //a)))))
