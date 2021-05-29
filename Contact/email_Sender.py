import json
import urllib3
url = 'http://127.0.0.1:5500/Contact/contact.html'
http = urllib3.PoolManager()
response = http.request('POST',url,fields={'name':"email"})
email_data = json.loads(response.data.decode('utf-8'))
print(email_data)