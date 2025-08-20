<h1>Simple game page</h1>

<p>This application uses imported Unity build files in order to run games in browser, at moment I have one game Pong upp and running, I might create more later on.</p>
<p>There is a register/login and logout option, which uses login API created with c#. No need to login or registre to try out games section.</p>
<p>In this appliation I use two cookies, one time based (1 day) for cookie consent, and one session based for JWT token.</p>
<p>I use global context for light/dark mode, username and boolean for logged as state.</p>
<br/>
<p>Project uses the following dependencies:</p>
<li>axios</li>
<li>bootstrap</li>
<li>react</li>
<li>react-bootstrap</li>
<li>react-cookie</li>
<li>react-dom</li>
<li>react-router-dom</li>
<li>react-unity-webgl</li>
<p>These can be installed by running the command "npm i"</p>
<br/>
<p>I deployed this project on Azure static site and used generated workflow in order to progress ci/cd way. My login/auth API is running as webapp in Azure.</p>

<img width="1725" height="1016" alt="GamepageLogin" src="https://github.com/user-attachments/assets/b36f8214-cdd2-40ea-b88d-d5561e52cdc7" />
