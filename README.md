<strong>liri.js Node App</strong>
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
  <li>Bandsintown.js</li>
  <li>OMDB.js</li>
  <li>searchSpotify.js</li>
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
 
<h2> LIRI.JS </h2>

<p>The instructions were clear and consise, the objective of this project was to create a Syri-like program that upon providing a simple command paired with a value to go with the command the user will return a formatted and structured response.</p>
<ul>
  <li>FS - Utilizing File system response I was able to append not only errors and void responsed to the log file but the content searched for as well. </li>
  <li>case/break - although these two processes are different they work really well in allowin gthe developer to structure many values to form a single function to formulate all three different API calls. 
    <ul>
      <li>Case - listens for the submitted command<li>Break - sends the code to the next line to refference the equality
      <li>err - if all else fails err is enacted notifying the user the er was an error</li>
    </ul>
  </li>
       <li>split (",") - a redundant error fix so if the user supplys a names submission of more than one word it will                     combine them together with a comma seperator</li>
         <li></li>
</ul>
        
        
        
        
<img src="https://i.imgur.com/hUSURCx.png" alt="screen shot ofliri.js page" width="100%" height="auto" meta="Author: Jason Schutz">


<h2> BANDSINTOWN.JS </h2>
<img src="https://i.imgur.com/iRhQ1O3.png" alt="screen shot of bandsInTown.js code with a NOFX Submission" width="100%" height="auto" meta="Author: Jason Schutz">

<h2> BANDSINTOWN.JS null </h2>
<img src="https://i.imgur.com/mzPIQwk.png" alt="screen shot of bandsInTown.js code with an empty submission" width="100%" height="auto" meta="Author: Jason Schutz">

<h2> SEARCHSPOTIFY.JS </h2>
<img src="https://i.imgur.com/BIhIeF5.png" alt="screen shot of searchSpotify code with a submission of My Way by Calvin Harris" width="100%" height="auto" meta="Author: Jason Schutz">

<h2> SEARCHSPOTIFY.JS NULL </h2>
<img src="https://i.imgur.com/yODNuNn.png" alt="screen shot of searchSpotify.js code with a void submission of NULL" width="100%" height="auto" meta="Author: Jason Schutz">



<h2> OMDB.js </h2>
<img src="https://i.imgur.com/FLZgIXh.png" alt="screen shot of omdb.js code with a Tombstone movie submission" width="100%" height="auto" meta="Author: Jason Schutz">

<h2> OMDB.JS NULL </h2>
<img src="https://i.imgur.com/ADxvkPi.png" alt="screen shot of omdb.js code submission with a void submission of NULL" width="100%" height="auto" meta="Author: Jason Schutz">

<h2> Do what I say </h2>
<img src="https://i.imgur.com/97tIKv0.png" alt="screen shot ofscreen shot of dowhatisay.js code" width="100%" height="auto" meta="Author: Jason Schutz">
