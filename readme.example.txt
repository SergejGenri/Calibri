Instructions to integration.

At first, you need to prepare your QuickBlox application:
1) Login to your QuickBlox Admin Panel (username=smartboard, password=mickeymouse)
https://admin.quickblox.com/signin
2) Choose your QuickBlox application (http://bit.ly/2lOHKwI). I have already created it with name 'Chat widget'. You can rename it anytime.
3) Click the Users tab (http://bit.ly/2lOTPBR).
4) Click 'Add new user' button and create user for each of your potential travel agents (http://bit.ly/2lOW6ND). Just fill the login and password fields.
For example, I have already created one test user with name 'TravelAgent1' and the same password.

At second, move to zip file which I sent you in attach below:
1) Here you have two folders (travel-agent and widget). First folder contains the chat page for travel agents, accordingly. And second - the demo page with chat widget for travellers. On this page you can see how widget can be run via javascript (look to index.html file).
2) You should copy the travel-agent folder, as it is, and put it to your site hosting without any changes. This will be chat page for your travel agents where they will can sign in. Here they can check all their chat conversations with travellers. If you want to change the logo, just replace logo.png file in images folder.
3) Investigate the widget folder and its index.html file. To integrate the widget please follow next requirements:

- put a few dependencies into 'head' and 'body' parts of your html file as you can see in my example

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css">
<link rel="stylesheet" href="css/calibri.min.css">

<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/quickblox/2.5.0/quickblox.min.js"></script>
<script src="calibri.min.js"></script>

- with ChatWidget.calibri() function you send the object with options for widget. ID and name for admin you replace on your chosen travel agent (take this data from QuickBlox users which you already created in 1st step). Travel agent ID (http://bit.ly/2lP1wYL), travel agent's name (http://bit.ly/2lP3msx)

Please do not hesitate to contact me if you have any difficulties. I'll be happy to help.
Regards, Sergey
