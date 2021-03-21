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

// This is the main algorithm behind the Studybyte search engine.
function Studybyte_result()
{
	// These variables will receive data from the search box.
	let Original_Query = localStorage.getItem("Original");
	let Query = localStorage.getItem("Lowercase");
	document.title = Original_Query + " - Studybyte"; // Change the title of the page.

	// Global variables
	var CountHiddenLinks = 0;
	const Chars = [" ", "-", "_", ".", "?", "!"];
	const NameOfLinks = document.getElementById("LinkList").children;


	// The For Loop will check and replace all the Chars with empty string.
	for (var Check = 0; Check < Chars.length; Check++)
	{
		if (Query.includes(Chars[Check])) Query = Query.split(Chars[Check]).join(""); // Replace all the Special Chars with empty string.
	}

	// This For Loop will check if there are links for the Query given, and hide those links which didn't match.
	for (var i = 0; i < NameOfLinks.length; i++)
	{
		if (Query.includes(NameOfLinks[i].id) == false)
		{
			document.getElementById(NameOfLinks[i].id).style.display = "none"; // Hide all the links that doesn't match with the Query.
			CountHiddenLinks++; // Do +1 in CountHiddenLinks variable every single time when it finds that the current link doesn't match the Query.
		}
	}

	// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "Studybyte_ERROR" page.
	if (CountHiddenLinks == NameOfLinks.length || Query == undefined) window.location = "Studybyte_ERROR.html";
}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Original_Query = localStorage.getItem("Original");
	document.getElementById("Searchterm").innerHTML = "Your search term was \"" + Original_Query + "\"."; // Render the QriginalQuery or the Searchterm.
	document.title = Original_Query + " - Studybyte"; // Change the title of the page.
}
