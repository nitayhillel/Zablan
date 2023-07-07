# Contributing Guidelines

Thank you for considering contributing to Zablan! We welcome contributions from the community to help expand the data coverage for different cities. 
To add a new city to the data, please follow the guidelines below:

1. Create a new GeoJSON file for your city's data. The file should be a valid FeatureCollection GeoJSON in the following format:

```json
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "gezem": "<collection_day>",
                "name": "<street_name>"
            },
            "geometry": {
                "type": "MultiLineString",
                "coordinates": [
                    [
                        [longitude, latitude],
                        [longitude, latitude],
                        ...
                    ],
                    ...
                ]
            }
        },
        ...
    ]
}
```
2. Replace the `<collection_day>` property with the collection day for the street (e.g., "שני", "שלישי", etc.) and the `<street_name>` property with the name of the street.
3. Add the LineString/MultiLineString coordinates for each street in the `coordinates` array. Each coordinate should be in the format `[longitude, latitude]`.
4. You can retrieve the collection days data from the local authorities' websites. Please make sure to comply with all applicable laws and regulations when accessing and using this data.
5. To extract the relevant street data, you can use Python or any other method to parse the OpenStreetMap (OSM) data file for your city. You can download the OSM data file for Israel and Palestine from [Geofabrik](https://download.geofabrik.de/asia/israel-and-palestine.html). The OSM data will provide the necessary street geometries.

Once you have added the data, please send the GeoJSON file to us via email or any other preferred method.
Please note that all contributions are subject to review and approval. We appreciate your effort in helping us expand the coverage of Zablan to more cities!

If you have any questions or need further assistance, please don't hesitate to reach out to us.

## License

By contributing to Zablan, you agree that your contributions will be licensed under the [MIT License](LICENSE).