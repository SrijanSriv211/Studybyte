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
	let Original_Data = document.getElementById("GetValue").value;
	let Lowercase_Data = Original_Data.toLowerCase();

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
	// Global variables
	let Original_Query = localStorage.getItem("Original");
	let Query = localStorage.getItem("Lowercase");

	var NumOFReults = 0;
	var ListOfLinks = [];
	var RenderResults = [];

	const SpecialChars = [".", "?", "!"];
	const Chars = ["-", "|", "/", "·"];
	const NameOfLinks = document.getElementById("LinkList").getElementsByTagName("li");

	// This For Loop will Format the Query.
	for (var Check = 0; Check < SpecialChars.length; Check++)
	{
		if (Query.includes(SpecialChars[Check])) Query = Query.trim().split(SpecialChars[Check]).join(""); // Replace all the Special Chars with another string.
	}

	for (var Check = 0; Check < Chars.length; Check++)
	{
		if (Query.includes(Chars[Check])) Query = Query.trim().split(Chars[Check]).join(" "); // Replace all the Special Chars with another string.
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

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "Studybyte_ERROR" page.
	if (NumOFReults == 0 || Query == undefined) window.location = "Studybyte_ERROR.html";

	// This piece of code will Change some window properties.
	document.getElementById("NumOfLinks").innerHTML = NumOFReults + " results found!";
	document.getElementById("GetValue").value = Original_Query;
	document.title = Original_Query + " · Studybyte"; // Change the title of the page.
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Original_Query = localStorage.getItem("Original");

	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\"."; // Render the QriginalQuery or the Searchterm.
	document.getElementById("GetValue").value = Original_Query;
	document.title = Original_Query + " · Studybyte"; // Change the title of the page.
}

// This function will Scroll the window to the TOP.
function SCROLLToTOP()
{
	window.scrollTo(0, 0); // This piece of code will scroll the window to the TOP.
}
