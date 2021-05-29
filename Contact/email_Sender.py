import cgi
formData = cgi.FieldStorage()
name = formData.getvalue('name')
email = formData.getvalue('email')
print(name)
print(email)