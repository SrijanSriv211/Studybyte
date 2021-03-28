// This function will check whether Enter key is pressed or not?
function IsEnter()
{
	// If Enter key is pressed then call "Studybyte_search" function.
	if (event.keyCode == 13) Studybyte_search();
}

// This function will try to send all of the data to "Studybyte_RESULTS" page.
function Studybyte_search()
{
	// These variables will send data from the search box.
	var Original_Data = document.getElementById("GetValue").value;
	var Lowercase_Data = Original_Data.toLowerCase();

	// This piece of code will try to send all of the data to "Studybyte_RESULTS" page, and if it's not possible then send to "Studybyte_ERROR" page.
	try
	{
		localStorage.setItem("Original", Original_Data);
		localStorage.setItem("Lowercase", Lowercase_Data);
		window.location = "Studybyte_RESULTS.html";
	}

	catch (err) { window.location = "Studybyte_ERROR.html"; }
}

// This function is used to Process the Render the Search results.
function Studybyte_result()
{
	// These variables will receive data from the search box.
	let Original_Query = localStorage.getItem("Original");
	let Query = localStorage.getItem("Lowercase");
	document.title = Original_Query + " · Studybyte"; // Change the title of the page.

	// Global variables
	var NumOFReults = 0;
	var ListOfLinks = [];
	var RenderResults = [];

	const Chars = ["-", "_", "|", "/", ":", ".", "?", "!"];
	const NameOfLinks = document.getElementById("LinkList").getElementsByTagName("li");

	// This For Loop will Format the Query (Check and replace all the Chars with empty string).
	for (var Check = 0; Check < Chars.length; Check++)
	{
		if (Query.includes(Chars[Check])) Query = Query.trim().split(Chars[Check]).join(""); // Replace all the Special Chars with empty string.
	}

	// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
	for (var i = 0; i < NameOfLinks.length; i++)
	{
		ListOfLinks.push(NameOfLinks[i].innerText);
	}

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

	// This piece of code will Change the text of item with "NumOFLinks" id to the number of results.
	document.getElementById("NumOfLinks").innerHTML = NumOFReults + " results found!";

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "Studybyte_ERROR" page.
	if (NumOFReults == 0 || Query == undefined) window.location = "Studybyte_ERROR.html";
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\"."; // Render the QriginalQuery or the Searchterm.
	document.title = Original_Query + " · Studybyte"; // Change the title of the page.
}

// This function will Scroll the window to the TOP.
function SCROLLToTOP()
{
	window.scrollTo(0, 0); // This piece of code will scroll the window to the TOP.
}
