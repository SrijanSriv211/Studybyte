# Search On Multiple Topics At Once
import sys
import os

# Iterate and Crawl pages given in the text file
def main():
    Filename = sys.argv[1] # Take the filename from the command-line

    # If file exists else move on.
    if os.path.isfile(Filename):
        with open(Filename, "r", encoding="utf-8") as File:
            Lines = File.readlines()
            for Line in Lines:
                Line = Line.strip()
                if not Line:
                    continue

                print(f"Search query: {Line}")
                os.system(f"python main.py \"{Line}\"")

    else:
        print(f"This file '{Filename}' doesn't seem to exist.")

# Run the program
if __name__ == "__main__":
    main() # Call the main function
    sys.exit() # Exit the program
