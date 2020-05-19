# App Store Scraper

Contains scripts to scrape the Category of an app from the Play Store/App Store based on its Bundle ID. Developed for a particular use-case at my work. Might be helpful for similar needs.

* play-store-category-scraper (for Android): Python Notebook which reads the Bundle IDs from a CSV file and returns a CSV with the corrsponding categories utilizing the Pandas library. Uses the play-scraper library by Danieliu (https://github.com/danieliu/play-scraper)
* app-store-category-scraper (for iOS): JS Script which returns a list of the Bundle IDs and its corresponding Category array to a file based on inputs. Uses the app-store-scraper library by facundoolano (https://github.com/facundoolano/app-store-scraper)