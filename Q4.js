{
    console.log(a); // Hoisting demo: 'undefined' (var is hoisted but not initialized)
     //console.log(b); //  ReferenceError: Cannot access 'b' before initialization
    // console.log(c); //  ReferenceError: Cannot access 'c' before initialization

    var a = 10; // ✅ Hoisted with 'undefined' before initialization
    let b = 20; // ✅ Not hoisted (Temporal Dead Zone)
    const c = 30; // ✅ Not hoisted (Temporal Dead Zone)

    console.log(a);
    console.log(b);
    console.log(c);
}
