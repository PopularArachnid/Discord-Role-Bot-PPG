const Discord = require('discord.js');
const bot = new Discord.Client();
const express = require('express');
const app = express();

//Allows the app to run on port 3000 or which ever port the hosting enviorment sets.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});

 //Token needed for use. There's no token here because of security reasons.
const token = '';

//The prefix which this bot will listen for
const prefix = '!';

//Roles which can be selected. They are in uppercase to avoid any casing a user will use.
//In the user input switch below, 
const roles = ['BLOSSOM', 'BUBBLES', 'BUTTERCUP', 'PROFESSOR', 'BELLUM', 'MOJO', 'HIM'];


//Role IDs
//These are specific to each Discord Server. These will only work for the server for which this bot was created.
//If you wish to find your own server's role IDs, Uncomment the console.log(message.guild.roles); line of code below.
const BUTTERCUP_ID = '715630164624670781';
const BUBBLES_ID = '715630127500886027';
const BLOSSOM_ID = '715630039147741257';
const PROFESSOR_ID = '715630213635113030';
const BELLUM_ID = '715630410838704198';
const MOJO_ID = '715630299710750832';
const HIM_ID = '715630467138715698';


bot.on('ready', () => {


    console.log('This bot is online!');
})


bot.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]) {
        case 'team':

            //The console.log line below will return information about server roles in the console window.
            //console.log(message.guild.roles);
			
            if (!roles.includes(args[1].toUpperCase()) || args.length === 0) {
                message.channel.send('Character not found');
            }

            if (args[1].toUpperCase() === roles[0]) { //Sets role to Blossom

                message.member.roles.add(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Blossom!');

            }

            if (args[1].toUpperCase() === roles[1]) {  //Sets role to Bubbles

                message.member.roles.add(BUBBLES_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Bubbles!')
            }

            if (args[1].toUpperCase() === roles[2]) {  //Sets role to Buttercup

                message.member.roles.add(BUTTERCUP_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Buttercup!')
            }

            if (args[1].toUpperCase() === roles[3]) {  //Sets role to Professor Utonium

                message.member.roles.add(PROFESSOR_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Utonium!')
            }

            if (args[1].toUpperCase() === roles[4]) {  //Sets role to Ms Bellum

                message.member.roles.add(BELLUM_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Ms Bellum!')
            }

            if (args[1].toUpperCase() === roles[5]) {  //Sets role to Mojo Jojo

                message.member.roles.add(MOJO_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.member.roles.remove(HIM_ID);
                message.channel.send('You\'ve chosen team Mojo Jojo!')
            }

            if (args[1].toUpperCase() === roles[6]) {  //Sets role to HIM

                message.member.roles.add(HIM_ID);
                message.member.roles.remove(BLOSSOM_ID);
                message.member.roles.remove(BUBBLES_ID);
                message.member.roles.remove(PROFESSOR_ID);
                message.member.roles.remove(BELLUM_ID);
                message.member.roles.remove(MOJO_ID);
                message.member.roles.remove(BUTTERCUP_ID);
                message.channel.send('You\'ve chosen team HIM!')
            }
            break;


		//Help text. Lets users know how to use commands, as well as how to set roles for characters with spaces.
        case 'help':
            message.channel.send('To select a team type !team followed by your choice. \nYou can pick from Blossom, Buttercup, Bubbles, Professor Utonium, Ms Bellum, Mojo Jojo, and HIM. \nIf you want Professor Utonium, Ms Bellum, or Mojo Jojo, enter Professor, Bellum, or Mojo after the !team command.')
            break;
    }

})

//Sends login information.
bot.login(token);

