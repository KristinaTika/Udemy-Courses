const request = new XMLHttpRequest();
request.onreadystatechange = () => {  // onreadystatechange - eventHandler that is called whenever the readyState attribute changes.
   if(request.readyState === 4) {
       if(request.status === 200) {
           console.log(request.responseText); // .responseText returns a DOMString that contains the response to the request as text, or null if the request was unsuccessful or has not yet been sent.
       } else {
           console.log("there was a problem");
       }
   }
}

request.open("GET", "https://api.github.com/zen");
request.send();

// The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

// Value	State	            Description
// 0	    UNSENT	            Client has been created. open() not called yet.
// 1	    OPENED	            open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	            Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.