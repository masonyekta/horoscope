# Apify Configuration

-   Setup a web scraper task using apify/web-scraper.
-   In Basic Configuration, for the start url use `https://nypost.com/horoscopes/`
-   Enter the following code for Page function

```js
async function pageFunction(context) {
	// jQuery for finding DOM elements and extracting data from them.
	const $ = context.jQuery
	const horoscopes = [] // empty array to hold all horoscopes

	$('.horoscope').each((index, horoscopeEl) => {
		const horoscope = $(horoscopeEl)

		// get horoscope details
		const heading = horoscope.find('h3')
		const month = heading.children().last().text().replace(/ .*/, '')
		const title = month.substr(0, 1).toUpperCase() + month.substr(1)
		const date = horoscope.find('.horoscope__date')
		const content = horoscope.find('.horoscope__description p')

		// extract all horoscope data
		if (title.length !== 0) {
			horoscopes.push({
				title: title.replace(/([^a-z0-9]+)/gi, ''),
				date: date
					.first()
					.text()
					.replace(/([^a-z0-9 -]+)/gi, ''),
				content: content.first().text(),
				slug: title.replace(/([^a-z0-9]+)/gi, '').toLowerCase(),
			})
		}
	})

	// return all horoscopes
	return horoscopes
}
```

-   Visite Tasks > Settings and Basic settings to get the task ID
-   Visit <https://console.apify.com/account?tab=integrations> to create a token
-   Additionaly create a scheduling in Apify to run the task every night (ex: at 3AM)
-   Configure the webhook in integrations to trigger a build when task is successful
