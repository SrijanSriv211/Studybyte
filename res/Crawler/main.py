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

# The main code.
def ProcessJson(Filename):
    # open("Pages.log", "w").write("") # Clear the Pages.log file.

    # Read the Json file.
    Json = open(f"{Filename}.json", "r", encoding="utf-8")
    Content = json.load(Json)
    for Data in Content["results"]:
        for i in Content["results"][Data]:
            SiteTitle = i["title"].split("http")[0]
            GenerateJson(SiteTitle, i["link"])

    # Close the Json file and Delete the Pages.json file.
    Json.close()
    os.remove(f"{Filename}.json")

def GenerateJson(Title, Link):
    if Link.endswith("/"): Link = Link[:-1] # Remove "/" from the ending of the link.

    # Ignore results from some websites.
    for i in LinksToExclude:
        if i in Link.lower(): return None

    # Write all the links and titles to a file in json manner.
    Pages = open("Pages.log", "a", encoding="utf-8")
    Pages.write("{\n")
    Pages.write(f"\t\"Title\": \"{Title}\",\n")
    Pages.write(f"\t\"URL\": \"{Link}\"\n")
    Pages.write("},\n")
    Pages.close()

# Generate Files.
os.system(f"python Crawler.py -e google,bing,duckduckgo -p 1 -i -q \"{Query}\" -o json,print -n Pages")
ProcessJson("Pages")

# Exit the program.
if len(sys.argv) >= 3:
    if sys.argv[2].lower() == "-q":
        os.system("echo|set /p=\"Continue.\"")
        os.system("pause>nul")
        sys.exit()

    else:
        print(f"Incorrect Flag.")
