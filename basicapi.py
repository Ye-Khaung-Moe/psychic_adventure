import requests 

response = requests.get("https://httpbin.org/status/200")
print(response.status_code)
