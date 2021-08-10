# fieldnotes
Simple application to organize and store canvassing notes. Uses the MERN stack.

## Deployment
To run this, you will need to have a local copy of MongoDB and npm installed.

From the root `fieldnotes` directory, run `npm run installDeps` to automatically install all the required npm packages.

Next, ensure you have MongoDB running in the background (if it's installed, the command `mongod` should start it up- do this in a separate terminal).

Next, run `npm run start` to start the server.

The final line in the terminal should show the port the server is running on and the database path in use.

e.g. `Server running on port 3001, and connected to db at mongodb://localhost/fieldNotesDb`

You can then view the app in your browser at the localhost port returned above.

There is also "development" style deployment available, which includes an auto-launch of the app in your default browser. For that the command is: `npm run dev`.

## Technologies
* React
* Node
* Express
* Mongo DB - Selected for greater flexibility, as opposed to a SQL database. My logic is that a note-taking app like this would likely need to be more free-form and easily modified.
* Mongoose - ODM to simplify code communication with MongoDb.

## Challenges and Design Notes (In no particular order...)
* In terms of design, I kept the app to only two pages in order to make it as streamlined as possible- either a user is on the note-taking page(this is the default entry point), or they are viewing all their notes. A landing page would only be another click between opening the app and using it, and when in the midst of a conversation with a member of the public, an app like this has to have as few steps between opening it and actually taking notes as possible.

* I could have spent a lot more time designing the view of the app. In particular I would have improved the "All Notes" page and the navigation bar. As it is I was able to add a bit of styling and bootstrap layout, mostly because it's convenient to use out of the box. The included css was a free Bootstrap Theme download called "United" (see credits), which allowed me to quickly apply some styling with React premade bootstrap components and through directly applying bootstrap classes. I would normally consider using React's pre-built bootstrap components overkill, as bootstrap is pretty simple to apply directly, but for speedy mockups like this they do the job well.

* I wanted to deploy this to Heroku, however the free plugin I used to use for MongoDb there is no longer available. I could use an alternative method, but I decided that would add too much development time. On the plus side, that means that there are pieces in place to make remote deployment to any service simple for this app, such as the database setup in server.js.

* I would have loved to use unit testing for this, but given the setup time involved in starting any full-stack app from scratch that wasn't feasible. For an app this simple, I decided manual testing was sufficient. I would definitely add at least some testing in a real world scenario.

* Integration of the different layers, as well as troubleshooting imports, was one of the larger challenges of this project. For instance, node apparently doesn't support "__dirname" directly, so it has to be specially imported.

## Terminology
What to call each item being organized in this application was a bit tricky. It's a note-taking application, so the database entry containing a person's name and the canvasser's notes about them could be called a "note"- except that it's made up of a note and a name, leading to confusion. I ended up using the term "record" to refer to a full entry in the database, since it's a record of a canvassing encounter/ discussion. "Record" is of course a database term but it seemed passable here as it's also a simile for "note", but unlikely to be confused with it.

This sort of naming confusion often comes up in projects, so I've added this explanation as I would on a real project to clarify the naming conventions for future coders.

## Future Development
I would like to extend this to allow the user to add any custom field to a record that they would like. All custom field names would then be stored in a metadata table/collection and be available as options whenever a user wants to add a custom field. This way the app can grow organically with user needs, and we won't be in the position of having to guess every possible thing clients might want to record about their field conversations. This would work best if the app and records are shared between members of a larger group than if it's separately used by individuals. We could also seed a few custom fields so they'd be available, but not clutter the basic form with too many fields unless the user decides to add one.

There would definitely be technical challenges to the dynamic field additions, but apparently this can be accomplished using a few different features of Mongoose such as dynamically adding to the schema definition in the code, or by using a catch-all subdocument or a mixed type field which would contain all the custom fields. MongoDb also natively supports this sort of free-form addition, but of course we'd need to balance that ability with the need to not let the database become messy or insecure- done wrong this could be a vector for code injection.

I'd also like to develop this app more fully for mobile, especially its use of caching so that it can be used entirely offline if necessary and synced later. I have used apps in the past that rely exclusively on a remote API and they tend to run into lag or other issues even in areas with good cellular coverage, and something like this is meant for speed and convenience above all- it has to be as fast for the initial user as paper note-taking, or it won't be used.

## Credits
* Bootstrap theme found here: https://bootswatch.com/united/ made by Thomas Park https://thomaspark.co/ and released under the MIT license https://github.com/thomaspark/bootswatch/blob/master/LICENSE.