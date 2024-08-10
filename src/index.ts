import qrcode from 'qrcode-terminal'
import { Client, LocalAuth } from 'whatsapp-web.js';
import { router } from './router';
import { ValidateTeamsService } from './interceptors/validate-teams/validate-teams.service';
import { AppDataSource } from './database/data-source';
import { TeamsService } from './teams/teams.service';
const injector = new ValidateTeamsService(AppDataSource)

const client = new Client({
    authStrategy: new LocalAuth(),
    // proxyAuthentication: { username: 'username', password: 'password' },
    puppeteer: { 
        // args: ['--proxy-server=proxy-server-that-requires-authentication.example.com'],
        headless: false,
    }
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true })
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message_create', msg => {
    const { from: groupId, author, body } = msg;    
    
    const message = router[body]?.(msg)
    if(message){
        injector.validate(groupId).then(() => {
            msg.reply(message);
        }).catch(err => {
            msg.reply(err?.message || 'Falha ao realizar este comando.')
        })
    }
});

function main(){   
    AppDataSource.initialize()
    .then(() => {
        client.initialize();
    })
    .catch((error) => console.log(error))
}

main()