// This function will check whether Enter key is pressed or not?
function IsEnter()
{
	let Original_Data = document.getElementById("GetValue").value;

	// Call "Studybyte_search" function.
	// If Enter key is pressed and search query is not an empty string.
	if (Original_Data != "")
	{
		if (event.keyCode == 13) Studybyte_search();
	}
}

// This function will focus the searchbar when Escape key is pressed.
function Searchbar_Properties()
{
	var Searchbar = document.getElementById("GetValue");
	document.addEventListener('keydown', function(e)
	{
		if (event.keyCode == 27) Searchbar.focus();
	});
}

// This function will try to send all of the data to "Studybyte_RESULTS" page.
function Studybyte_search()
{
	// These variables will send data from the search box.
	let Original_Data = document.getElementById("GetValue").value;
	let Lowercase_Data = Original_Data.toLowerCase().trim();

	// This piece of code will try to send all of the data to "RESULTS" page, and if it's not possible then send to "ERROR" page.
	if (Original_Data != "")
	{
		try
		{
			if (Lowercase_Data.startsWith("g?")) // This is the search tag for Google, which will help to search directly to Google from Studybyte.
			{
				let Google_Search_Query = Lowercase_Data.replace("g?", "");
				window.open("https://www.google.com/search?q=" + Google_Search_Query, "_blank");
			}

			// This is the search tag for YouTube.
			// This will help user to search directly to YouTube from Studybyte's search box.
			else if (Lowercase_Data.startsWith("yt?"))
			{
				let YouTube_Search_Query = Lowercase_Data.replace("yt?", "");
				window.open("https://www.youtube.com/results?search_query=" + YouTube_Search_Query, "_blank");
			}

			// This is the search tag for Britannica.
			// This will help user to search directly to Britannica from Studybyte's search box.
			else if (Lowercase_Data.startsWith("eb?"))
			{
				let Britannica_Search_Query = Lowercase_Data.replace("eb?", "");
				window.open("https://www.britannica.com/search?query=" + Britannica_Search_Query, "_blank");
			}

			// This is help perform basic calculations in Studybyte.
			else if (Lowercase_Data.includes("+") || Lowercase_Data.includes("-") || Lowercase_Data.includes("*") || Lowercase_Data.includes("/"))
			{
				var CalculatedData = ColorCalc(Lowercase_Data);
				if (isNaN(CalculatedData))
				{
					// None of the other conditions match.
					// Assume that there is no search tags or mathematical operations running.
					// Redirect the user to the results page, then rank and show results accordingly.
					localStorage.setItem("Original", Original_Data);
					localStorage.setItem("Lowercase", Lowercase_Data);
					window.location = "RESULTS";
				}

				else if (!isNaN(CalculatedData)) alert(Lowercase_Data.trim() + " = " + CalculatedData);
			}

			else
			{
				// None of the other conditions match.
				// Assume that there is no search tags or mathematical operations running.
				// Redirect the user to the results page, then rank and show results accordingly.
				localStorage.setItem("Original", Original_Data);
				localStorage.setItem("Lowercase", Lowercase_Data);
				window.location = "RESULTS";
			}
		}

		catch (err)
		{
			window.location = "ERROR";
		}
	}
}

// This function is used to Process the Render the Search results.
function Studybyte_result()
{
	// Global variables
	let Query = localStorage.getItem("Lowercase");
	let Original_Query = localStorage.getItem("Original");

	var NumOFReults = 0;
	var ListOfLinks = [];
	var RenderResults = [];

	const NameOfLinks = document.getElementById("LinkList").getElementsByTagName("li");
	const Chars = [
		[".", "?", "!"],
		["-", "|", "/", "·"]
	];

	// This For Loop will Format the Query.
	for (var i = 0; i < Chars.length; i++)
	{
		for (var a = 0; a < Chars[i].length; a++)
		{
			if (i == 0) Query = Query.trim().split(Chars[0][a]).join(""); // Replace all the Special Chars with an empty string.
			if (i == 1) Query = Query.trim().split(Chars[1][a]).join(" "); // Replace all the Special Chars with a white-space.
		}
	}

	// This For Loop will push all the link titles to ListOfLinks array.
	for (var i = 0; i < NameOfLinks.length; i++)
	{
		ListOfLinks.push(NameOfLinks[i].innerText);
	}

	// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
	RenderResults = Color(Query, ListOfLinks); // This function will provide you a complete list of all the websites with a ranked value.

	// This will remove the website with the ranked value of 0, then render the rest to the results page.
	for (var a = 0; a < RenderResults.length; a++)
	{
		for (var i = 0; i < NameOfLinks.length; i++)
		{
			if (RenderResults[a][1] == NameOfLinks[i].innerText && RenderResults[a][0] != 0)
			{
				ColorRender(NameOfLinks[i]);
				NumOFReults++; // Do +1 every time a new website link is rendered to the page.
			}
		}
	}

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "ERROR" page.
	if (NumOFReults == 0 || Query == undefined) window.location = "ERROR";

	// This piece of code will Change some window properties.
	document.getElementById("NumOfLinks").innerHTML = NumOFReults + " results found!";
	document.getElementById("GetValue").value = Original_Query;
	document.title = Original_Query + " - Studybyte"; // Change the title of the page.
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Original_Query = localStorage.getItem("Original");

	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\"."; // Render the QriginalQuery or the Searchterm.
	document.getElementById("GetValue").value = Original_Query;
	document.title = Original_Query + " - Studybyte"; // Change the title of the page.
}

// This function will Scroll the window to the TOP.
function SCROLLToTOP()
{
	window.scrollTo(0, 0);
}

// This function will Check if Scrollbar is at the TOP or not.
function SCROLLToTOP_Properties()
{
	var SCROLLToTOP_Button = document.getElementById("ScrollToTop");
	window.addEventListener('scroll', function()
	{
		if (document.documentElement.scrollTop == 0)
		{
			SCROLLToTOP_Button.style.opacity = "0";
			SCROLLToTOP_Button.style.visibility = "hidden";
		}

		else
		{
			SCROLLToTOP_Button.style.visibility = "visible";
			SCROLLToTOP_Button.style.opacity = "1";
		}
	}, true);
}
