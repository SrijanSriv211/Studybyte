from colorama import Fore, Back, Style
from colorama import init
import socketserver
import http.server
import os

init(autoreset = True)

os.system('title Python server')
print(Fore.GREEN + "Python server")
PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print(f"Server at PORT: {PORT}\n------------------------------------------------------------------------------\n")
httpd.serve_forever()
