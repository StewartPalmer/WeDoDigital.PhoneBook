# WeDoDigital.PhoneBook

* To run this application you'll need dotNet 7, Node 16+ installed.
* I kept to the four hour recommned time limt

* The Application is Written in .Net Core 7 and React
* The Application can has an in memory database using Entity Framework (For simplicity of review rather than having to have a seperate database, or sending over a connection string)
* The front-end should build automatically through Visual Studio / .Net CLI
* The application allow you to view, add, edit and delete contact from a phone book.


## Application Structure
* The application has a SPA front-end, talking to a .Net Core API Layer. (This layer can be viewed by navigating to /swagger when the application to view the full docs)
* The API layer is comprised of three primary elements the Display Layer, Service Layer and Data Layer. 
* I've used a service design pattern along with some dependency injection.
* The data layer is Entity Framework for its ORM layer using an InMemory database seeded at startup for ease of use.


### Still remaining to do, but ran out of time
* Automated front-end tests
* More validations around inputs
* Better error handling
* Unit Tests I hit a bit of an issue here with the fact that it appears MOQ has had some breaking changes around in memory databases, so I am going to need to do a bit of reading on those.

### Running the Application

* It should run out of the box, using visual studio 2022. If there are any issues you can also run it with the dotNet CLI with the dotnet run command