<h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;liri.js Node App</h1>
<div id="header" style="align="center"">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <span><a href="#bands" target="_blank">Bandsintown.js</a> | </span>
<span><a href="#spotify" target="_blank">searchSpotify.js</a> | </span>
<span><a href="#omdb" target="_blank">omdb.js</a> | </span>
<span><a href="#do-what-say" target="_blank">doWhatISay.js</a> | </span>
<span><a href="mailto:jason@skunkworksweb.io">contact</a></span>
</div>

<h1>*NOTE*</h1>
<p>[tip] - click the images below to go directly to its code</p>
<em>The sensitive informatin required to produce a result form this program has been removed for safety and security purposes. You can follow the link below to get an api of your own to play with this program.</em>
<hr>
<br>
<a href="https://developer.spotify.com">Get Your Own Spotify API key</a>
<br>
<a href="https://manager.bandsintown.com/support/bandsintown-api">Get Your Own Bands In Town API key</a>
<br>
<a href="https://www.omdbapi.com/">Get Your Own OMDB API key</a>
<br>
<h1>UCSD Full Stack Coding Bootcamp</h1> 
<h2>MY10 Liri App</h2>

<p>&nbsp;&nbsp;&nbsp;&nbsp;Utilizing several diferent types of api keys the challenge was to format all 3 to work together in a single program format. 
<br>
The First objective was to structure the content in away that allowed me to format each individdual sector of the app in a way that it could be modified as a single entity. To do this I enacted multiple methods. The first was to seperate the program sectors to their own pages.
</p>
<ul>
  <li><h1>Program Files</h1></li>
    <li>.gitignore</li>
    <li>index.html</li>
    <li>keys.js</li>
    <li>liri.js</li>
    <li>log.txt</li>
    <li>package lock-json</li>
    <li>Package.json</li>
    <li>Random.txt</li>
    <li>Readme.md</li>
  </ul>
<ul>
  <li><h1>API Files</h1></li>
<a href="#bands"><li>Bandsintown.js</li></a>
<a href="#spotify"><li>searchSpotify.js</li></a>
<a href="#omdb"><li>omdb.js</li></a>
<a href="#do-what-say"><li>DoWhatISay.js</li></a>
</ul>
<ul>
  <li><h1>Omitted files</h1></li>
  <li>.env</li>
  <li>Node_Modules</li>
  <li>.DS_store</li>
</ul>
<hr>
<h3>flow</h3>
<h2 id="Liri.js app">Liri.js</h2>
<p>As it sounds the app is loosly structured as a alt for #siri from @apple. The program takes in a serries of 4 optional commands utilizing three seperate api calls. Each option consists of a specific serries of key words to enact the apps features:
<ul>
  <li>Bands in town | concert-this</li>
  <li>Spotify| Sspotify-this-song</li>
  <li>OMDB | movie-this</li>
  <li>wild card | do-what-i-say</li>
</ul>
 </p>
<p>The instructions were clear and consise, the objective of this project was to create a Syri-like program that upon providing a simple command paired with a value to go with the command the user will return a formatted and structured response.</p>
<ul>
  <li><b>FS</b> - Utilizing File system response I was able to append not only errors and void responsed to the log file but the content searched for as well. </li>
  <li>case/break - although these two processes are different they work really well in allowin gthe developer to structure many values to form a single function to formulate all three different API calls. 
    <ul>
      <li>Case - listens for the submitted command<li>Break - sends the code to the next line to refference the equality
      <li>err - if all else fails err is enacted notifying the user the er was an error</li>
    </ul>
  </li>
       <li>split (",") - a redundant error fix so if the user supplys a names submission of more than one word it will                     combine them together with a comma seperator</li>
         <li>Tee functions for each api call were moved ot their own individual pages to allow ease of editing and trouble shooting when and if an issue arrises. </li>
</ul>
<a href="https://github.com/rogueathletic/liri-app/blob/master/liri.js" alt="link ot liri.js" target="_blank">
<img src="https://i.imgur.com/hUSURCx.png" alt="screen shot ofliri.js page" width="100%" height="auto" meta="Author: Jason Schutz"></a>


<h2> BANDSINTOWN.JS </h2>

<p>Utilizing AXIOS to supply the query and receive a return value via a get request, we are able to submit a bands name and in return receive all of the curent shows scheduled for the band.</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/bandsInTown.js" alt="link to bands inTown.js code" target="_blank"><img src="https://i.imgur.com/iRhQ1O3.png" alt="screen shot of bandsInTown.js code with a NOFX Submission" width="100%" height="auto" meta="Author: Jason Schutz" id="bands"></a>

