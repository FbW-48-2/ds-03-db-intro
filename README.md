# Databases - Exercise 1 - DB Intro

We wanna start our database journey with an online cloud database. That is the easiest way to start.

We will work with the offical MongoDB cloud database (ATLAS) and will connect to it using a DB UI tool (= Compass).

That will enable us to get in touch with the most fundamental database concepts visually + the ability to manage all our data even without code. 

E.g. to change the displayed API data in your frontend, e.g. a list of shop products, you will not need to do any coding anymore. By changing the data in the database, the API will pick up that data and will automatically also change the data displayed in your frontend on next load.

This way you provide even non-coders a way to manage their data independent from you, with an out-of-the-box UI.

And also ourselves can manage our data more easily, e.g. fixing typos quickly or adding some initial dummy data.

## Signup for ATLAS

We wanna create a MongoDB Database in the Cloud.

Go to the MongoDB Atlas Page:
https://www.mongodb.com/cloud/atlas

- Signup for free
  - Fill out register form with a reachable email (you need to verify your account)

- Create a Cluster (will take some minutes to complete)

- Setup a user
  - necessary for remote connection
  - please use for the same "string" for username and password 
      -> e.g. username: user123 and password: user123
      -> makes it much easier to test

- Setup Network Access > IP Whitelist > Access from everywhere

- Video Guide (optional): https://www.youtube.com/watch?v=KKyag6t98g8

## Setup Compass

Installation Instructions for your operating system:
https://docs.mongodb.com/compass/master/install/

Connect to your Atlas DB using Compass:

- Login to ATLAS and select your cluster
- Go to tab "Connect"
- Grab the connection string specific for Compass
- Launch Compass
- Paste the string you copied from ATLAS into the connection input field and hit "Connect"
- If it worked you now should see all databases in the left sidebar 

## Create Database

Now on the left sidebar the default databases of ATLAS should be listed, including a database "test".

Now let's create a new database by hitting the green button "Create Database" at the top.

Name it "students_db".

Each DB must have an initial collection. A collection is comparable to a JavaScript array (=list of items with same fields / structure, e.g. users)

Name the initial collection "students". And confirm (ignore all the checkboxes).

## Create initial data

Now we wanna create some initial dummy data. In the DB world we call this process "seeding".

Select the database "students_db" in the left sidebar.

You should see here your collection "students". Click on it.

Now we are in the data view. Currently it is empty.

We wanna seed in 5 studs of your course.

Click "Add data" -> "Insert document" 
(Option "Import file" is quite buggy, not recommended)

Even though it seems we can just insert ONE document, we can actually  insert a whole ARRAY of objects right away.

The Array must be in JSON format (so keep in mind to put double quote "" around all object keys and values)

Each student should have the props "firstname" and "lastname".

You do NOT need to create ID fields! MongoDB will create these automatically for you!

Example:

```
[
  { "firstname": "Angela", "lastname": "Merkel" }
  { "firstname": "Jens", "lastname": "Spahn" },
]
```

Afterwards you should see the entries in your collection with Object ID fields created!

## Create collection manually

Now select your database "students_db" in the left sidebar. 

You should see now the list of "collections" again. Currently just one (=students).

Create another collection by hitting the green button "Create collection".
Name it "teachers" (ignore all the checkboxes).

The collection should now get added to the list (can take some seconds).

Now click the new collection. And add 2-3 entries to it.

## Updating

Now we want to add a favorite quote to 2-3 students.

Select the "students" collection in the left sidebar. Now you will see all student entries.

Hover over one entry. An icon menu will arise on the right side.

Hit the first icon (the "Pencil") to edit the given document.

Hover over the field "lastname". A little "+" icon will appear on the left. Click it and create a new field "favQuote". 

Hit the "Tab" key on your keyboard to jump to the value and fill in some quote (ideally some actual weird quote from that stud... or just some random stuff :))

Afterwards click the "Update" button that appeared on the right side.

Now continue for one or two other students.

