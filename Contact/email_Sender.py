from email import message
from googleapiclient.discovery import build
from google.oauth2 import service_account

SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
SERVICE_ACCOUNT_FILE = 'Contact/keys.json'

credentials = None
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)



# If modifying these scopes, delete the file token.json.
SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly']

# The ID and range of a sample spreadsheet.
SAMPLE_SPREADSHEET_ID = '1j5L46F8Js0HsQ4-VmHYqg7EMONcT7DLawm5_YXaRxdk'


def main():
    """Shows basic usage of the Sheets API.
    Prints values from a sample spreadsheet.
    """
service = build('sheets', 'v4', credentials=credentials)

# Call the Sheets API
sheet = service.spreadsheets()
result = sheet.values().get(spreadsheetId=SAMPLE_SPREADSHEET_ID,
                            range="Sheet1!A1:B30").execute()
values = result.get('values', [])

emails = []
names = []
for i in range(1,len(values)):
    names.append(values[i][0])
    emails.append(values[i][1])
    #sending emails_________________________________________________________
    import smtplib
    # set up the SMTP server
    s = smtplib.SMTP(host='smtp.gmail.com', port=587)

    s.starttls()
    s.login('Mr.Scott.TheEmailBot@gmail.com', 'scottbot99')
    from email.mime.multipart import MIMEMultipart
    from email.mime.text import MIMEText
    message = "Hello ,You have been reached out by Vangmay's very handy bot who exists so he can send emails.I am exited to know the reason you wanted to contact me. mailto:vangmay.sachan16@gmail.com"
    msg = MIMEMultipart()
    msg['From'] = 'mr.scott.theemailbot@gmail.com'
    msg['To'] = 'vincetheutuber@gmail.com'
    msg['Subject'] = "Hello there!"
    msg.attach(MIMEText(message,'plain'))
    s.send_message(msg)
    del msg
    #sending emails_________________________________________________________

#to remove data
blank = [["",""]]
empty_rows = []
for i in range(0,len(names)):
    empty_rows = empty_rows + blank
request = sheet.values().update(spreadsheetId=SAMPLE_SPREADSHEET_ID,range="Sheet1!A2", valueInputOption = "USER_ENTERED",body={"values":empty_rows}).execute()
#to remove data
print( names)
print( emails)