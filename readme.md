# Node/Express Server

In this project, I am going to start by building backend authentication services followed but other services to build a posting app, like "Letgo", people will come and list a product and other users will be able to look at existing products, sell their own products, and write reviews on products they see. I will be wiring it up to a firebase initially but will most likely eventually move to a postgresql database with more time.

This is my first attempt at an actual production grade microservice and I am open to corrective criticism provided it is constructive.

## Firebase

I am using firebase for the backend, I am interested in other possibilies because I am aware that there are some significant drawbacks to using a Mongo-like database system. To try and mitigate this and try to conform some kind of consistancy to the documents, I will update the first document in the collection to be the model for the way the rest of the documents should appear.
