const api_url='https://quotes-api-self.vercel.app/quote'
let quote=document.querySelector('.quote-card_text')
let  author=document.querySelector('.quote-card_author')
let button=document.querySelector('.btn-success')
let copy_btn=document.querySelector('.copy-quote-btn')
function generate_quote(url){
 fetch(url)
 .then (Response=>Response.json())
 .then(data=>{
    console.log(data);
    quote.textContent=data.quote;
    author.textContent=data.author;
 })
}
function clipboard(){
   const textTocopy=`${quote.textContent}${author.textContent}`;
   navigator.clipboard.writeText(textTocopy)
   .then(()=>{
      alert("Quote copied to clipboard!");
      window.alert('quote copied to clipboard!');
   })
}
button.addEventListener('click',()=>generate_quote(api_url))
copy_btn.addEventListener('click',copy_btn)