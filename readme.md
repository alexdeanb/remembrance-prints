# Remembrance Prints

Remembrance Prints is a React app for funeral print shop order management.

## How it Works
Remembrance Prints allows Directors to create, manage, and delete orders for a print shop. 

Designers can claim orders, manage users, and complete orders.


## Installation

1. Download and install the latest version of node.js
2. Clone the repository locally.
3. Clone the companion JSON server to your local machine from [Remembrance API](https://github.com/alexdeanb/remembrance-prints-api).
4. Open terminal and CD to the API repository directory.
5. Run the JSON Server using the following command, leave running for the duration the app is active. CTRL+C will close the server when you are finished.
```bash 
json-server database.json -p 8088 -w
```
6. Open a second terminal and navigate to the application directory.
7. install the dependencies by running the following:
```bash
npm install
```
8. Start the app using the following command, it will open in your default browser, and can be closed with CTRL+C.
```bash
npm start
```

## Using the Application

### As a Designer
1. Enter login credentials, email and password, from the sample database for a user that has:
```bash
isDirector: true
```

2. Submit login credentials, which will redirect you to the home page dashboard.

3. Navigate to the "Orders" page by clicking the button with the corresponding label in the navbar. This will show you a table of all current orders by default.

4. As a Designer, you can claim an order to work on by clicking "Claim" next to an order that doesn't have a designer.

5. To see what an order needs, hover over the case number in the table.

6. When an order is complete, click the "COMPLETE" button next to the corresponding order.

7. To see completed orders, click "TOGGLE ORDER TYPE" at the bottom left of the Orders page.

8. To see a list of users, navigate to "Users" in the navbar. This will show a table of all current user information.

9. To delete a user, simply click "Delete?" next to a user.

10. To create a new user, click "Add User" at the bottom left of the table.

11. Fill in the required fields, and click submit. You will be navigated back to the "Users" page and the new addition should be at the bottom.

12. To toggle light mode, click the sun icon in the navbar. To toggle back, click it again.

13. To see your account details, click the hamburger button in the navbar, and navigate to "My Account."

14. This page shows a simple version of your account details, to edit simply click the "EDIT" button.

15. Once finished editing, click submit to finalize the changes.

### As a Director

1. Enter login credentials, email and password, from the sample database for a user that has:
```bash
isDirector: false
```

2. Submit login credentials, which will redirect you to the home page dashboard.

3. To create an order, navigate to the order form by clicking "New Order" in the navbar.

4. Enter all information needed on the current step, and then click "NEXT STEP." Repeat this step until you reach "Additional Items."

5. Click the + Button to add an item to the order.

6. Select the desired item and update the quantity, and click submit.

7. To delete an item, click the Delete button in the order viewer on the bottom of the page.

8. Continue to the "Special Notes" step and add any notes you'd like the designer to have.

9. Submit the order by clicking "Submit Order."

10. Once redirected to the "Orders" page, you will see a table of all active orders.

11. As a director, you have the ability to edit or delete your own orders. Click the corresponding button for the action you want to take.

12. On this page, you'll see whether or not a designer has claimed your order to begin working on it. The order is editable until claimed.

13. To see what an order needs, hover over the case number in the table.

14. To see completed orders, click "TOGGLE ORDER TYPE" at the bottom left of the Orders page.

15. To toggle light mode, click the sun icon in the navbar. To toggle back, click it again.

16. To see your account details, click the hamburger button in the navbar, and navigate to "My Account."

17. This page shows a simple version of your account details, to edit simply click the "EDIT" button.

18. Once finished editing, click submit to finalize the changes.

## Lessons Learned
* Wireframes or prototypes go a long way. Production goes smoother when pre-production is thorough.
* Embrace when you feel “plugged in,” acknowledge when you don’t!
   * It’s okay to take breaks!
* Focus on one thing at a time, don’t try to build everything at once.
Sometimes you just need a rubber duck! Try talking out your problem when you get stuck, your solution may be right in front of you.
  * When it isn’t, ask for help!

