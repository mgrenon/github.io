/*
 *
 * This JS 
 *
 */

/* toString(): converts 5-digit conjugation code to readable terms */
function toString(z) {
var q = conj.p[Math.floor(z/10000)]+" person ";
q += conj.n[Math.floor((z/1000)%10)];
q += conj.t[Math.floor((z/100)%10)];
q += conj.v[Math.floor((z/10)%10)];
q += conj.m[Math.floor(z%10)];
return q;
}

/* prntConj() prints results of toString() */
function prntConj(z) {
document.writeln("The conjugation of "+z+" is:<br>"toString(z));
}

/* Conjugation object including all components of Latin verb syntax */
var conj = {
p: ["first ","second ","third "],
n: ["singular ","plural "],
t: ["present ","imperfect ","future ","perfect ","pluperfect ","future perfect "],
v: ["active ","passive "],
m: ["indicative ","subjunctive ", "imperative "]
};

/* Input conjugation code (parameter) */
document.writeln("Input: "+cod+"<br><br>");
prntConj(cod);
