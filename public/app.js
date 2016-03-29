

window.onload = function(){//onload is a property/listener of window. Waiting to have functions
  //assigned to them...so 'Window, onload I want you to run this function!'
 
  allQuotes = createQuoteElements(quotes)
  addQuoteElementsToPage(allQuotes) 

  var form = document.getElementById('newQuoteForm')
  console.log('form', form)

  form.onsubmit = function(event){
    event.preventDefault()
    var text = getQuoteTextInput();
    var author = getQuoteAuthorInput();
    var anotherQuote = newQuote(text, author, Quote);
    
    var quoteElement = createQuoteElement(anotherQuote);
    appendQuoteToPage(quoteElement);

  }

 

};


  var Quote = function(text, author){
    this.text = text;
    this.author = author;
  }

  var quote1 = new Quote("The only CSS you need to know is background-color: tomato", "Rick");
  var quote2 = new Quote("Are those hand-cut artisan crisps?", "Keith");
  var quote3 = new Quote("Scaffolding is nothing but a fiery hell.", "Valerie");
  var quote4 = new Quote("Visual Basic is the way forward, I don't know why we are doing JavaScript.", "Jay");

  var quotes = [quote1, quote2, quote3, quote4]

  var createQuoteElements = function(array){
    var tempArray = []
    for (quote of array){
      var quoteHolder = createArticleElement();

      var quoteHolder = createArticleElement();
      var blockQuote = createAndAssignBlockQuoteElement(quote);
      var cite = createAndAssignCiteElement(quote);

      blockQuote.appendChild(cite);
      quoteHolder.appendChild(blockQuote);
      tempArray.push(quoteHolder)
    }
    return tempArray;
  }


var addQuoteElementsToPage = function(array){
  var quoteSection = document.getElementById('quotes')
  for (item of array){
    quoteSection.appendChild(item);
  }
}

var getQuoteTextInput = function(){
  var formInputText = document.getElementById('quoteText');
  var quoteText = formInputText.value;
  return quoteText
}

var getQuoteAuthorInput = function(){
var formInputAuthor = document.getElementById('quoteAuthor');
var quoteAuthor = formInputAuthor.value;
return quoteAuthor
}

var newQuote = function(text, author, qouteConstructor){
  var quote = new qouteConstructor(text, author)
  return quote
}

var createQuoteElement = function(quote){
  var quoteHolder = createArticleElement();
  var blockQuote = createAndAssignBlockQuoteElement(quote);
  var cite = createAndAssignCiteElement(quote);

  blockQuote.appendChild(cite);
  quoteHolder.appendChild(blockQuote);
  return quoteHolder;
}

var appendQuoteToPage = function(quoteElement){
  var quoteSection = document.getElementById('quotes');
  quoteSection.appendChild(quoteElement);
}

var createArticleElement = function(){
  var quoteHolder = document.createElement('article');
  quoteHolder.classList.add('quote');
  return quoteHolder
}

var createAndAssignBlockQuoteElement = function(quote){
  var blockQuote = document.createElement('blockquote');
  blockQuote.innerText = quote.text;
  return blockQuote;
}

var createAndAssignCiteElement = function(quote){
  var cite = document.createElement('cite');
  cite.innerText = quote.author;
  return cite;
}



  
  

  
  

  
  

  
  








// var quotesArray = []





//Adding elements to DOM
// var quoteArticle = document.createElement('article');//a valid HTML tag
// quoteArticle.classList.add('quote'); //adds a classname to the element

// var blockQuote = document.createElement('blockquote');
// blockQuote.innerText = "Visual Basic is the way forward, I don't know why we are doing JavaScript.";

// var cite = document.createElement('cite');
// cite.innerText = "Jay Chetty";

// blockQuote.appendChild(cite);//sticks an element onto the end of the first element 
// quoteArticle.appendChild(blockQuote);//same again

//now want to add the whole thing(quoteArticle) to our DOM but we put it in the onload function

// articles = document.getElementsByTagName('article');

// articles.forEach(function(article){//cannot use .forEach on an HTML collection so use a FOR 
//   //loop
//   var evenArticles = [];
//   var oddArticles = []
//   if ( articles.indexOf(article)%2 === 0 ){
//     evenArticles.push(article);
//   } else {
//     oddArticles.push(article)
//   }
//   return evenArticles;
//   return oddArticles;
// });

// console.log("Hello browser!");

// var tagline = document.getElementById('tagline');
// tagline.innerHTML = "New Tagline!";//this is trying to run before the DOM has been created
// //we need to wait until the DOM has been created therefore we use a CALLBACK. This onload
// //function is a callback because window waits for the DOM to be loaded and then looks for any
// //functions in its properties to be run and CALLS THEM/CALLS THEM BACK

// var quotes = document.querySelector('#quotes');//gets the whole section element with class of quotes
// quotes.appendChild(quoteArticle);

// var quotes = document.querySelectorAll('.quote')//this onload function could get very big SO
// //we could split these off into defined functions or VBs containing functions and then 
// //invoke these in the onload function
// for (var i = 0; i < quotes.length; i++) {
//   if (i % 2 === 0){
//     quotes[i].style.color = "tomato";
//     quotes[i].style.backgroundColor = "wheat";
//   }
//   else {
//     quotes[i].style.color = "wheat";
//     quotes[i].style.backgroundColor = "tomato";
//   }

