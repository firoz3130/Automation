import { google, sheets_v4 } from 'googleapis'
const auth = new google.auth.GoogleAuth({
    keyFile: './gcp-service-key.json',
    scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
    ],
});

const authClient = await auth.getClient();
google.options({ auth: authClient });

const sheets = google.sheets('v4').spreadsheets.values;

export const getTeamList = async () => await sheets.get(
    { spreadsheetId: '1eWmQiX8-aCLo9yrOVJ9QYtLZ5GFUeOWI8U3uu-C34AM', range: 'A1:L51' }
)
//add into sheets attendance details
export const addAttendance = async (username, time) => {
    await sheets.append({
        spreadsheetId: '1S0ccNG0T4Msx3Hp6feCz7xWFCS2cwnKlEu0ovAXQ9I0',
        range: 'A2:A45',
        valueInputOption: 'RAW',
        insertDataOption: 'INSERT_ROWS',
        resource: {
            values: [[username, time]],
        },
    });
}

//1Q4M3TkS2CCAhYl6En8ihOqcAFdpQR6i1R2fBunveUY0
//1eWmQiX8-aCLo9yrOVJ9QYtLZ5GFUeOWI8U3uu-C34AM