# alphvtechnologies_technical_test

<h1>Stats </h1>
Time taken to comlete: 5 hours
Days utilized: Saturday and Sunday (19th October 2024 and 20th October 2024)
Reason: I have been busy with preparing with a certification exam in addition to complete a few job coding tasks

<h1>Assumptions</h1>
<uL>
  <li>There are three types of shapes (Circle, Rectangle and Square) available for the admin to choose</li>
  <li>There are four colours to be chosen (Green ,Red , Blue, Yellow) available for the admin to choose</li>
  <li>Assume that the user can view all of the shapes and colors selection created by the admin</li>
</uL>

<h1>Proof of Concept</h1>
<h2>Photo Prrof</h2>
Link to Drive: https://drive.google.com/drive/folders/18RDyyNN4pqLBatjJIDtpJobcfZWWyK_y
<h2> Video Proof: https://youtu.be/6DESasa2jbk </h2>

<h1>Functionalities</h1>
<ul>
  <li>Admin able to create, read, update and delete shape data</li>
  <li>User able to read all shape data</li>
</ul>

<h1>Tech Stack Utilized</h1>
<ul>
  <li>Backend : Spring Boot (Java)</li>
  <li>Frontend: NextJS (TypeScript)</li>
  <li>Database: MYSQL </li>
  <li>Axios</li>
  <li>Ant Design UI Components</li>
</ul>


<h1>Instructions: Steps to Run the Application</h1>
<h2>Steps to run the backend</h2>
<ol>
  <li>First download intellij and open the alphvbackendfolder </li>
  <li>Create database in MySQL and paste the root user, password, and sql connection link that can be fouond in the application properties file
  Please replace spring.datasource.url=jdbc:mysql://localhost:3306/{DATABASE_NAME) with your sql database name
  Please replace  spring.datasource.username={DATABASE_USERNAME) with your sql database username
  Please replace  spring.datasource.password={DATABASE_PASSWORD) with your sql database passsword
  </li>
  <li>Then proceed to run the backend in AplhvBackendApplication</li>
</ol>
<h2>Steps to run the front-end</h2>
<ol>
  <li>If there is no .env file then please add in this line of code:  NEXT_PUBLIC_API_ENDPOINT=http://localhost:8080 </li>
</ol>
