# These imports are important for this program to run.
from genericpath import isfile
import numpy, json, os

# Arrange words in such a way to form a logical sentence.
def ArrangeWords(Words):
    # A number will represent the number of empty strings in a list.
    # For example: 4 -> ["", "", "", ""].
    for i in Words:
        for j in i:
            if isinstance(j, int):
                EmptyList = [""] * j
                i.extend(EmptyList)
                i.remove(j)
                break

    GreetingSentence = [numpy.random.choice(i) for i in Words]

    # Reconstruct the string to form a logical sentence.
    FinalSentence = " ".join(GreetingSentence)
    rm_extra_spaces = " ".join(FinalSentence.split())
    return rm_extra_spaces

# The main code.
def ProcessJson(Filename):
    if not os.path.isfile(f"{Filename}.json"):
        with open(f"{Filename}.json", "w", encoding="utf-8") as file: file.write("")

    # Read the Json file.
    Json = open(f"{Filename}.json", "r", encoding="utf-8")
    Content = json.load(Json)
    for Data in Content["results"]:
        for i in Content["results"][Data]:
            SiteTitle = i["title"].split("http")[0]
            GenerateJson(Filename, SiteTitle, i["link"])

    # Close the Json file and Delete the Pages.json file.
    Json.close()
    os.remove(f"{Filename}.json")

def GenerateJson(Filename, Title, Link):
    if Link.endswith("/"): Link = Link[:-1] # Remove "/" from the ending of the link.

    # Write all the links and titles to a file in json manner.
    Pages = open(f"{Filename}.log", "a", encoding="utf-8")
    Pages.write('{\n')
    Pages.write(f'\t"Title": "{Title}",\n')
    Pages.write(f'\t"URL": "{Link}"\n')
    Pages.write('},\n')
    Pages.close()

# Generate Files.
print("Crawler")

list_of_queries = []
T1 = [
["class"], ["6", "7", "8", "9", "10", "11", "12", "all"],
["maths", "english", "hindi", "social science", "science", "physics", "chemistry", "biology", "economics", "civics", "history", "geography"],
["chapter"], ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "all"],
["learncbse", "byjus", "vedantu", "tiwari academy", "topper", "brainly", "youtube", 4],
["question answer", "notes", "explanation", "summary", 4]
]

S1 = ""
for i in range(1000):
    S1 = ArrangeWords(T1)

    if S1 in list_of_queries: continue
    list_of_queries.append(S1)

    print(f"\n{S1}")
    os.system(f'python Crawler.py -p 1 -q "{S1}" -o json,print -n Pages')
    ProcessJson("Pages")
