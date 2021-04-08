// This function will check whether Enter key is pressed or not? And if Enter key is pressed then call "Studybyte_search" function.
function IsEnter()
{
	let Original_Data = document.getElementById("GetValue").value;
	if (Original_Data != "")
	{
		if (event.keyCode == 13) Studybyte_search();
	}
}

// This function will try to send all of the data to "Studybyte_RESULTS" page.
function Studybyte_search()
{
	// These variables will send data from the search box.
	let Original_Data = document.getElementById("GetValue").value;
	let Lowercase_Data = Original_Data.toLowerCase();

	// This piece of code will try to send all of the data to "RESULTS" page, and if it's not possible then send to "ERROR" page.
	if (Original_Data != "")
	{
		try
		{
			if (Lowercase_Data.startsWith("g?"))
			{
				var Google_Search_Query = Lowercase_Data.replace("g?", "");
				window.location = "https://www.google.com/search?q=" + Google_Search_Query;
			}

			else if (Lowercase_Data.startsWith("yt?"))
			{
				var Google_Search_Query = Lowercase_Data.replace("yt?", "");
				window.location = "https://www.youtube.com/results?search_query=" + Google_Search_Query;
			}

			else
			{
				localStorage.setItem("Original", Original_Data);
				localStorage.setItem("Lowercase", Lowercase_Data);
				window.location = "RESULTS";
			}
		}

		catch (err) { window.location = "ERROR"; }
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
	RenderResults = Color(Query, ListOfLinks);
	for (var a = 0; a < RenderResults.length; a++)
	{
		for (var i = 0; i < NameOfLinks.length; i++)
		{
			if (RenderResults[a][1] == NameOfLinks[i].innerText && RenderResults[a][0] != 0)
			{
				ColorRender(NameOfLinks[i]);
				NumOFReults++;
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
	window.scrollTo(0, 0); // This piece of code will scroll the window to the TOP.
}
