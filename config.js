const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ septorch" 


global.devs = "2349047943737" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349047943737";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_19_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICA3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDU4LFxuICAgICAgICA1OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNDksXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE2LFxuICAgICAgICA3NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMixcbiAgICAgICAgMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxLFxuICAgICAgICA2NixcbiAgICAgICAgMTksXG4gICAgICAgIDkwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDMsXG4gICAgICAgIDU1LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDUxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY1LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICA4NyxcbiAgICAgICAgNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDU3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk1yTWljNHlwMHdtRklHUFlhYmFtR1RZS1JnQzN1cmcvQm01YVJWSWxPYWc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlMzaW5IaG1GVC1TcW9YTFh0bEN1VmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMmI4OWY5NmItZDAxYS00MTllLTliODMtY2MxMzYxNGJhOWIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMyxcbiAgICAgIDc5LFxuICAgICAgNTYsXG4gICAgICAxMTUsXG4gICAgICA1MyxcbiAgICAgIDk4LFxuICAgICAgNTYsXG4gICAgICAxNzcsXG4gICAgICAzOSxcbiAgICAgIDUxLFxuICAgICAgODQsXG4gICAgICA5MyxcbiAgICAgIDcyLFxuICAgICAgMTU0LFxuICAgICAgOTYsXG4gICAgICA1MSxcbiAgICAgIDI1MSxcbiAgICAgIDI0NixcbiAgICAgIDE0LFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDE4LFxuICAgICAgMTQwLFxuICAgICAgMixcbiAgICAgIDIxNyxcbiAgICAgIDgsXG4gICAgICAxNDMsXG4gICAgICAyMyxcbiAgICAgIDcwLFxuICAgICAgMTU1LFxuICAgICAgMTU2LFxuICAgICAgMTAwLFxuICAgICAgNjMsXG4gICAgICAxOSxcbiAgICAgIDMzLFxuICAgICAgMTQxLFxuICAgICAgNTYsXG4gICAgICAyMDIsXG4gICAgICAxNixcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTjZWc0wwQ0VPVG0yYlFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJMNkdlL3JKZzlTenhKc2hEY011RVZBZEhEb3BnSHpNbkZkSy9GNURpU1NFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpSWUw3S0xuK05NeGZuaW5wVk5EckFpYkVHbUxVNjBOSmJ6am9PQUpvVW9kUzRvRXRlZlEwZWQyQ2dSbXVyeWNoOXJCQzJGU0xqeWdKTzg2WDlpRkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInh4czk1UnJ2dDBhTDY2V1lRUktnSzVTam82QlV6Y25OY1VtTEZKRW1aYlNlWFpmNGNZY3RFOU16QUFyMWVtZ3hXam5HOU5jN0dNTWZPUjVpcUJ2ZUR3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMTAzNzE0MDoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNlY3B0XCIsXG4gICAgXCJsaWRcIjogXCIxNzcyNDA4MzQ4OTYwNTU6MTVAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMxMDM3MTQwOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTM1OTc2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFU5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVSsuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNc3hYZk1QQTNJdFBuSWVTemNvVXEwanYwUjdYQWJQYXlHVDRnTVNTSnFFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTU4NjM5NyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NTA2MzQyODY2XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFU5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2ZFemk4YU8xWXpiV0dzSmQwSlMxbkQ3b3huSm41L2FYQ0VoWHFuZkQ4Zz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjU1ODYzOTcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTM1MTA0NjAxMVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURVX18uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJtVkR4VTlXRUJ3K3Vnbm9DQml5MVNzN1g1dDFKbjcwZENkZzQxOFdiTERVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTU4NjM5NyxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRFZBLmpzb24iOiAie1wia2V5RGF0YVwiOlwieUVzZlNzRlV4ZEtFbjZJWTJDRjJHSjh5MEZSdTZTY3NTREdqVHYwdlNYRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjU1ODYzOTcsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExMzUzNzEyNjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEVkIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI5d1pLRCtGWXBxdmJtZ1gvalh1TmltQ0FpVThwRlZDdEtzV0I4YzNTYzRBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2NTU4NjM5OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMTM1NTI5NDg4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ septorch²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ •  ᴛᴇᴄʜ』*\n "),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "septorch",
  ownername:process.env.OWNER_NAME|| "Septorch",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
