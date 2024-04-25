
let content;
let padding;
let border;
 
let totalWidth = `${content + padding*2 + border*2}`;

 function getElementWidth(content, padding, border) {
   
   
   return Number(Number.parseFloat[content]) + Number(Number.parseFloat[padding]) + Number(Number.parseFloat[border]);
   
}
 
 console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

// це рядки формату Npx?const Npx (content, padding, border); content = Npx(content);
 //padding = Npx(padding);
 //border = Npx(border);
 //console.log(Number(content));
 //let content;
 /*let padding;
 let border;
 console.log(typeof content);
 console.log(typeof padding);
 console.log(typeof border);
 console.log(isNaN(content));
 console.log(isNaN(padding));
 console.log(isNaN(border));
 
 let totalP = `${padding * 2}`; 
 let totalPr = `${border * 2}`;

 function getElementWidth(content, padding, border) {
    return `content + ${padding * 2} + ${border * 2}`
 };*/
 //const Number = content.parseFloat();
 /*const Number = padding.parseFloat();
 const Number = border.parseFloat();*/
 // console.log(typeof Number.parseFloat);