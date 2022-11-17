In date.js
we created 'create' schema to get user:-
1. user name.
2. created date.
3. updated date.
4. subscription(which default value true).
here our task to make subscription value 'false' if days between updated and created date is greater then 30.
here we use node-cron to automate our task.
In this we use for loop to check all object present in collection.
