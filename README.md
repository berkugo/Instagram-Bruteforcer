**### InstagramBruter ###**


                 ██████╗  ██████╗  ██╗  ██╗ ██████╗  ██████╗  ██╗   ██╗ ████████╗ ███████╗ ██████╗         ██╗ ███╗   ██╗ ███████╗ ████████╗  █████╗  
                 ██╔══██╗ ██╔══██╗ ██║ ██╔╝ ██╔══██╗ ██╔══██╗ ██║   ██║ ╚══██╔══╝ ██╔════╝ ██╔══██╗        ██║ ████╗  ██║ ██╔════╝ ╚══██╔══╝ ██╔══██╗ 
                 ██████╔╝ ██████╔╝ █████╔╝  ██████╔╝ ██████╔╝ ██║   ██║    ██║    █████╗   ██████╔╝ █████╗ ██║ ██╔██╗ ██║ ███████╗    ██║    ███████║ 
                 ██╔══██╗ ██╔══██╗ ██╔═██╗  ██╔══██╗ ██╔══██╗ ██║   ██║    ██║    ██╔══╝   ██╔══██╗ ╚════╝ ██║ ██║╚██╗██║ ╚════██║    ██║    ██╔══██║ 
                 ██████╔╝ ██║  ██║ ██║  ██╗ ██████╔╝ ██║  ██║ ╚██████╔╝    ██║    ███████╗ ██║  ██║        ██║ ██║ ╚████║ ███████║    ██║    ██║  ██║ 
                 ╚═════╝  ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═════╝  ╚═╝  ╚═╝  ╚═════╝     ╚═╝    ╚══════╝ ╚═╝  ╚═╝        ╚═╝ ╚═╝  ╚═══╝ ╚══════╝    ╚═╝    ╚═╝  ╚═╝ 




            ╦ ╔╗╔ ╔═╗ ╔╦╗ ╔═╗ ╔═╗ ╦═╗ ╔═╗ ╔╦╗      ╔╗  ╦═╗ ╦ ╦ ╔╦╗ ╔╦╗ ╔═╗ ╦═╗      ╦ ╦ ╦═╗ ╦ ╔╦╗ ╔╦╗ ╔═╗ ╔╗╔      ╔╗  ╦ ╦      ╔═╗  ╦ ╦ ╔═╗ ╦ ╦═╗ ╔╦╗ ╦ ╦ 
            ║ ║║║ ╚═╗  ║  ╠═╣ ║ ╦ ╠╦╝ ╠═╣ ║║║      ╠╩╗ ╠╦╝ ║ ║  ║   ║  ║╣  ╠╦╝      ║║║ ╠╦╝ ║  ║   ║  ║╣  ║║║      ╠╩╗ ╚╦╝      ║╣  ╔╩╦╝ ╠═╝ ║ ╠╦╝  ║  ╚╦╝ 
            ╩ ╝╚╝ ╚═╝  ╩  ╩ ╩ ╚═╝ ╩╚═ ╩ ╩ ╩ ╩      ╚═╝ ╩╚═ ╚═╝  ╩   ╩  ╚═╝ ╩╚═      ╚╩╝ ╩╚═ ╩  ╩   ╩  ╚═╝ ╝╚╝      ╚═╝  ╩       ╚═╝ ╩ ╩  ╩   ╩ ╩╚═  ╩   ╩  




**Usage of this script for attacking targets without prior mutual consent is illegal. It's the end user's responsibility to obey all applicable local, state and federal laws. Developers assume no liability and are not responsible for any misuse or damage caused by this program.**

Basically, it's a script written in node.js which is creating a bruteforce attack to the targets specified at names.json file using the password.txt wordlist. 
It's working with TOR proxies to avoid getting blocked by Instagram.
Don't forget to add this line - MaxCircuitDirtiness 10 - at the end of your torrc file..



- Push your usernames into the array inside of names.json file.
```
apt get install nodejs && apt get install npm
npm install  
node main.js names.json pass.txt 
```

