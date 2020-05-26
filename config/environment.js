const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');

const logDirectory= path.join(__dirname, '../production_logs');

fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const accessLogStream = rfs.createStream('access.log',{
    interval: '1d',
    path: logDirectory
});

const development={
    name: 'development',
    asset_path: '/assets',
    session_cookie_key: 'blahsomething',
    db: 'codeial_development',
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
        user: 'rajatlohia1108@gmail.com',
        pass: '1234'
        }
    },
    google_client_ID: "1033342117050-46upkd6s8lb33fva7cdtk0biv92u44qv.apps.googleusercontent.com",
    google_client_secret: "Vo79YPKZQXYQamwE_pMOks9X",
    google_callbackURL: "http://localhost:8000/users/auth/google/callback",
    jwt_secret: 'codeial',
    morgan: {
        mode: 'dev',
        options: {
            stream: accessLogStream
        }
    }
}

const production = {
    name: 'production',
    asset_path: process.env.CODEIAL_ASSET_PATH,
    session_cookie_key: process.env.CODEIAL_SESSION_COOKIE_KEY,
    db: process.env.CODEIAL_DB,
    smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth:{
        user: process.env.CODEIAL_GMAIL_USERNAME,
        pass: process.env.CODEIAL_GMAIL_PASSWORD
        }
    },
    google_client_ID: process.env.CODEIAL_GOOGLE_CLIENT_ID,
    google_client_secret: process.env.CODEIAL_GOOGLE_CLIENT_SECRET,
    google_callbackURL: process.env.CODEIAL_GOOGLE_CALLBACK_URL,
    jwt_secret: process.env.CODEIAL_JWT_SECRET,
    morgan: {
        mode: 'combined',
        options: {
            stream: accessLogStream
        }
    }
}

module.exports= development;