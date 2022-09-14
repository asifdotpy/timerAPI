# Requests module helps us to call the api automatically.

import requests
import time

while True:
    requests.get("http://localhost:8081/stop")
    print("Timer stops for a minute,")
    time.sleep(60) # Approximate time for racing.
    requests.get("http://localhost:8081/start")
    print("Timer starts")
    time.sleep(5 * 60) 
