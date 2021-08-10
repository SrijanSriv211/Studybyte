# These imports are important for this program to run.
import json
import sys
import os

# Setup
os.system("title Crawler")
print("Crawler.")

# All the queries
Query = sys.argv[1].lower()
if os.path.isfile("History.log"): Links = [open("History.log", "r").read()]
else: Links = []

# The main code.
open("Pages.log", "w").write("")
def ProcessJson(Filename):
    Json = open(f"{Filename}.json", "r", encoding="utf-8")
    Content = json.load(Json)
    for Data in Content["results"]:
        for i in Content["results"][Data]:
            GenerateJson(i["title"], i["link"])

    Json.close()

def GenerateJson(Title, Link):
    if Link.endswith("/"): Link = Link[:-1]
    if len(Links) > 0:
        for i in Links:
            if i == Link: return None

    Links.append(Link)
    with open("History.log", "a", encoding="utf-8") as History: History.write(f"{Link}\n")
    with open("Pages.log", "a", encoding="utf-8") as File:
        File.write("{\n")
        File.write(f"\t\"Title\": \"{Title}\",\n")
        File.write(f"\t\"URL\": \"{Link}\"\n")
        File.write("},\n")

# Generate Files.
os.system(f"python Crawler.py -e google,bing,duckduckgo -p 1 -i -q \"{Query}\" -o json,print -n Pages")
ProcessJson("Pages")

# Exit the program.
os.system("echo|set /p=\"Continue.\"")
os.remove("Pages.json")
os.system("pause>nul")
sys.exit()
