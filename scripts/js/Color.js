// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
function Color(Query, Links)
{
	let Rrv = RankResultValues(Query, Links); // This function will give some values, which will be used to rank results.
	let Cr = ColorRank(Rrv, Links); // This function will use the ranked values and assign them to the most relevant website.
	return Cr; // Return Cr.
}

// This function will remove all special chars from the string.
function RemoveSpecialChars(String)
{
	String = String.replace(/[!\"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~·]/g, " ").trim()
	return String;
}

// This function check the search query and title of all websites letter by letter.
// This will then assign some values to each letter of every website with each letter of the user search query.
function MatchingWords(Query, ResultLinks)
{
	// Retrive and format the query and all indexed page links.
	Query = RemoveSpecialChars(Query);
	ResultLinks = RemoveSpecialChars(ResultLinks).toLowerCase();

	let Rank = 0;
	if (Query === ResultLinks) Rank += 72;
	else if (ResultLinks.startsWith(Query)) Rank += 70;
	else
	{
		let FormattedQuery = Query.split(" ");
		let FormattedLinks = ResultLinks.split(" ");
		FormattedQuery = FormattedQuery.filter(function(item, index, inputarr) {
			return inputarr.indexOf(item) == index;
		});

		FormattedLinks = FormattedLinks.filter(function(item, index, inputarr) {
			return inputarr.indexOf(item) == index;
		});

		for (let i of FormattedQuery)
		{
			if (FormattedLinks.includes(i))
				Rank++;
		}
	}

	return Rank;
}

// This function will list all the values that were given by the Matching words function to an array.
function RankResultValues(Query, Links)
{
	let Rank_values = [];
	for (let Link in Links) Rank_values.push(MatchingWords(Query, Links[Link]));
	return Rank_values;
}

// This function will then merge all the values with their respected websites and return a Merged list.
function ColorRank(Values, Results)
{
	let MergedList = [];
	let ResultsOnlyToRank = [];
	for (let i in Values) MergedList.push([Values[i], Results[i]]);

	MergedList.sort().reverse();
	for (let i in MergedList)
	{
		if (MergedList[i][0] > 0) ResultsOnlyToRank.push(MergedList[i]);
	}

	return ResultsOnlyToRank;
}

// This function will help render website to the results page.
function ColorRender(ResultTitle, ResulstLink)
{
	const a = document.createElement("a");
	const li = document.createElement("li");
	const SiteList = document.getElementById("Results");

	// li.innerHTML = ResultTitle.link(ResulstLink);
	a.textContent = ResultTitle;
	a.setAttribute("href", ResulstLink);

	// This will render those websites which will get passed to it.
	li.appendChild(a);
	SiteList.appendChild(li);
}

// This funtion will peform basic arithmetic calculations based on given expression input.
function ColorCalc(arithmetic)
{
	// ()+/*-.,%^
	const MultiplySign = arithmetic.replace("x", "*").trim();
	const rmExtraSpaces = MultiplySign.replace(/\s+/g, "");
	const FormatExpr = rmExtraSpaces.replace(/[a-zA-z!\"#$&':;<=>?@[\\\]_`{|}~·]/g, "");
	
	// Perform maths.
	try { return Function("return " + FormatExpr)(); }
	catch (err) { return NaN; }
}
