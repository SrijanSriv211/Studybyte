// This function will check whether Enter key is pressed or not?
function IsEnter()
{
	let Original_Data = document.getElementById("Searchbar").value;

	// Call "Studybyte_search" function.
	// If Enter key is pressed and search query is not an empty string.
	if (Original_Data != "")
	{
		if (event.keyCode == 13) TryToSearch();
	}
}

// This function will focus the searchbar when Escape key is pressed.
function FocusSearchbarOnEsc()
{
	var Searchbar = document.getElementById("Searchbar");
	document.addEventListener('keydown', function(e)
	{
		if (event.keyCode == 27) Searchbar.focus();
	});
}

// This function will be used to for search tags.
function SearchTags(Query, SearchTag, Link)
{
	if (Query.startsWith(SearchTag))
	{
		let Search_Query = Query.replace(SearchTag, "");
		window.open(Link + Search_Query.trim(), "_blank");

		return true;
	}

	else return false;
}

// This function will try to send all of the data to results page.
function TryToSearch()
{
	// These variables will send data from the search box.
	let OriginalQuery = document.getElementById("Searchbar").value;
	let FormatedQuery = OriginalQuery.toLowerCase().trim();

	// This piece of code will try to send all of the data to results page,
	// and if it's not possible then send to error page.
	if (OriginalQuery != "")
	{
		try
		{
			if (SearchTags(FormatedQuery, "g?", "https://www.google.com/search?q="));
			else if (SearchTags(FormatedQuery, "yt?", "https://www.youtube.com/results?search_query="));
			else if (SearchTags(FormatedQuery, "eb?", "https://www.britannica.com/search?query="));
			else if (SearchTags(FormatedQuery, "git?", "https://github.com/search?q="));
			else if (SearchTags(FormatedQuery, "bing?", "https://www.bing.com/search?q="));
			else if (SearchTags(FormatedQuery, "pdfdrive?", "https://www.pdfdrive.com/search?q="));
			else if (SearchTags(FormatedQuery, "ddg?", "https://duckduckgo.com/?q="));
			else if (SearchTags(FormatedQuery, "gs?", "https://scholar.google.com/scholar?q="));
			else if (FormatedQuery.includes("+") || FormatedQuery.includes("-") || FormatedQuery.includes("*") || FormatedQuery.includes("x") || FormatedQuery.includes("/"))
			{
				let CalculatedAns = ColorCalc(FormatedQuery);
				if (isNaN(CalculatedAns))
				{
					// Redirect the user to the results page, then rank and show results accordingly.
					localStorage.setItem("OriginalQuery", OriginalQuery);
					localStorage.setItem("FormatedQuery", FormatedQuery);
					window.location = "r.html";
				}

				else if (!isNaN(CalculatedData)) alert(OriginalQuery.replace(/\s+/g, " ").trim() + " = " + CalculatedAns);
			}

			else
			{
				// Redirect the user to the results page, then rank and show results accordingly.
				localStorage.setItem("OriginalQuery", OriginalQuery);
				localStorage.setItem("FormatedQuery", FormatedQuery);
				window.location = "r.html";
			}
		}

		catch (err)
		{
			window.location = "e.html";
		}
	}
}

function GetResults()
{
	var SearchIndex = [];
	fetch("scripts/CrawledPages.json").then(response => response.json()).then(data =>
		{
			for (let i = 0; i < (data.Pages).length; i++)
				SearchIndex.push([data.Pages[i].Title, data.Pages[i].URL]);

			// Retrive the query.
			let OriginalQuery = localStorage.getItem("OriginalQuery");
			let FormatedQuery = localStorage.getItem("FormatedQuery");
			
			// Change the title of the page.
			document.title = OriginalQuery + " - Studybyte";
			let NumOFReults = 0;
			let ListResults = [];
			let ListOfSites = [];
			
			// Get all the links and titles of all indexed pages.
			for (let i = 0; i < SearchIndex.length; i++)
				ListOfSites.push(SearchIndex[i][0]);
			
			// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
			ListResults = Color(FormatedQuery, ListOfSites);
			for (let i = 0; i < ListResults.length; i++)
			{
				for (let a = 0; a < ListOfSites.length; a++)
				{
					if (ListResults[i][1] == ListOfSites[a])
					{
						ColorRender(SearchIndex[a][0], SearchIndex[a][1]);
						NumOFReults++;
					}
				}
			}
			
			// This piece of code will check whether the number of hidden links are equal to total number of links, and if yes or if the Query is undefined then send to "ERROR" page.
			if (NumOFReults == 0 || FormatedQuery == undefined) window.location = "e.html";
			document.getElementById("NumOfResults").innerHTML = NumOFReults + " results found!"; // This piece of code will Change some window properties.
			document.getElementById("Searchbar").value = OriginalQuery;
		});

}

// If you are redirected to "ERROR" page then this function will add the Original_Query to "Your search term was" and render it.
function Showerror()
{
	// Set the value of search term which was given in the search box.
	let Query = localStorage.getItem("OriginalQuery");

	document.getElementById("Searchbar").value = Query;
	document.title = Query + " - Studybyte"; // Change the title of the page.
}

// This function will Scroll the window to the TOP.
function ScrollToTOP()
{
	window.scrollTo(0, 0);
}

function ScrollToTOP_Properties()
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