## Cloning & Deleting

Now clone one of your existing students.

Hover over the entry and then hover over each icon appearing on the right side.

One has the label "Clone Document". Let's hit that one...

Adapt the firstname & lastname + favQuote (if exists) and confirm.

Now let's delete some entry. 

Hover over it and click the "trash" icon in the icon bar. Confirm the deletion. Entry gone.


## Bonus - Filtering

Now let's try to get something out of that data...

Search for a student by the field "lastname", using the input field "Filter" located at the top above your array of documents.

Put an object {} inside that input field, with the key to search for (lastname) and a concrete value. The filter does not need to be JSON, you can omit double quotes around the keys. 

Once you're done, hit ENTER or the button "Find" on the right to execute the filter. If the button is greyed out, you have some syntax error in your filter object (forgot quotes? no comma between key & value? missing a curly brace?)

Once done: Clear the filter again to see all documents. Use the button "Reset" right to the Filter input field.

Nice! Now you are able to manage data in a cloud database! 

A big milestone in the journey.

## Bonus - More Filtering :)

Now let's filter for students that have some favQuote set. Use the $exists filter operator for that. Google it, in case we did not cover it :)

And afterwards filter for those studs that have no favQuote so far (now it's a good time to update them :))

## Bonus - Connect from JavaScript

- Connect to your Atlas DB using a Node App
  - Create some folder for storing little code snippets (if you not have that already)
  - Create a sub folder "mongo-connect-test"
  - Create an index.js file in there
  - Install latest mongoose stable version `npm i mongoose@5`
  - Go to the ATLAS webpage & login
  - In your cluster click Tab "Connect..."
  - Grab the connection string specific for apps
  - Paste it into your mongoose.connect call:
    ```
    mongoose.connect(...yourConnectionString..., {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    ```
  - Test if the connection to Atlas works with then & catch handlers, e.g.:
    ```
    mongoose.connect(...)
    .then(() => console.log("DB Connection works!"))
    .catch((err) => console.log("[ERROR] DB Connection failed:", err))
    ```


## Bonus: Install MongoDB locally

See the MongoDB guide on installation instructions:

[https://github.com/losrobbos/databases-getting-started/blob/main/MONGODB_GUIDE.md#mongodb-local-installation](https://github.com/losrobbos/databases-getting-started/blob/main/MONGODB_GUIDE.md#mongodb-local-installation)


Afterwards: Try to connect to your local MongoDB from Mongoose with this connection string:

`mongodb://localhost/test`

Check if it connects successfully! 

If not: See section "Connect Troubleshooting" below.

### Setup connection in Compass

Open compass and paste in the connection string:

`mongodb://localhost/test`

Now try to create here a students database too, with an initial students collection.

### Connect Troubleshooting

If you start your node app and you receive in the terminal:
`Connection failed connect ECONNREFUSED 127.0.0.1:270217`
=> that typically means: MongoDB is not running!

Open a terminal OUTSIDE of VSCode

Check first if MongoDB is installed: `mongod --version`

If it says "could not find mongod" => mongodb is not installed on your system. See DB installation guide.

If it is installed, maybe you got installed an outdated version.

Is the version below 3.6?

If so: Remove your existing MongoDB installation:

`sudo apt remove mongodb`

followed by:
`sudo apt autoremove` (for cleaning up old mongo libraries)

And follow the DB Installation guide to install the latest, official version.

If `mongod --version` gives ya something above 4, try to connect with the mongo shell: `mongo`

If that starts up a sub-terminal with a &gt; at the beginning, mongodb is running locally fine.

If the connection fails - try to start start up the mongo service:

`sudo systemctl start mongod`

Afterwards check if it was started successfully with:

`sudo systemctl status mongod`

If it shows "running" in green, then you should now be able to connect to MongoDB.

Assure that MongoDB startup on boot automatically too:

`sudo systemctl enable mongod`

In case you still got issues, see the section "Troubleshooting" in the MongoDB install guide or contact your teacher.

