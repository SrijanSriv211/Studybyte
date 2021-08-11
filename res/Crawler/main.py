# These imports are important for this program to run.
import json
import sys
import os

# Setup
os.system("title Crawler")
print("Crawler.")

# All the queries
Query = sys.argv[1].lower()
LinksToExclude = ["facebook", "twitter", "reddit", "quora", "instagram", "amazon", "play.google", "apps.apple", "pinterest"]

# Get the History of all crawled sites.
if os.path.isfile("History.log"): Links = [open("History.log", "r").read()]
else: Links = []

# The main code.
def ProcessJson(Filename):
    open("Pages.log", "w").write("") # Clear the Pages.log file.

    # Read the Json file.
    Json = open(f"{Filename}.json", "r", encoding="utf-8")
    Content = json.load(Json)
    for Data in Content["results"]:
        for i in Content["results"][Data]:
            GenerateJson(i["title"], i["link"])

    # Close the Json file.
    Json.close()

def GenerateJson(Title, Link):
    global Links # Get the global Links list.

    # Delete the Pages.json file.
    os.remove("Pages.json")

    # Remove "/" from the ending of the link,
    # Check whether any link is repeating, and if yes, then don't write it to the memory.
    if Link.endswith("/"): Link = Link[:-1]
    if len(Links) > 0:
        for i in Links:
            if i == Link: return None

    # If the link is provided by these sites then ignore them.
    for LTE in LinksToExclude:
        if LTE in Link.lower(): return None

    # Write all the links and titles to a file in json manner.
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
os.system("pause>nul")
sys.exit()
