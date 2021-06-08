# Python server
# These IMPORTS are IMPORTANT!
from colorama import Fore, Back, Style
from colorama import init
import socketserver
import http.server
import webbrowser
import os

# Initialize Python server
init(autoreset = True)
os.system('title Python server')
print(Fore.GREEN + "Python server")
class HttpRequestHandler(http.server.SimpleHTTPRequestHandler):
	def do_GET(self):
		if self.path == '/': self.path = 'index.html'
		return http.server.SimpleHTTPRequestHandler.do_GET(self)

# Create an object of the above class and Create Global variables
Handler = HttpRequestHandler
INCOGNITO = "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe %s --incognito"
PORT = 8000

HOST = f"http://127.0.0.1:{PORT}"

# Setup the server
Server = socketserver.TCPServer(("", PORT), Handler)
print(f"Server at PORT: {HOST}")
webbrowser.get(INCOGNITO).open(HOST) # This will open the file in Chrome's incognito mode, this will make things run on their default settings.

# Start the server
Server.serve_forever()
