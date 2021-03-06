# animated-overlay
HTML/CSS/jQuery powered overlay for OBS

See it in action over at https://twitch.tv/aj_fuhr

# Initial Setup
You will need the following:
- A local web server (MAMP for MacOS, XAMP for Windows)
- A text editor (SublimeText, Notepad++, Atom, VSCode)
- Streamlabels Desktop App, and the full path of where the app stores its text files

Download and install the local web server and set the server's Document Root to the full path of where Streamlabels stores its text files that contain your most recent followers, subscribers, cheers, and donors.

- For MAMP, simply click "Preferences", then "Web Server", then click the folder icon next to "Document Root" and select the applicable folder. For me, this is in /Users/aaron/Documents/Streamlabels, but it may be different for you. Restart MAMP and click "Start Server".
- For XAMP, it's a little more involved. You'll have to directly edit the web server's httpd.conf file to set the Document Root. To do this, open up XAMP, and in the row for Apache, click "Config" and select the httpd.conf file. Open this in your text editor and search for "Document Root", then replace the default path with the path where Streamlabels stores its text files. An example would be "C:\Program Files\Streamlabels\Twitch", but this is JUST an example and will be different for you. Next, underneath where you added that path, there will be a `<Directory>` tag. Change that path within this tag to the same path you used above. Save the file and restart XAMP, then click "Start" next to Apache.
  
# Installing the Overlay
Download this repository into the folder Streamlabels stores its text files. Make sure it is a sub-directory of this folder, eg. "C:\Program Files\Streamlabels\Twitch\animated-overlay\".

Open up the animated-overlay.html file and replace "AJ_FUHR" with your Twitch username in the "twitch-name" container and your Twitter handle in the "twitter-name" container. 

Open up the css/style.css file and the js/app.js and follow the comments to adjust the settings as you see fit. In css/style.css, you may update the font, container width, font size, and colors. In js/app.js, ONLY update the social_container_width variable on the second line of the file to match what you used in css/style.css file for the #social-container.

Please note that, in css/style.css, the #alert-container's width property should not exceed the #social-container's width property. It can be smaller or equal to, but NOT larger.

# Viewing
Load up your web browser, and with your web server running, point it to http://localhost/animated-overlay/animated-overlay.html

# Adding to OBS
With your web server running, create a new browser source and point it to http://localhost/animated-overlay/animated-overlay.html and use the dimensions 1920x1080.

The web server will need to be running while you stream, so make sure you start it BEFORE opening OBS. If you forget to start the web server prior to opening OBS, you can start the web server with OBS running, then right click on the browser source, click "Properties", and click "Refresh No Cache" at the bottom of the properties window.
