addH1 = function(theText)
{
   var newh1 = document.createElement("h1")
   newh1.innerHTML = theText
   document.body.appendChild(newh1)
}

getNews = function()
{
   var request = new XMLHttpRequest()

   request.onreadystatechange = function(){

      if (request.readyState == 4)   //
         if (request.status == 200){  //successful request OK

            console.log(request.responseText)

            var res = eval( '(' + request.responseText + ')' )

            var count = res['resultsCount']
            var limit = res['resultsLimit']

            if (count>limit)
                count = limit

            for (var i=0; i<count; i++)
                 addH1(res['headlines'][i]['headline'])
         }

   }

   var theResource = 'http://api.espn.com/v1/sports/soccer/eng.1/news/headlines?apikey=cehem3gjxtwbgs9t3djrrxf8'

   request.open('GET', theResource , true)

   //request.open('GET','urlread.cgi',true)

   request.send(null)
}

// see:  http://www.programmableweb.com/apis/directory
//   theResource = 'http://en.wikipedia.org/w/api.php?format=json&action=query&titles=Main%20Page&prop=revisions&rvprop=content'
