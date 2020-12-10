const { exec } = require('child_process');
const npm = require('npm');

const Reset = '\x1b[0m';
const Bright = '\x1b[1m';
const Dim = '\x1b[2m';
const Underscore = '\x1b[4m';
const Blink = '\x1b[5m';
const Reverse = '\x1b[7m';
const Hidden = '\x1b[8m';

const FgBlack = '\x1b[30m';
const FgRed = '\x1b[31m';
const FgGreen = '\x1b[32m';
const FgYellow = '\x1b[33m';
const FgBlue = '\x1b[34m';
const FgMagenta = '\x1b[35m';
const FgCyan = '\x1b[36m';
const FgWhite = '\x1b[37m';

const BgBlack = '\x1b[40m';
const BgRed = '\x1b[41m';
const BgGreen = '\x1b[42m';
const BgYellow = '\x1b[43m';
const BgBlue = '\x1b[44m';
const BgMagenta = '\x1b[45m';
const BgCyan = '\x1b[46m';
const BgWhite = '\x1b[47m';

const run_test = () => {
    console.log('Running Test scripts');

    // exec('npm test');
    npm.command.run('test');
};

const run_build = () => {
    console.log(
        'Creating production build of react project'
    );

    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            process.exit();
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            process.exit();
        }
        console.log(`stdout: ${stdout}`);
    });
};

const run_github = () => {
    console.log('Pushing latest changes to github');

    exec('git add .', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            process.exit();
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            process.exit();
        }
        console.log(`stdout: ${stdout}`);
    });

    exec(
        'git commit -m "Latest Publish"',
        (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                process.exit();
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                process.exit();
            }
            console.log(`stdout: ${stdout}`);
        }
    );

    exec('git push', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            process.exit();
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            process.exit();
        }
        console.log(`stdout: ${stdout}`);
    });
};

const run_deploy = () => {
    console.log('Deploying project to Firebase');

    exec('firebase deploy', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            process.exit();
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            process.exit();
        }
        console.log(`stdout: ${stdout}`);
    });
};

const main = () => {
    // run_test();
    run_build();
    run_github();
    run_deploy();
};

main();
