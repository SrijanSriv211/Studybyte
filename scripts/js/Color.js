// Color is the main algorithm behind searching and giving results for query in Studybyte search engine.
function Color(Query, Links)
{
	var Rrv = RankResultValues(Query, Links); // This function will give some values, which will be used to rank results.
	var Cr = ColorRank(Rrv, Links); // This function will use the ranked values and assign them to the most relevant website.
	return Cr; // Return Cr.
}

// This function will remove all special chars from the string.
function RemoveSpecialChars(String)
{
	const Chars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~·";
	for (let i = 0; i < String.length; i++)
	{
		for (let a = 0; a < Chars.length; a++)
		{
			if (String[i] == Chars[a])
			{
				String = String.replaceAll(Chars[a], " ").replace(/\s+/g, " ").trim();
			}
		}
	}

	return String;
}

// This function check the search query and title of all websites letter by letter.
// This will then assign some values to each letter of every website with each letter of the user search query.
function MatchingWords(Query, ResultLinks)
{
	// Retrive and format the query and all indexed page links.
	Query = RemoveSpecialChars(Query).toLowerCase();
	ResultLinks = RemoveSpecialChars(ResultLinks).toLowerCase();
	
	let Rank = 0;
	if (Query == ResultLinks) Rank+=9;
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
	
		for (let i = 0; i < FormattedQuery.length; i++)
		{
			for (let a = 0; a < FormattedLinks.length; a++)
			{
				if (FormattedQuery[i] == FormattedLinks[a]) Rank++;
			}
		}
	}

	return Rank;
}

// This function will list all the values that were given by the Matching words function to an array.
function RankResultValues(Query, Links)
{
	var Rank_values = [];
	for (var Link = 0; Link < Links.length; Link++)
	{
		Rank_values.push(MatchingWords(Query, Links[Link]));
	}

	return Rank_values;
}

// This function will then merge all the values with their respected websites and return a Merged list.
function ColorRank(Values, Results)
{
	var MergedList = [];
	var ResultsOnlyToRank = [];
	for (var i = 0; i < Values.length; i++)
	{
		MergedList.push([Values[i], Results[i]]);
	}

	MergedList.sort().reverse();
	for (let i = 0; i < MergedList.length; i++)
	{
		if (MergedList[i][0] > 0) ResultsOnlyToRank.push(MergedList[i]);
	}

	return ResultsOnlyToRank;
}

// This function will help render website to the results page.
function ColorRender(ResultTitle, ResulstLink)
{
	var a = document.createElement("a");
	var li = document.createElement("li");
	var SiteList = document.getElementById("Results");

	// li.innerHTML = ResultTitle.link(ResulstLink);
	a.textContent = ResultTitle;
	a.setAttribute("href", ResulstLink);

	// This will render those websites which will get passed to it.
	li.appendChild(a);
	SiteList.appendChild(li);
}

// This funtion will peform basic arithmetic calculations based on your input.
function ColorCalc(arithmetic)
{
	let Calculate = 0;
	let Operators = "+-*x/";
	let Tokens = arithmetic.replace(/[!"#$%&'(),:;<=>?@[\]^_`{|}~]/g, "").trim();

	// The code below will split all the split all the numbers and operations.
	for (let a = 0; a < arithmetic.length; a++)
	{
		for (let o = 0; o < Operators.length; o++)
		{
			if (arithmetic[a] == Operators[o])
			{
				Tokens = Tokens.replaceAll(Operators[o], " " + Operators[o] + " ").replace(/\s+/g, " ").trim();
			}
		}
	}
	Tokens = Tokens.split(" ");

	// The code below will peform all the calculations based on the given input.
	// Set Calculate value to either 0 or the current result of last calculation.
	Calculate = parseFloat(Tokens[0]);
	for (let i = 0; i < Tokens.length; i+=2)
	{
		switch (Tokens[i+1]) // All the calculations are getting performed here.
		{
			case "+":
				Calculate += parseFloat(Tokens[i+2]);
				Tokens[i] = Calculate;
				break;

			case "-":
				Calculate -= parseFloat(Tokens[i+2]);
				Tokens[i] = Calculate;
				break;

			case "*":
			case "x":
				Calculate *= parseFloat(Tokens[i+2]);
				Tokens[i] = Calculate;
				break;

			case "/":
				Calculate /= parseFloat(Tokens[i+2]);
				Tokens[i] = Calculate;
				break;

			default: break; // If no case matches then just break.
		}
	}

	return Calculate; // Return result.
}
