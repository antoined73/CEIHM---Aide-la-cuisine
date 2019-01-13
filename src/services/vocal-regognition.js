import annyang from 'annyang';

let commands;

if (annyang) {
    annyang.setLanguage('fr-FR')
}

export default {
    pause: () => {
        annyang.pause();
    },
    resume: () => {
        annyang.resume()
    },
    stop: () => {
        annyang.abort();
    },
    initContext: (context) => {
        if (commands) {
            annyang.removeCommands(commands);
        }
        commands = context;
        annyang.addCommands(context);
        annyang.start();
    }
}