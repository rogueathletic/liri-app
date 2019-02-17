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
 
<img src="https://i.imgur.com/PrXmaJv.png" width="100%" height="auto" alt="image of liri.js page code">

<hr>
<h2 alt="Bands in town api">Bands In Town</h2>
<p>
Bandsintown is a music website, billed as a "platform where artists and fans connect". The site allows users to receive notifications about tours and bands playing in the user’s area. It also has tools for artists to manage tour dates.
  <br>
  For this page you will see in the image below the required commands ar elisted at the top of the p[age above all other lines of code. From there we move into the primary function of the segmet of the app to listen for the information listed on lirl.js, to take that infrmation and send a get request via AXIOS API to return content pertaining to the request. This request is called as followes. 
  
 ```node liri.js concert-this [band name]```
</p>
<img src="https://i.imgur.com/WYa266N.png" width="100%" height="auto" alt="image of bandsInTown.js page code">
<p>In the image below you will see a highlighted version of the existing Bands in town code. This portion of the code allows us to not only record the errors and findings to log.txt; but, it allows us to provide a value if te users input is undefined.</p>
<img src="https://i.imgur.com/8Gj6AtC.png" width="100%" height="auto" alt="image of bandsInTown.js response code">
<p>When null or undefined are submitted, there is no set response for the system to send back. Because of this we want to make sure we provide a response so the user knows not only there was an error while providing a return value for the users submission. You can review this response below</p>
<h2>Terminal Response for all Curent scheduled concert dates</h2>

<img src="https://i.imgur.com/MW2C36Z.png" width="100%" height="auto" alt="image of liri.js page code">
<h2>NULL/Undefined print-out</h2>
<img src="https://i.imgur.com/r76aWBo.png" width="100%" height="auto" alt="image of bandsInTown.js log.txt script">


<h2>log.txt print out</h2>
<img src="https://i.imgur.com/KE1Dgfc.png" width="100%" height="auto" alt="image of bandsInTown.js page code">
<hr>
<h2>OMDB</h2>
<p>the OMDB and the Bands In Town API calls follow may of the exact same processes. They both utilize an api key and have the same formatting for returning errirs, logging error content and returning a value if the user submits a qualified or an unqualified statement. There is one single and important difference that is required to be able to call the individual responses from the system. Thus script requires the variables to be Capitolized as this is how they are formatted in the JSON data The code to into in terminal for this api is listed below.</p>
```node liri.js movie-this [movie title]```
<img src="https://i.imgur.com/TvU4Flz.png" width="100%" height="auto" alt="image of omdb.js page code">
<h2>Terminal Response for a qualified submission</h2>
<img src="https://i.imgur.com/l6X6Tc2.png?1" width="100%" height="auto" alt="image of omdb.js page code">
<h2>Spotify API</h2>
<p></p>
