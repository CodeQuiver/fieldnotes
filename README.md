# fieldnotes
Simple application to organize and store canvassing notes.

## Technologies
* React
* Node
* Express
* Mongo DB - Selected for greater flexibility, as opposed to a SQL database. My logic is that a note-taking app like this would likely need to be more free-form and easily modified.
* Mongoose - ODM to simplify code communication with MongoDb.

## Terminology
What to call each item being organized in this application was a bit tricky. It's a note-taking application, so the database entry containing a person's name and the canvasser's notes about them could be called a "note"- except that it's made up of a note and a name, leading to confusion. I ended up using the term "record" to refer to a full entry in the database, since it's a record of a canvassing encounter/ discussion. "Record" is of course a database term but it seemed passable here as it's also a simile for "note", but unlikely to be confused with it.

This sort of naming confusion often comes up in projects, so I've added this explanation as I would on a real project to clarify the naming conventions for future coders.

## Future Development
I would like to extend this to allow the user to add any custom field to a record that they would like. All custom field names would then be stored in a metadata table/collection and be available as options whenever a user wants to add a custom field. This way the app can grow organically with user needs, and we won't be in the position of having to guess every possible thing clients might want to record about their field conversations. This would work best if the spp and records are shared between members of a larger group than if it's separately used by individuals. We could also seed a few custom fields so they'd be available but not cluttering the interface unless the user decides to add one.

There would definitely be technical challenges, but apparently this can be accomplished using a few different features of Mongoose such as dynamically adding to the schema definition in the code, or by using a catch-all subdocument or a mixed type field which would contain all the custom fields.

I'd also like to develop this more fully for mobile, especially its use of caching so that it can be used entirely offline if necessary and synced later. I have used apps in the past that rely exclusively on a remote API and they tend to run into lag or other issues even in areas with good cellular coverage, and something like this is meant for speed and convenience above all- it has to be as fast for the initial user as paper note-taking, or it won't be used.
