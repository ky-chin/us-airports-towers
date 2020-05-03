# us-airports

https://github.com/jakobzhao/geog458/blob/master/labs/lab03/readme.md

airports.geojson contains all the airports in the United States. This data is converted from a shapefile, which was downloaded and unzipped from https://catalog.data.gov/dataset/usgs-small-scale-dataset-airports-of-the-united-states-201207-shapefile. For each airport feature, the field CNTL_TWR indicates whether the airport has an air traffic control tower or not. If there is a tower, the value of CNTL_TWR is 'Y', otherwise 'N'. You may need to find an appropriate icon on font awesome. (7 points)

us-states.geojson is a geojson data file containing all the states' boundaries of the United States. This data is acquired from Mike Bostock of D3. The count field indicates the number of airports within the boundary of the state under investigation. So please make a choropleth map based on the number of airports within each state. (7 points)

an appropriate basemap; (7 points)

some interactive elements, like a clickable marker; (8 points)

some map elements, such as legend, scale bar, credit; (8 points)

write up a project description in the readme.md file. This file will introduce the project name, a brief introduction, the primary functions(especially the function which was not covered in the lectures), libraries, data sources, credit, acknowledgment, and other necessary information. (8 points)

you will need to synchronize this project to a GitHub repository. And make sure the web map is accessible from a URL link, which should be similar to http://[your_github_username].github.io/[your_repository_name]/index.html. (To do that, you may want to check out a previous lecture or lab handouts on how to host a repository on GitHub pages.); (6 points)

Note: Please make sure the name of your repository is NOT lab03 or similar, use a name that can describe the theme of the map you will make. Think about that, which one do you prefer? - showing your future employer or Ph.D. admission committee a lot of course work on GitHub or a list of professional projects.

please make sure the internal structure of the files in your project repository is well organized. For example, it may be similar to the file structure below. (5 points)
[your_repository_name]
    │index.html
    │readme.md
    ├─assets
    │      airports.geojson
    │      us-states.geojson
    ├─css
    │      main.css
    ├─img
    │      xxx.jpg
    └─js
            main.js
Finally, submit your repository URL under Lab 3. An integrative web mapping on Canvas.
Optional tasks:
Try to add on a feature of the leaflet which we have not discussed in class. The new features can be found on the plugin page of the leafet. (5 points)
Reference


# things to do
- change symbol for airports/towers
- change params for the number of airports?
- add imgs folder
- make map accessible online
- extra features?
- write description
