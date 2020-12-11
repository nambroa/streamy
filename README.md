To use this app you will need to run 3 servers locally.

- Go to /client and run `npm start`.
- Go to /streams/api and run `npm start` (this will run the json DB).
- Go to /streams/rtmpserver and run `npm start` (this will run the RTMP Server).
- After that, log in with your Google Credentials and create a stream. Take note
  of the stream ID.
- Run OBS and use the stream ID as your stream key when setting up the stream
  settings. For the server URL, use `rtmp://localhost/live`. For service, use
  `Custom`.
