// REDUCER -> 
// is a Function that ACCEPTS: 
//   1) state
//   2) action
// RETURNS:
// - new state (entire state object)

export const BooksReducer = () => { 
    return [
        {
            title: "JavaScript: The Good Parts",
            pages: "350",
            image: "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg",
            author: "Douglas Crockford",
            price: "29.99$",
            yop: "2012",
            aboutBook: `Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole—a subset you can use to create truly extensible and efficient code.

            Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables.
            
            When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including:
            
            Syntax
            Objects
            Functions
            Inheritance
            Arrays
            Regular expressions
            Methods
            Style
            Beautiful features
            The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book.
            
            With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.
            `    },
        {
            title: "Learning React",
            pages: "300",
            image: "https://target.scene7.com/is/image/Target/51975414?wid=488&hei=488&fmt=pjpeg",
            author: "Alex Banks & Eve Porcello",
            price: "29.99$",
            yop: "2015",
            aboutBook: `If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features Developed by Facebook, and used by companies including Netflix, Walmart, and The New York Times for large parts of their web interfaces, React is quickly growing in use. By learning how to build React components with this hands-on guide, you’ll fully understand how useful React can be in your organization.
        
            Learn key functional programming concepts with JavaScript
            Peek under the hood to understand how React runs in the browser
            Create application presentation layers by mounting and composing React components
            Use component trees to manage data and reduce the time you spend debugging applications
            Explore React’s component lifecycle and use it to load data and improve UI performance
            Use a routing solution for browser history, bookmarks, and other features of single-page applications
            Learn how to structure React applications with servers in mind.`   },
        {
            title: "Complete Redux Book",
            pages: "150",
            image: "https://s3.amazonaws.com/titlepages.leanpub.com/redux-book/hero?1492005338",
            author: "Boris Dinkevich & Ilya Gelman",
            price: "29.99$",
            yop: "2016",
            aboutBook: `Redux might be one of the smallest libraries in the JS world, but it is having a huge impact on modern web development.  An array of new concepts and ideas make Redux both challenging to understand and extremely powerful to use.

            In this book you will learn about the inner workings of Redux, and how to use it to solve real-world challenges. We’ll teach you about everything you need to know to use this valuable tool effectively, including store enhancers, normalized state, unit testing, using third-party libraries, and much, much more.`
        },
        {
            title: "Object-Oriented JavaScript",
            pages: "320",
            image: "https://www.packtpub.com/sites/default/files/bookimages/1847194141.jpg", author: "Stoyan Stefanov & Kumar Chetan Sharma",
            price: "29.99$",
            yop: "2014",
            aboutBook: `Rethink JavaScript with this complete and comprehensive guide to a unique and innovative approach to the leading language of web development. This book shows you everything you need to learn object oriented JavaScript, demonstrating valuable techniques and strategies that you can use to fully experience the impressive capabilities of the language. Dive deeper into JavaScript and explore its data structure, and learn how to put its objects to work to write more efficient and elegant code. With an object oriented approach to JavaScript you will optimize and improve your projects and productivity, and uncover a modern and forward-thinking development methodology.

            Gain an in-depth knowledge of JavaScript’s data structures, and learn how different components interact with one another. Look closely at numbers, Booleans and strings, and learn how arrays, loops and conditions help you to effectively manipulate and work with complex data using JavaScript. You’ll also find guidance and insight into the relationship between functions and objects, as well as accessible instructions on how to use them most effectively when working with JavaScript. Learn how to use prototypes, including augmenting built-in objects and learn coding patterns and design patterns to improve your JavaScript code.
            
            What you will learn
            Harness the full capabilities of JavaScript by learning effective coding patterns
            Learn high quality JavaScript design patterns to tackle common JavaScript development challenges
            Dive in and learn JavaScript’s data structures
            Learn how to use prototypes
            Improve script performance
            Find out how an object oriented approach to JavaScript can improve your programs faster and more functional with other libraries.
            `
        }
    ]
}