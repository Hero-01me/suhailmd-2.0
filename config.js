const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2349074242031";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_05_11_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY4LFxuICAgICAgICA0NSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNixcbiAgICAgICAgODAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA0MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkwLFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MixcbiAgICAgICAgODksXG4gICAgICAgIDEsXG4gICAgICAgIDQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODQsXG4gICAgICAgIDg3LFxuICAgICAgICA0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTEsXG4gICAgICAgIDczLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia2ppdkRsdEJkRlJodnBCaVV5VWgxTW1GZjZ2L051Tzcyc0tvOFB3SnI0QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDc0MjQyMDMxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MEYxNjREODZCQkYyMTNDRERBMzlBMTk3RDgwMjU1M1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzE1NzUxMTdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3l4bHctYVJUVS1tcmZuRm9TNGhlZ1wiLFxuICBcInBob25lSWRcIjogXCI0NDcyNjU0NC1jOWJhLTQ2ZTgtYjI1Yy1kNjRmM2ExOTg3YWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyMjUsXG4gICAgICAyNTAsXG4gICAgICA3MixcbiAgICAgIDg3LFxuICAgICAgMjQ3LFxuICAgICAgMjMyLFxuICAgICAgMTUxLFxuICAgICAgMTQ5LFxuICAgICAgMTM0LFxuICAgICAgMTg4LFxuICAgICAgODYsXG4gICAgICAxNTYsXG4gICAgICAyNTQsXG4gICAgICAyMDksXG4gICAgICAyMzIsXG4gICAgICAxNixcbiAgICAgIDEyMyxcbiAgICAgIDE0NCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MixcbiAgICAgIDc3LFxuICAgICAgMTUyLFxuICAgICAgNDYsXG4gICAgICA4NixcbiAgICAgIDIxNSxcbiAgICAgIDI0OCxcbiAgICAgIDEyOCxcbiAgICAgIDE0NixcbiAgICAgIDEyNCxcbiAgICAgIDIwMCxcbiAgICAgIDIwMSxcbiAgICAgIDE1LFxuICAgICAgMzgsXG4gICAgICA0MixcbiAgICAgIDE1MCxcbiAgICAgIDg1LFxuICAgICAgMTEwLFxuICAgICAgMjAxLFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVE1CN1FQN0tcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzQyNDIwMzE6NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjczMDE0NDYwODU4NDE0OjQ5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09xZHByRUJFTUg2MXJrR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV1BZSHJ3ZGdwV2RPcDVzcEduRUU3NGxNcGFRSThxMmdabE1ObFBBOVJScz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGTWhHcnlTblhFQjlnQU91a0ZlTkU1aVlwd3dnbFhQbGdHMWpMTE81UllHaGkvb1ZHeTdjMk15OHNQTUIxblk0aWEzYVFjQnpKVmR5ak1Nb2lVZVhBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsU0NpZElUT1RvcUR2TW5zWnY1WUI0RVJIQjJnR0FWL09TWHU1bFE5YTlnOFhpaU1iNTI2RkpuNjllOVp6QTllVUZaa3NOTWg0SHQ4ckk5VFZ4OCtCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc0MjQyMDMxOjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE1NzUxMDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPTkJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9OQi5qc29uIjogIntcImtleURhdGFcIjpcInlySDJDV0ZHaVgva1hNT3E0NDdWckhGaXBYdjlRRGdCMkhFeTFCbjFLaTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzcxODIyMzE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzE1NzMxNTc4NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
