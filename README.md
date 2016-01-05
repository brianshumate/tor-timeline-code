# Tor Timeline

This is the source code for 
[Tor Timeline](http://tor-timeline.brianshumate.com), a historical timeline of
activities and events related to Tor software, the Tor network, and the
Tor Project.

I have tried to fact-check all content appearing on this timeline, but I am
human, so if you spot a mistake please file an issue or pull request to
correct it.

## Usage

This project uses the Node.js based [Metalsmith](http://www.metalsmith.io/)
static site generator. To use the project locally, make sure you have Node.js
version 4.0.0 or higher installed, and do the following to clone this
repository, install dependencies, build, and launch a development site in
[BrowserSync](https://www.browsersync.io/):

```
git clone https://github.com/brianshumate/tor-timeline-code.git
cd tor-timeline-code
npm install
make serve
```

If you just want to build the site, you can run the following from within
the repository clone directory:

```
make build
```

Output will appear in the `build` subdirectory.

## Contributing

If you'd like to help with this timeline, your contributions will be most
welcome! Just fork the repository, add your fact-checked entries to the
appropriate place in `src/data/ttl.json` and make a pull request.

The format of the events JSON is that used by 
[TimelineJS3](https://github.com/NUKnightLab/TimelineJS3) and looks like this:

```json
{
  "start_date": {
    "year": "1900",
    "month": "01",
    "day": "05",
    "hour": "",
    "minute": "",
    "second": "",
    "millisecond": "",
    "format": ""
  },
  "end_date": {
    "year": "1900",
    "month": "06",
    "day": "07",
    "hour": "",
    "minute": "",
    "second": "",
    "millisecond": "",
    "format": ""
  },
  "media": {
    "caption": "",
    "credit": "",
    "url": "url_to_your_media.jpg",
    "thumbnail": "url_to_your_media.jpg"
  },
  "text": {
    "headline": "Headline Goes Here",
    "text": "Your slide text goes here."
  }
}
```

For multi-day activities or events set the `start_date` and `end_date`
accordingly, or set them to the same value for a single day event. See the
[TimelineJS3 README](https://github.com/NUKnightLab/TimelineJS3) for 
more information.

## Thanks

- Credit for media elements used in this timeline appears in the humans.txt