<h2> BANDSINTOWN.JS null </h2>
<p>Utilizing AXIOS to supply the query and receive a return value via a get request, we are able to submit a bands name and in return receive all of the curent shows scheduled for the band. You will see on this screen shot our return value is a diferent value. This is ebcuase the user did not type anything into the program after writing the command. Our return value is to nitofy the user infact submitted but they did it incorrrect.</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/bandsInTown.js" alt="link to bands inTown.js code" target="_blank"><img src="https://i.imgur.com/mzPIQwk.png" alt="screen shot of bandsInTown.js code with an empty submission" width="100%" height="auto" meta="Author: Jason Schutz"></a>

<h2> SEARCHSPOTIFY.JS </h2>
<p>this program is quite different on set up from the AXIOS calls used for Bands in Town and OMDB, you will see below there is no AXIOS call here. This is because we have been supplied with our own personal API Call ID and our own API Call Secret. By using these for submission we do not need to use axios. For readability however we do need to use the FS structure to add our content to the logs</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/searchSpotify.js" alt="link to searchSpotifi.js code" target="_blank"><img src="https://i.imgur.com/BIhIeF5.png" alt="screen shot of searchSpotify code with a submission of My Way by Calvin Harris" width="100%" height="auto" meta="Author: Jason Schutz" id="spotify"></a>

<h2> SEARCHSPOTIFY.JS NULL </h2>
this program is quite different on set up from the AXIOS calls used for Bands in Town and OMDB, you will see below there is no AXIOS call here. This is because we have been supplied with our own personal API Call ID and our own API Call Secret. By using these for submission we do not need to use axios. For readability however we do need to use the FS structure to add our content to the logs. Much like OMDB and Bands In Town However when the system does not read a value from after the call to request it returns nothing. We dont want that as our users are here to get something, this being said we supply them with a cashed resonse so they know everything is cool they just put or forgot to put their song title in.</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/searchSpotify.js" alt="link to searchSpotifi.js code" target="_blank"><img src="https://i.imgur.com/yODNuNn.png" alt="screen shot of searchSpotify.js code with a void submission of NULL" width="100%" height="auto" meta="Author: Jason Schutz"></a>

<h2> OMDB.js </h2>
<p>Utilizing AXIOS to supply the query and receive a return value via a get request, we are able to submit a movie name and in return receive all of the primary info for the movie. ***One very important trick when producing this app, youll want to pay very close attention to the syntax of the content in the API calls. For OMDB the titles of each section in this API is Capitolized. This means if the script does not match this syntactical format it will return object undefined***</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/omdb.js" alt="link to omdb.js code" target="_blank"><img src="https://i.imgur.com/FLZgIXh.png" alt="screen shot of omdb.js code with a Tombstone movie submission" width="100%" height="auto" meta="Author: Jason Schutz" id="omdb"></a>

<h2> OMDB.JS NULL </h2>
<p>Utilizing AXIOS to supply the query and receive a return value via a get request, we are able to submit a movie name and in return receive all of the primary info for the movie. You will see on this screen shot our return value is a diferent value. This is ebcuase the user did not type anything into the program after writing the command. Our return value is to nitofy the user infact submitted but they did it incorrrect.</p>
<a href="https://github.com/rogueathletic/liri-app/blob/master/omdb.js" alt="link to omdb.js code" target="_blank"><img src="https://i.imgur.com/ADxvkPi.png" alt="screen shot of omdb.js code submission with a void submission of NULL" width="100%" height="auto" meta="Author: Jason Schutz"></a>

<h2> Do what I say </h2>
wild cards are always fun. For this api call we are storing the content to request on a remote file to sit idle until it is called upon. Once called upon it will provide the title name of a song and return to the app user a set of values for the song as a reward for interacting with the app. I think in the future it would be more fun to set this as a random value so each time the user calls on this functin in terminal they will receive something new forther promoting the value proposition for interacting.
<a href="https://github.com/rogueathletic/liri-app/blob/master/doWhatISay.js" alt="link to doWhatISay.js code" target="_blank"><img src="https://i.imgur.com/97tIKv0.png" alt="screen shot ofscreen shot of dowhatisay.js code" width="100%" height="auto" meta="Author: Jason Schutz" id="do-what-say"></a>

<br><br><br><br>
<a href="#top" alt="On Click moves user back to top of screen from © 2019 jason schutz - skunkworksweb.io">
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;© 2 0 1 9 | J a s o n&nbsp;S c h u t z - Skunkworksweb.IO</p></a>
